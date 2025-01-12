import { ApiError } from "@/lib/api/error";
// import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function bodyParser(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get('content-type')?.toLowerCase() || '';

  // Handle JSON
  if (contentType.includes('application/json')) {
    return request.json();
  }
  
  // Handle Form Data
  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    return Object.fromEntries(formData);
  }

  // Handle URL Encoded
  if (contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await request.formData();
    return Object.fromEntries(formData);
  }

  // Return empty object if no content type matches or body is empty
  return {};
}

export function errorParser(error: unknown): { body: { code: string; message: string; description: string; }; status: number } {
  if (error instanceof ApiError) {
    const _e = error as ApiError;
    return {
      body: {
        code: _e.code,
        message: _e.message,
        description: _e.description,
      },
      status: _e.status,
    }
  }
  if (error instanceof Error) {
    const _e = error as Error;
    return {
      body: {
        code: "INTERNAL_SERVER_ERROR",
        message: _e.message,
        description: '',
      },
      status: 500,
    }
  }

  return {
    body: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal Server Error",
      description: '',
    },
    status: 500,
  }
}

export type Controller = (
  request: RequestData,
) => Promise<unknown>;

export type RequestData = {
  body: Record<string, unknown>;
  query: Record<string, unknown>;
  headers: Record<string, unknown>;
  cookies: Record<string, unknown>;
}

export function ApiAdapter(controller: Controller) {
  return async (request: Request) => {
    try {
      const url = new URL(request.url);
      const requestData: RequestData = {
        body: await bodyParser(request),
        query: Object.fromEntries(url.searchParams),
        headers: Object.fromEntries(request.headers),
        cookies: Object.fromEntries(request.headers.get('cookie')?.split(';').map(c => c.trim().split('=')) || []),
      }

      const result = await controller(requestData);

      return NextResponse.json(result);
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof ApiError) {
          console.error(error.message, error.description,error.stack)
        } else {
          console.error(error.message, error.stack)
        }
      } else {
        console.error('Unexpected error (non error object)')
      }
      const { body, status } = errorParser(error);
      return NextResponse.json(body, { status });
    }
  }
}
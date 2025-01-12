export class ApiError extends Error {
  constructor(message: string, public code: string = 'INTERNAL_SERVER_ERROR', public status: number = 500, public description: string = '') {
    super(message);
    this.name = "ApiError";
    this.stack = new Error().stack;
  }
}

export function InvalidParameterError(description?: string) {
  return new ApiError("Please check your input and try again.", "INVALID_PARAMETER", 400, description);
}

export function UnauthorizedError() {
  return new ApiError("Permission denied.", "UNAUTHORIZED", 401);
}

export function ForbiddenError() {
  return new ApiError("Permission denied.", "FORBIDDEN", 403);
}

export function NotFoundError(resource: string) {
  return new ApiError(`${resource} not found.`, "NOT_FOUND", 404);
}

import Joi from "joi";
import { InvalidParameterError } from "@/lib/api/error";
import { RequestData, ApiAdapter } from "@/lib/api/adapter";
import { SLink } from "@/models/SLink";

export type RequestType = {
  code: string
}

export type ResponseType = {
  fullLink: string
}

const validate = (request: RequestData): RequestType => {
  const data = {
    code: request.query.code,
  }

  const schema = Joi.object({
    code: Joi.string().required(),
  })

  const { error, value } = schema.validate(data)

  if (error) {
    throw InvalidParameterError(error.message)
  }

  return value
}

const controller = async (request: RequestData): Promise<ResponseType> => {
  const data = validate(request);
  const slink = await SLink.findOne({ code: data.code })
  
  if (!slink) {
    throw InvalidParameterError('Link not found')
  }

  return {
    fullLink: slink.full_link,
  }
}

export const GET = ApiAdapter(controller);

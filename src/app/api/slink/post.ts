import Joi from "joi";
import { InvalidParameterError } from "@/lib/api/error";
import { RequestData } from "@/lib/api/adapter";
import { ApiAdapter } from "@/lib/api/adapter";
import { SLink } from "@/models/SLink";
import { binary_to_base58} from 'base58-js'
import dbConnect from '@/lib/db/mongo'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export type RequestType = {
  fullLink: string
}

export type ResponseType = {
  id: string,
  code: string,
  shortLink: string,
} 

const validate = (request: RequestData): RequestType => {
  const data = {
    fullLink: request.body.fullLink,
  }

  const schema = Joi.object({
    fullLink: Joi.string().uri().required(),
  })

  const { error, value } = schema.validate(data)

  if (error) {
    throw InvalidParameterError(error.message)
  }

  return value
}

const generateCode = (): string => {
  // Get timestamp
  const tz = new Date().getTime()
  
  // Generate random 4 digit number (1000-9999)
  const salt = Math.floor(Math.random() * 9000) + 1000
  
  // Convert to Uint8Array for base58 encoding
  const tzBytes = new Uint8Array(new BigInt64Array([BigInt(tz)]).buffer)
  const saltBytes = new Uint8Array(new Int32Array([salt]).buffer)
  
  // Encode to base58
  const tz58 = binary_to_base58(tzBytes)
  const salt58 = binary_to_base58(saltBytes)
  
  return `${tz58}${salt58}`
}

const controller = async (request: RequestData): Promise<ResponseType> => {
  const data = validate(request);

  const code = generateCode()
  const shortLink = `${BASE_URL}/${code}`

  console.log('creating', code, data.fullLink)
  await dbConnect()
  const slink = new SLink({
    code,
    full_link: data.fullLink,
  })
  await slink.save()
  const id = slink.id?.toString() as string || ''

  return {
    id,
    code,
    shortLink,
  }
}

export const POST = ApiAdapter(controller);
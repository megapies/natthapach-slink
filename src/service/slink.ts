import axios from 'axios'
import { ResponseType } from '@/app/api/slink/post'
import { ResponseType as GetResponseType } from '@/app/api/slink/get'
export async function generateSLink(fullLink: string): Promise<ResponseType | null> {
  const apiUrl = '/api/slink'

  try {
    const response = await axios.post(apiUrl, {
      fullLink
    }, { headers: { 'Content-Type': 'application/json' } })

    return response.data as ResponseType
  } catch (error) {
    console.error(error)

    return null
  }
}

export async function getSLink(code: string): Promise<GetResponseType | null> {
  const apiUrl = `/api/slink?code=${encodeURIComponent(code)}`

  try {
    const response = await axios.get(apiUrl)

    return response.data as GetResponseType
  } catch (error) {
    console.log(error)

    return null
  }
}

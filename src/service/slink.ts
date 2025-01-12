import axios from 'axios'
import { ResponseType } from '@/app/api/slink/post'

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
import { getSLink } from '@/service/slink'
import { redirect } from 'next/navigation'

export default async function Page({ params }: { params: { code: string } }) {
  const result = await getSLink(params.code)
  
  if (!result) {
    redirect('/404')
  }

  redirect(result.fullLink)
}

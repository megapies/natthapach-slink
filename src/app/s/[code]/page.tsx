'use client'

import { getSLink } from '@/service/slink'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  params: {
    code: string
  }
}

export default function Page({ params }: Props) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [fullLink, setFullLink] = useState<string | null>(null)

  useEffect(() => {
    const fetchAndRedirect = async () => {
      const { code } = await params
      const data = await getSLink(code)
      
      console.log('data', data)
      if (!data) {
        router.push('/404')
        return
      }

      setFullLink(data.fullLink)
      setIsLoading(false)
    }

    fetchAndRedirect()
  }, [params, router])
  
  return (
    <div>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
        {isLoading && fullLink ? 'Loading...' : <Link href={fullLink || ''}>Go Next</Link>}
      </button>
    </div>
  )
}

import { getSLink } from '@/service/slink'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import FacebookPage from '@/components/FacebookPage'
import YouTubeChannel from '@/components/YouTubeChannel'
import InstagramProfile from '@/components/InstagramProfile'
import TiktokEmbed from '@/components/TiktokEmbed'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

// ในส่วน JSX:

export default async function Page({ params }: { params: { code: string } }) {
  const result = await getSLink(params.code)

  if (!result) {
    redirect('/404')
  }

  return (
    <div className='bg-gray-100'>

      <div className='flex flex-col gap-4 py-8 container mx-auto h-screen p-8 justify-between'>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='text-2xl font-bold'>Thank you for interesting</h1>
          <p className='text-sm text-gray-500'>Please follow us on social media</p>
        </div>
        <ScrollArea className='w-full bg-white rounded-lg p-4 flex items-center justify-center' >
          <div className='flex flex-row gap-4 w-full h-[500px] justify-center'>
            <TiktokEmbed />
            <InstagramProfile />
            <FacebookPage />
            {/* <YouTubeChannel /> */}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <div className='flex justify-center'>
          <Button variant='black' className='w-full md:w-1/2 lg:w-1/3'>
            <Link href={result.fullLink}>Continute to Download</Link>
          </Button>
        </div>

        <div className='flex justify-center w-full text-center text-sm text-gray-500'>
          Powered by <Link href='https://slink.natthapach.com' className='text-blue-500'>&nbsp;SLINK</Link>
        </div>
      </div>
    </div>
  )
}

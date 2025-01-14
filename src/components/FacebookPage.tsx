'use client'
import { useEffect } from 'react'
import { FaFacebook } from 'react-icons/fa'

export default function FacebookPage() {
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v21.0&appId=552030443854695'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }
    
    if (typeof window !== 'undefined') {
      loadFacebookSDK()
    }
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-center gap-2 w-[400px]'>
        <FaFacebook className='text-2xl text-blue-500' />
        <h1 className='text-2xl font-bold text-center'>Facebook</h1>
      </div>
      <div 
        className="fb-page" 
        data-href="https://www.facebook.com/arakoai"
        data-tabs="timeline"
        data-width="400"
        data-height="431"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote cite="https://www.facebook.com/arakoai" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/arakoai"></a>
        </blockquote>
      </div>
    </div>
  )
} 
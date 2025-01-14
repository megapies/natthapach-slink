'use client'
import { useEffect } from 'react'
import { FaInstagram } from 'react-icons/fa'

export default function InstagramProfile() {
  useEffect(() => {
    // Load Instagram Embed API
    const loadInstagramAPI = () => {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    if (typeof window !== 'undefined') {
      loadInstagramAPI()
    }
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <FaInstagram className='text-2xl text-black' />
        <h1 className='text-2xl font-bold text-center'>Instagram</h1>
      </div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/arako.ai/"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '8px',
          // boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          // maxWidth: '300px',
          // minWidth: '300px',
          height: '435px',
          width: '330px',
          padding: 0,
          // width: 'calc(100% - 2px)'
        }}
      >
      </blockquote>
    </div>
  )
} 
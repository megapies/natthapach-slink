'use client'
import { useEffect } from 'react'

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
    <>
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
    </>
  )
} 
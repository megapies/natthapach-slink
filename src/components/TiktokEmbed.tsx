'use client'
import { useEffect } from 'react'
import { FaTiktok } from 'react-icons/fa'
export default function TiktokEmbed() {
  useEffect(() => {
    // Load TikTok SDK
    const loadTikTokSDK = () => {
      const script = document.createElement('script')
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    if (typeof window !== 'undefined') {
      loadTikTokSDK()
    }

    // Add custom CSS to remove borders
    const style = document.createElement('style')
    style.textContent = `
      .css-ekq38o {
        border: none !important;
        box-shadow: none !important;
      }
    `
    document.head.appendChild(style)


  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <FaTiktok className='text-2xl text-black' />
        <h1 className='text-2xl font-bold text-center'>Tiktok</h1>
      </div>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@madam.tokki"
        data-unique-id="madam.tokki"
        data-embed-type="creator"
        style={{
          width: "400px",
          height: "450px",
          margin: "0",
          border: "none",
          padding: "0",
        }}
      >
        <section>
          <a target="_blank" href="https://www.tiktok.com/@madam.tokki">@madam.tokki</a>
        </section>
      </blockquote>
    </div>
  )
} 
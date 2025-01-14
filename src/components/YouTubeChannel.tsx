'use client'
import { useEffect } from 'react'

export default function YouTubeChannel() {
  useEffect(() => {
    // Load YouTube iframe API
    const loadYouTubeAPI = () => {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/platform.js'
      script.async = true
      document.body.appendChild(script)
    }
    
    if (typeof window !== 'undefined') {
      loadYouTubeAPI()
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Latest Video Embed */}
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/videoseries?list=UCDdI-RSR7FJ0_KoR-Ti6eMQ"
          title="Latest YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Subscribe Button */}
      <div className="flex justify-center">
        <div 
          className="g-ytsubscribe" 
          data-channelid="UCDdI-RSR7FJ0_KoR-Ti6eMQ"
          data-layout="full" 
          data-count="default"
        ></div>
      </div>
    </div>
  )
} 
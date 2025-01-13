'use client'
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { redirect } from "next/navigation"
import { FcGoogle } from 'react-icons/fc'
import { BsApple, BsFacebook } from 'react-icons/bs'

import Image from "next/image"
import Link from "next/link"
export default function AuthPage() {
  const { data: session } = useSession()
  if (session) {
    redirect('/console')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
      <div className="hidden md:block md:col-span-3 bg-black h-screen relative">
        <Image 
          src="/images/SLINK-auth-bg.png" 
          alt="Background" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col items-center justify-end pb-20">
          <p className="text-white text-2xl lg:text-3xl">Turn Your Link into Followers</p>
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#5e17eb]/10 via-white to-[#5e17eb]/5 gap-4 p-4">
        <div className="flex flex-col items-center justify-center gap-4 my-8">
          <div className="w-[50%]">
            <Link href="/" className="flex justify-center">
              <Image src="/SLINK-logo.svg" alt="SLINK" width={0} height={0} className="w-full"/>
            </Link>

          </div>
          <p className="text-sm font-black text-gray-500">THE SOCIAL LINK CONNECTOR</p>
        </div>
        <Card className="w-full max-w-md py-4">
          <CardHeader>
            <CardTitle className='text-center'>Welcome</CardTitle>
          </CardHeader>
          <CardDescription className="text-center px-6 mb-4">
            <div className="flex flex-row items-center gap-4">
              <div className="h-[1px] flex-grow bg-gray-200"></div>
              <span className="text-sm text-gray-500">sign in or sign up</span>
              <div className="h-[1px] flex-grow bg-gray-200"></div>
            </div>
          </CardDescription>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button variant="outline" onClick={() => signIn('google')} className="w-full flex items-center gap-2">
                <FcGoogle className="w-8 h-8" />
                Continue with Google
              </Button>
              <Button variant="outline" disabled className="w-full flex items-center gap-2">
                <BsFacebook className="w-8 h-8 text-blue-500" />
                Continue with Facebook
              </Button>
              <Button variant="outline" disabled className="w-full flex items-center gap-2">
                <BsApple className="w-8 h-8 text-black-500" />
                Continue with Apple
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
'use client'
import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ConsolePage() {
  const { data: session } = useSession()
  if (!session) {
    redirect('/auth')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Console</h1>
      <p>Hi, {session.user?.email}</p>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  )
}

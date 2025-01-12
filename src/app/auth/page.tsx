'use client'
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthPage() {
  const { data: session } = useSession()
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Auth</h1>

      {session ? (
        <div>
          <p>Signed in as: {session.user?.email}</p>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      ) : (
        <Button onClick={() => signIn('google')}>
          Continue with Google
        </Button>
      )}
    </div>
  )
}
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SignInButton, SignOutButton, UserButton, auth } from '@clerk/nextjs'

export default function Landing() {
  const { userId } = auth()
  return (
    <div className='flex items-center justify-center min-h-screen'>

      <div className='w-1/2 h-96 grid grid-cols-3 gap-10'>
        <Card className='w-64 h-min shadow-lg'>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Get Ignite</CardTitle>
            <CardDescription>
              Everything you need to build your SaaS, in one template. Get started for free.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              ▲ Deploy
            </Button>
          </CardContent>
        </Card>
        <Card className='w-64 h-min shadow-lg'>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>User Authentication</CardTitle>
            <CardDescription>
              User authentication with email and password, and social logins implemented with Clerk.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              {
                userId ?
                  <SignOutButton /> : <SignInButton />
              }
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

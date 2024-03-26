import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Landing() {
  return (
    <div className='flex items-center justify-center min-h-screen'>

      <div className='grid grid-cols-3 gap-5 flex flex-wrap'>
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
              Hello
            </Button>
          </CardContent>
        </Card>
        <Card className='w-64 h-min shadow-lg'>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>
              Includes shadcn/ui component library, along with TailwindCSS + sonner for toasts.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              <Link target='_blank' href="https://ui.shadcn.com/docs/components/accordion">View Components</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className='w-64 h-min shadow-lg'>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Billing</CardTitle>
            <CardDescription>
              Lemonsqueezy billing integration, including subscription management and invoices.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              <Link target='_blank' href="https://ui.shadcn.com/docs/components/accordion">View Components</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className='w-64 h-min shadow-lg'>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Serverless Postgres</CardTitle>
            <CardDescription>
              Ignite packs Neon Postgres as the serverless postgres database, with Prisma for ORM.
              
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              <Link target='_blank' href="https://ui.shadcn.com/docs/components/accordion">View Components</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

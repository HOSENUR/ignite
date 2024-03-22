import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { cn } from "@/lib/utils"
import { BellIcon, CheckIcon } from 'lucide-react'
import { Button } from './ui/button'

export default function Landing() {
  return (
    <div className='w-1/2 h-96'>
      <Card className='w-64 shadow-lg'>
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
    </div>
  )
}

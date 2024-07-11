import React from 'react'
import { prisma } from '../lib/database'
import { Button } from "@repo/ui/components/ui/button"


export default async function Home() {
  const kv = await prisma.kV.findFirst()
  return (
    <div>
      <div className='bg-red-500'>
        hi

      </div>
      {JSON.stringify(kv)}
      <Button>Hello</Button>
    </div>
  )
}

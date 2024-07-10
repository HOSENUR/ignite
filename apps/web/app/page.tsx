import React from 'react'
import { prisma } from '../lib/db'

export default async function Home() {
  const kv = await prisma.kV.findFirst()
  return (
    <div>
      {JSON.stringify(kv)}
    </div>
  )
}

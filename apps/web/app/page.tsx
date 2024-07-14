import React from 'react'
import { prisma } from '../lib/database'
import { Button } from "@repo/ui/components/ui/button"
import { logAction } from '../actions/log-action'


export default async function Home() {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  )
}

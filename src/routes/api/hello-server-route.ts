import React, { useState } from 'react'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { createFileRoute } from '@tanstack/react-router'

export const ServerRoute = createServerFileRoute('/api/hello-server-route').methods({
  POST: async ({ request }) => {
    const body = await request.json()
    return new Response(JSON.stringify({ message: `Hello, ${body.name}!` }))
  },
})

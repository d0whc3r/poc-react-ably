'use client'

import * as Ably from 'ably'
import { AblyProvider } from 'ably/react'
import { Presence } from '../Presence/Presence'
import { useSearchParams } from 'next/navigation'

interface AblyComponentProps {
  channel: string
  user: string
}

export default function AblyComponent({ channel, user }: AblyComponentProps) {
  const parsedUser = useSearchParams().get('user') || user
  const client = new Ably.Realtime.Promise({ authUrl: '/token', authMethod: 'POST', clientId: parsedUser })

  return (
    <AblyProvider client={client}>
      <div>
        Ably component - #{channel}: {parsedUser}
        <Presence channel={channel} />
      </div>
    </AblyProvider>
  )
}

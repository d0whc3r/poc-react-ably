import { AblyProvider, useAbly, usePresence } from 'ably/react'
import { useEffect } from 'react'

interface PresenceProps {
  channel: string
}

export function Presence({ channel }: PresenceProps) {
  const { presenceData } = usePresence(channel)

  return (
    <>
      <p>Users list:</p>
      <ul>
        {presenceData.map((msg, index) => (
          <li key={index}>
            id[{msg.clientId}]: {JSON.stringify(msg, null, 2)}
          </li>
        ))}
      </ul>
    </>
  )
}

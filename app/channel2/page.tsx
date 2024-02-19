import AblyComponent from '@/components/Ably/Ably'
import Link from 'next/link'

export default async function Channel2Page() {
  const channel = 'channel2'
  const user = `user-${Math.random().toString(36).slice(2)}`

  return (
    <main>
      <h1>Channel 2</h1>
      <Link href="/channel2" target="_blank">
        Open same channel (new tab)
      </Link>
      <AblyComponent channel={channel} user={user} />
    </main>
  )
}

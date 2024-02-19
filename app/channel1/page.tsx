import AblyComponent from '@/components/Ably/Ably'
import Link from 'next/link'

export default async function Channel1Page() {
  const channel = 'channel1'
  const user = `user-${Math.random().toString(36).slice(2)}`

  return (
    <main>
      <h1>Channel 1</h1>
      <Link href="/channel1" target="_blank">
        Open same channel (new tab)
      </Link>
      <AblyComponent channel={channel} user={user} />
    </main>
  )
}

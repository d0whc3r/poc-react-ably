import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Sample pusher page</h1>
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/channel1">Channel 1</Link>
        <Link href="/channel2">Channel 2</Link>
      </section>
    </main>
  )
}

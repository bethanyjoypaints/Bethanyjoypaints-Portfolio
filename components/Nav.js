import Link from 'next/link'
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-bold">Bethany Joy Paints</div>
        <ul className="flex gap-6 text-sm uppercase tracking-wide">
          <li><Link href="/scenic">Scenic Charge</Link></li>
          <li><Link href="/backdrops">Backdrops</Link></li>
          <li><Link href="/murals">Murals</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
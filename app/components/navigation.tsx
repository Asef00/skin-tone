import Link from 'next/link'
import { ModeToggle } from './theme-toggle'

export default function Navigation() {
  return (
    <nav className="flex justify-between gap-4 items-center p-4 max-w-7xl mx-auto">
      <Link href="/" className="text-3xl font-bold mr-4">
        Lustra
      </Link>
      <div className="flex gap-4 md:gap-8 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <ModeToggle />
    </nav>
  )
}

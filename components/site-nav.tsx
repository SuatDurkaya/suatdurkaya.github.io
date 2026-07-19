'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'stack', href: '/stack' },
  { label: 'learning', href: '/learning' },
]

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-1 font-pixel text-xs font-bold uppercase tracking-wider text-primary"
        >
          <span aria-hidden="true">{'>'}</span>
          <span>SD</span>
          <span className="blink text-secondary" aria-hidden="true">
            _
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-sm px-2 py-1.5 font-mono text-xs transition-colors sm:px-3 ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {active ? `[${link.label}]` : link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

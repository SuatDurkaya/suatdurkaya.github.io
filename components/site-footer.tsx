const links = [
  { label: 'GitHub', href: 'https://github.com/suatdurkaya' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/suat-durkaya' },
  { label: 'Email', href: 'mailto:hello@suatdurkaya.dev' },
  { label: 'suatdurkaya.dev', href: 'https://suatdurkaya.dev' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-8 border-t border-border px-4 py-10 md:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted-foreground">
          {'suat@durkaya:~$ echo "thanks for stopping by" && exit 0'}
        </p>
        <nav aria-label="Contact links">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

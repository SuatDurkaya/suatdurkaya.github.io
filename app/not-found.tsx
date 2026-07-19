import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteNav />

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl rounded-lg border border-border bg-muted">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-2.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="size-2.5 rounded-full bg-secondary" aria-hidden="true" />
            <span className="size-2.5 rounded-full bg-tech-green" aria-hidden="true" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground">
              suat@durkaya: ~
            </span>
          </div>

          {/* Terminal body */}
          <div className="flex flex-col gap-3 p-6 font-mono text-sm md:p-8">
            <p className="text-muted-foreground">
              <span className="text-tech-green">{'suat@durkaya'}</span>
              <span>{':'}</span>
              <span className="text-secondary">{'~'}</span>
              <span>{'$ cd '}</span>
              <span className="text-foreground">{'/this-page'}</span>
            </p>
            <p className="text-primary">
              {'bash: cd: /this-page: No such file or directory'}
            </p>

            <p className="mt-2 text-muted-foreground">
              <span className="text-tech-green">{'suat@durkaya'}</span>
              <span>{':'}</span>
              <span className="text-secondary">{'~'}</span>
              <span>{'$ echo $?'}</span>
            </p>
            <p className="font-pixel text-4xl font-bold uppercase text-foreground md:text-5xl">
              404
            </p>

            <p className="mt-2 text-muted-foreground">
              {'The page you are looking for does not exist, was moved, or never compiled.'}
            </p>

            <p className="mt-4 text-muted-foreground">
              <span className="text-tech-green">{'suat@durkaya'}</span>
              <span>{':'}</span>
              <span className="text-secondary">{'~'}</span>
              <span>{'$ '}</span>
              <Link
                href="/"
                className="text-primary underline-offset-4 transition-[filter] hover:brightness-110 hover:underline"
              >
                {'cd ~ && exit 0'}
              </Link>
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-foreground align-middle" aria-hidden="true" />
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

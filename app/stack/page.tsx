import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { PageHeader } from '@/components/page-header'
import { Stack } from '@/components/stack'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Stack — Suat Durkaya',
  description:
    'Technologies I use across backend development, infrastructure, cloud, observability, CI/CD, and systems operations.',
}

export default function StackPage() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        title="Stack"
        path="/etc/toolbox"
        description="The languages, platforms, and operational tools I use — plus what I am learning next."
      />
      <Stack />
      <SiteFooter />
    </main>
  )
}

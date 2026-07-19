import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { PageHeader } from '@/components/page-header'
import { Stack } from '@/components/stack'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Stack — Suat Durkaya',
  description: 'The tools and technologies I work with day to day.',
}

export default function StackPage() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        title="Stack"
        path="/etc/toolbox"
        description="The tools I reach for. Not a wishlist — things I actually use to build and run stuff."
      />
      <Stack />
      <SiteFooter />
    </main>
  )
}

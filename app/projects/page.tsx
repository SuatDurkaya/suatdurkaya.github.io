import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { PageHeader } from '@/components/page-header'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Projects — Suat Durkaya',
  description:
    'Things I have built: monitoring stacks, dashboards, honeypots, and more.',
}

export default function ProjectsPage() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        title="Projects"
        path="~/builds"
        description="Things I've shipped while learning platform engineering — each one taught me something new about running real systems."
      />
      <Projects />
      <SiteFooter />
    </main>
  )
}

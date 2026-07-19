import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { PageHeader } from '@/components/page-header'
import { Learning } from '@/components/learning'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Learning — Suat Durkaya',
  description: 'What I am currently learning on the road to platform engineering.',
}

export default function LearningPage() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        title="Currently Learning"
        path="~/learning.log"
        description="A live feed of what I'm studying right now. This list changes as I level up."
      />
      <Learning />
      <SiteFooter />
    </main>
  )
}

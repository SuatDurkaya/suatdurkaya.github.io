import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <SiteFooter />
    </main>
  )
}

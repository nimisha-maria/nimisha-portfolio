import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stack } from '@/components/stack'
import { Projects } from '@/components/projects'
import { Timeline } from '@/components/timeline'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="relative">
        <Hero />
<About />
<Experience />
<Stack />
<Projects />
<Timeline />
<Certifications />
<Contact />
      </main>
    </>
  )
}

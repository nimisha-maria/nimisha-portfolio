import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Award, BadgeCheck } from 'lucide-react'

const certs = [
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'Kaggle',
  },
  {
    title: 'Machine Learning Engineer Preparation',
    issuer: 'Udemy',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="07"
        eyebrow="Certifications"
        title="Credentials I've earned."
        description="Building foundations across Java and machine learning through hands-on learning."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i % 3}>
            <div className="glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40">
              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                <Award className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium leading-snug text-foreground text-balance">{c.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <BadgeCheck className="size-3.5 text-primary" aria-hidden />
                  {c.issuer}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Briefcase, Building2 } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I'm growing right now."
        description="Gaining hands-on experience while learning modern software engineering practices."
      />

      <Reveal>
        <article className="glass group relative overflow-hidden rounded-3xl p-8 transition-colors hover:border-primary/40 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
              <Briefcase className="size-6" aria-hidden />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Java Full Stack Developer Intern
                </h3>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-wide text-primary uppercase">
                  Internship
                </span>
              </div>
              <p className="mt-2 flex items-center gap-2 font-mono text-sm text-muted-foreground">
                <Building2 className="size-4 text-primary" aria-hidden />
                Quest Innovative Solutions
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                Currently gaining hands-on experience in Java Full Stack Development while learning
                modern software engineering practices and Generative AI integration.
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  )
}

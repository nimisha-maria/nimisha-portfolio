import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  'Computer Science',
  'Java Programming',
  'Full Stack Development',
  'Spring Boot',
  'React',
  'REST APIs',
  'Generative AI',
  'Building Real World Applications',
]

export function Timeline() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="05"
        eyebrow="Learning Journey"
        title="How my focus has grown."
        description="A step-by-step path of the skills and technologies I've been learning and building with."
      />

      <ol className="relative ml-2 border-l border-border pl-8 sm:ml-4 sm:pl-10">
        {steps.map((step, i) => (
          <Reveal as="li" key={step} delay={i % 4} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 grid size-5 place-items-center rounded-full bg-background ring-1 ring-primary/40 sm:-left-[51px]">
              <span className="size-2.5 rounded-full bg-primary" />
            </span>
            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="font-mono text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                {step}
              </h3>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

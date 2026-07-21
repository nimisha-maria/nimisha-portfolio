import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-primary uppercase">
          <span>{index}</span>
          <span className="h-px w-8 bg-primary/50" />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={2}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Boxes, BrainCircuit, Gauge, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: Boxes,
    title: 'Full Stack Development',
    body: 'Building end-to-end applications with Java, Spring Boot, and React — from REST APIs to responsive interfaces.',
  },
  {
    icon: BrainCircuit,
    title: 'Generative AI',
    body: 'Exploring LLMs, Retrieval-Augmented Generation, and AI integration to build intelligent applications.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Applications',
    body: 'Learning to build secure services with Spring Security, JWT authentication, and thoughtful API design.',
  },
  {
    icon: Gauge,
    title: 'Clean Code',
    body: 'Focused on writing clean, maintainable code and continuously improving through hands-on projects.',
  },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Full stack developer with a passion for AI."
        description="A Computer Science graduate focused on the intersection of modern full stack development and artificial intelligence."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Computer Science graduate passionate about full stack software development and
            artificial intelligence.
          </p>
          <p>
            I enjoy building secure and scalable applications using Java, Spring Boot, React,
            PostgreSQL, and REST APIs while continuously learning modern software engineering
            practices.
          </p>
          <p>
            My current interests include Large Language Models (LLMs), Retrieval-Augmented
            Generation (RAG), AI integration, and building intelligent applications that solve
            real-world problems.
          </p>
          <p>
            I believe in writing clean, maintainable code and continuously improving my technical
            skills through projects and hands-on learning.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <div className="glass group h-full rounded-2xl p-6 transition-colors hover:border-primary/40">
                <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
                  <p.icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

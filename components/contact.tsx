import { Reveal } from '@/components/reveal'
import { Mail, FileDown, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/nimisha-maria',
    icon: GithubIcon,
    handle: 'github.com/nimisha-maria',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nimisha-maria',
    icon: LinkedinIcon,
    handle: 'in/nimisha-maria',
  },
  {
    label: 'Email',
    href: 'mailto:nimishamaria3@gmail.com',
    icon: Mail,
    handle: 'nimishamaria3@gmail.com',
  },
  { label: 'Resume', href: '/resume.pdf', icon: FileDown, handle: 'Download PDF' },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      </div>
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-5 font-mono text-xs tracking-widest text-primary uppercase">
            08 — Contact
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Let&apos;s build something{' '}
            <span className="text-gradient">intelligent</span>.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Open to full stack and AI engineering opportunities, collaborations, and learning
            together. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <a
            href="mailto:nimishamaria3@gmail.com"
            className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Start a conversation
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <a
                href={s.href}
                className="glass group flex items-center gap-3 rounded-2xl p-4 text-left transition-colors hover:border-primary/40"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">{s.label}</span>
                  <span className="block truncate font-mono text-xs text-muted-foreground">
                    {s.handle}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nimisha Ann Maria. Built with Next.js &amp; Framer Motion.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Java Full Stack Developer
          </p>
        </div>
      </footer>
    </section>
  )
}

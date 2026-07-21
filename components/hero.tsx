'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import { ArrowUpRight, Download, MousePointer2 } from 'lucide-react'
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import { Sparkles } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}
const techStack = [
  {
    name: "Java",
    className: "top-10 -left-8",
    duration: 4.5,
  },
  {
    name: "Spring Boot",
    className: "top-0 right-6",
    duration: 5.5,
  },
  {
    name: "React",
    className: "top-28 -right-10",
    duration: 6,
  },
  {
    name: "PostgreSQL",
    className: "bottom-12 -left-10",
    duration: 5,
  },
  {
    name: "Gen AI",
    className: "bottom-4 right-0",
    duration: 4,
  },
]
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="aurora-blob absolute top-1/4 -left-40 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[130px] [animation-delay:-5s]" />
        <div className="aurora-blob absolute -bottom-40 right-0 h-[36rem] w-[36rem] rounded-full bg-primary/15 blur-[130px] [animation-delay:-8s]" />
      </div>
      {/* Grid overlay */}
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0 -z-10" />
      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-8 lg:grid-cols-[1.25fr_0.75fr]">        <div className="flex flex-col">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs tracking-widest text-primary uppercase"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Java Full Stack Developer · Kerala, India
        </motion.p>

        <h1 className="font-display text-5xl max-w-[760px] leading-[0.95] font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl">
          <motion.span custom={1} variants={fadeUp} initial="hidden" animate="visible" className="block text-foreground">
            BUILDING
          </motion.span>
          <motion.span custom={2} variants={fadeUp} initial="hidden" animate="visible" className="block text-foreground">
            FULL STACK
          </motion.span>
          <motion.span custom={3} variants={fadeUp} initial="hidden" animate="visible" className="block whitespace-nowrap text-gradient">
            AI APPLICATIONS
          </motion.span>
        </h1>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          Computer Science graduate passionate about building modern full stack applications using
          Java, Spring Boot, React, REST APIs, PostgreSQL, and Generative AI.
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/resume.pdf"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:bg-secondary"
          >
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
        </motion.div>

        <motion.ul
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap gap-3"
        >
          {['Java', 'Spring Boot', 'React', 'Generative AI'].map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-secondary/50 px-4 py-2 font-mono text-xs tracking-wide text-muted-foreground"
            >
              {s}
            </li>
          ))}
        </motion.ul>
        </div>
        {/* Right Side */}
<div className="relative hidden h-[500px] w-[500px] items-center justify-center lg:flex">

  {/* Glow */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.18, 0.32, 0.18],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute h-[430px] w-[430px] rounded-full bg-primary/20 blur-[120px]"
  />

  {/* Java */}
  <motion.div
    animate={{
  y: [0, -8, 0],
  rotate: [0, -2, 0],
}}

transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
}}
    className="absolute left-0 top-32 z-20"
  >
    <div className="glass flex items-center gap-2 rounded-full px-4 py-2 shadow-xl">
      <FaJava className="text-orange-500 text-lg" />
      <span className="text-sm font-semibold">Java</span>
    </div>
  </motion.div>

  {/* React */}
  <motion.div
    animate={{
  y: [0, -8, 0],
  rotate: [0, 4, 0],
}}
    className="absolute right-0 top-28 z-20"
  >
    <div className="glass flex items-center gap-2 rounded-full px-4 py-2 shadow-xl">
      <FaReact className="text-sky-500 text-lg" />
      <span className="text-sm font-semibold">React</span>
    </div>
  </motion.div>
  {/* Spring Boot */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-10 bottom-28 z-20"
>
  <div className="glass flex items-center gap-2 rounded-full px-4 py-2 shadow-xl">

    <SiSpringboot className="text-green-600 text-lg" />

    <span className="text-sm font-semibold">
      Spring Boot
    </span>

  </div>
</motion.div>
{/* PostgreSQL */}
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 5.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-0 bottom-20 z-20"
>
  <div className="glass flex items-center gap-2 rounded-full px-4 py-2 shadow-xl">

    <SiPostgresql className="text-sky-700 text-lg" />

    <span className="text-sm font-semibold">
      PostgreSQL
    </span>

  </div>
</motion.div>
{/* AI */}
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 -translate-x-1/2 bottom-2 z-20"
>
  <div className="glass flex items-center gap-2 rounded-full px-4 py-2 shadow-xl">

    <Sparkles className="text-violet-600 h-5 w-5" />

    <span className="text-sm font-semibold">
      Generative AI
    </span>

  </div>
</motion.div>
  {/* Placeholder Circle */}
<motion.div
  initial={{ rotateX: 0, rotateY: 0 }}
  whileHover={{
    rotateX: -5,
    rotateY: 5,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 180,
    damping: 18,
  }}
  style={{
    transformStyle: "preserve-3d",
  }}
  className="glass relative flex h-[360px] w-[360px] items-center justify-center overflow-hidden rounded-full border border-border"
>
  <Image
    src="/nimisha.png"
    alt="Nimisha Ann Maria"
    width={340}
    height={340}
    priority
    className="object-contain float"
  />

</motion.div>
</div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
      >
        <MousePointer2 className="size-4" aria-hidden />
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-primary"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}

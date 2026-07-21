'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    name: 'Support Hub',
    tagline: 'Customer support ticket management',
    description:
      'A customer support ticket management application focused on secure authentication, ticket management, comments, and scalable REST API design.',
    image: '/projects/support-hub.png',
    tech: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate',
      'JPA',
      'REST APIs',
      'JWT Authentication',
      'PostgreSQL',
      'Maven',
    ],
    github: '',
    demo: '',
    status: 'In Development',
  },
  {
    name: 'AI Resume Analyzer',
    tagline: 'AI-powered resume feedback',
    description:
      'An AI-powered application that analyzes resumes against job descriptions using Large Language Models and provides structured feedback.',
    image: '/projects/resume-analyzer.png',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'JWT Authentication',
      'PDF Processing',
      'LLM Integration',
    ],
      github: 'https://github.com/nimisha-maria/resume-analyzer',
      demo: '',
  },
  {
    name: 'RAG Knowledge Assistant',
    tagline: 'Answers grounded in your documents',
    description:
      'An AI assistant that answers questions from uploaded documents using Retrieval-Augmented Generation and semantic search.',
    image: '/projects/rag-assistant.png',
    tech: [
      'Python',
      'FastAPI',
      'LangChain',
      'ChromaDB',
      'Gemini API',
      'Embeddings',
      'Vector Search',
    ],
    github: '',
    demo: '',
      status: 'Coming Soon',


  },
  {
    name: 'AgroWorld AI',
    tagline: 'AI-powered smart farming',
    description:
      'An AI-powered smart farming application that recommends suitable crops using machine learning.',
    image: '/projects/agroworld-ai.png',
    tech: ['Python', 'Flutter', 'REST APIs', 'Machine Learning', 'Random Forest'],
    github: '',
    demo: '',
    status: 'Academic Project',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="04"
        eyebrow="Featured Projects"
        title="Projects I've built."
        description="A selection of full stack and AI projects where software engineering and applied AI come together."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i % 2}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.name} interface screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {project.tagline}
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
                    >
                      <GithubIcon className="size-4" />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      Live Demo
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}

                  {!project.github && !project.demo && project.status && (
  <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-2 text-sm font-medium text-amber-700">
    {project.status}
  </span>
)}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
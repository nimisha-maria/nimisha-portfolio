import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Code2, Server, Database, Sparkles, MonitorSmartphone, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Code2,
    name: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    icon: MonitorSmartphone,
    name: 'Frontend',
    items: ['React', 'HTML5', 'CSS3'],
  },
  {
    icon: Server,
    name: 'Backend',
    items: [
      'Spring Boot',
      'Spring Security',
      'Hibernate',
      'JPA',
      'REST APIs',
      'JWT Authentication',
    ],
  },
  {
    icon: Database,
    name: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: Sparkles,
    name: 'Artificial Intelligence',
    items: [
      'OpenAI API',
      'Gemini API',
      'LangChain',
      'Prompt Engineering',
      'Retrieval-Augmented Generation (RAG)',
      'Embeddings',
      'Vector Databases',
    ],
  },
  {
  icon: Wrench,
  name: 'Developer Tools',
  items: [
    'Git',
    'GitHub',
    'Docker',
    'Maven',
    'Postman',
    'IntelliJ IDEA',
    'Eclipse',
    'VS Code',
  ],
},
]

export function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="03"
        eyebrow="Technical Skills"
        title="The tools I work with."
        description="A growing toolkit spanning the Java ecosystem, modern frontend, databases, and the AI stack powering intelligent applications."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal
            key={cat.name}
            delay={i}
            className={
              cat.name === 'Backend' || cat.name === 'Artificial Intelligence'
                ? 'lg:row-span-2'
                : ''
            }
          >
            <div className="glass group h-full rounded-2xl p-6 transition-colors hover:border-primary/40">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                  <cat.icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">{cat.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

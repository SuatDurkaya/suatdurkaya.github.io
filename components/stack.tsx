interface StackItem {
  name: string
  level: 'expert' | 'intermediate' | 'beginner'
}

interface StackCategory {
  category: string
  items: StackItem[]
}

export function Stack() {
  const stack: StackCategory[] = [
    {
      category: 'Languages',
      items: [
        { name: 'Python', level: 'expert' },
        { name: 'Bash', level: 'expert' },
        { name: 'JavaScript / TypeScript', level: 'intermediate' },
        { name: 'C', level: 'intermediate' },
        { name: 'Go', level: 'beginner' },
      ],
    },
    {
      category: 'Infrastructure & DevOps',
      items: [
        { name: 'Docker', level: 'expert' },
        { name: 'Linux', level: 'expert' },
        { name: 'AWS', level: 'intermediate' },
      ],
    },
    {
      category: 'Monitoring & Logging',
      items: [
        { name: 'Prometheus', level: 'intermediate' },
        { name: 'Grafana', level: 'intermediate' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', level: 'expert' },
        { name: 'MongoDB', level: 'intermediate' },
        { name: 'MySQL', level: 'intermediate' },
        { name: 'Redis', level: 'intermediate' },
      ],
    },
  ]

  const getLevelBadge = (level: string) => {
    const badges: Record<string, string> = {
      expert: '⬤⬤⬤',
      intermediate: '⬤⬤○',
      beginner: '⬤○○',
    }
    return badges[level] || ''
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 md:py-14">
      <p className="mb-8 font-mono text-xs text-muted-foreground">
        {'$ cat /etc/toolbox.conf'}
      </p>

      <div className="space-y-6">
        {stack.map((category) => (
          <div key={category.category} className="space-y-3">
            <h3 className="font-mono text-xs font-semibold text-primary">
              {category.category}
            </h3>
            <ul
              className="flex flex-wrap gap-2"
              aria-label={`${category.category} technologies`}
            >
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="group rounded border border-border bg-muted px-3 py-1.5 transition-colors hover:border-primary hover:bg-muted/80"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-foreground">
                      {item.name}
                    </span>
                    <span
                      className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary"
                      title={`${item.level === 'expert' ? 'Expert' : item.level === 'intermediate' ? 'Intermediate' : 'Beginner'}`}
                    >
                      {getLevelBadge(item.level)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

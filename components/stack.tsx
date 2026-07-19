const stack = [
  'Python',
  'FastAPI',
  'Flask',
  'Docker',
  'AWS',
  'Prometheus',
  'Grafana',
  'Linux',
  'PostgreSQL',
  'Git',
]

export function Stack() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 md:py-14">
      <p className="mb-8 font-mono text-xs text-muted-foreground">
        {'$ cat /etc/toolbox.conf'}
      </p>

      <ul className="flex flex-wrap gap-3" aria-label="Technology stack">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-muted px-4 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

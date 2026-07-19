const topics = [
  'Terraform & Kubernetes fundamentals',
  'Cloud security and detection engineering',
  'Networking, from first principles',
]

export function Learning() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 md:py-14">
      <p className="mb-8 font-mono text-xs text-muted-foreground">
        {'$ tail -f ~/learning.log'}
      </p>

      <ul className="flex flex-col gap-3">
        {topics.map((topic) => (
          <li key={topic} className="flex items-center gap-3">
            <span className="size-2 shrink-0 bg-tech-green" aria-hidden="true" />
            <span className="font-mono text-sm text-muted-foreground">{topic}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

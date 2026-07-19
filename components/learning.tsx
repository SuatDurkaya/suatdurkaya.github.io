const topics = [
  {
    title: 'Terraform & Kubernetes fundamentals',
    status:
      'Working through Infrastructure as Code basics — writing Terraform for small AWS setups and running a local Kubernetes cluster to understand pods, services, and deployments hands-on.',
  },
  {
    title: 'Cloud security and detection engineering',
    status:
      'Building on my SSH honeypot experiments: studying how attacks look in real logs and learning to write detection rules that separate signal from noise.',
  },
  {
    title: 'Networking, from first principles',
    status:
      'Going back to basics — subnets, routing, DNS, and TLS. Filling the gaps so that debugging "it works on my machine" issues stops feeling like guesswork.',
  },
]

export function Learning() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 md:py-14">
      <p className="mb-8 font-mono text-xs text-muted-foreground">
        {'$ tail -f ~/learning.log'}
      </p>

      <ul className="flex flex-col gap-6">
        {topics.map((topic) => (
          <li key={topic.title} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="size-2 shrink-0 bg-tech-green" aria-hidden="true" />
              <h2 className="font-mono text-sm text-foreground">{topic.title}</h2>
            </div>
            <p className="pl-5 font-sans text-sm leading-relaxed text-muted-foreground">
              {topic.status}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

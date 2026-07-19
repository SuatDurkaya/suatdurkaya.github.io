type StackStatus = 'using' | 'learning'

interface StackItem {
  name: string
  status?: StackStatus
}

interface StackCategory {
  category: string
  command: string
  note: string
  items: StackItem[]
}

const stack: StackCategory[] = [
  {
    category: 'Languages',
    command: 'ls ~/languages',
    note: 'Python and Bash are my main tools for backend work, scripting, and automation. I can read and work with JavaScript / TypeScript and C; I am building confidence in Go.',
    items: [
      { name: 'Python' },
      { name: 'Bash' },
      { name: 'JavaScript / TypeScript' },
      { name: 'C' },
      { name: 'Go', status: 'learning' },
    ],
  },
  {
    category: 'Backend & APIs',
    command: 'ls ~/backend',
    note: 'I build Python web applications and REST APIs, from lightweight services to structured Django projects.',
    items: [
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'Django' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'Infrastructure & Cloud',
    command: 'ls ~/infrastructure',
    note: 'I containerize services, administer Linux systems, and work with core AWS compute, storage, identity, networking, and observability services.',
    items: [
      { name: 'Docker' },
      { name: 'Docker Compose' },
      { name: 'Linux' },
      { name: 'AWS' },
      { name: 'EC2' },
      { name: 'S3' },
      { name: 'IAM' },
      { name: 'VPC' },
      { name: 'CloudWatch' },
      { name: 'Kubernetes', status: 'learning' },
    ],
  },
  {
    category: 'CI/CD & Version Control',
    command: 'ls ~/delivery',
    note: 'I use Git-based workflows and have built delivery pipelines across GitHub, GitLab, and Jenkins.',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitHub Actions' },
      { name: 'GitLab CI/CD' },
      { name: 'Jenkins' },
    ],
  },
  {
    category: 'Monitoring & Logging',
    command: 'ls ~/observability',
    note: 'I collect metrics, build dashboards, inspect service logs, and use alerts to understand system behavior.',
    items: [
      { name: 'Prometheus' },
      { name: 'Grafana' },
      { name: 'CloudWatch' },
      { name: 'journalctl' },
    ],
  },
  {
    category: 'Databases',
    command: 'ls ~/databases',
    note: 'I have worked with relational and document databases while building backend applications and local environments.',
    items: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    category: 'Systems & Daily Tools',
    command: 'ls ~/operations',
    note: 'My day-to-day work includes remote administration, service management, network troubleshooting, API testing, and local virtualization.',
    items: [
      { name: 'SSH' },
      { name: 'Nginx' },
      { name: 'systemd' },
      { name: 'Cron' },
      { name: 'UFW / iptables' },
      { name: 'Shell scripting' },
      { name: 'Postman' },
      { name: 'GitHub CLI' },
      { name: 'VS Code' },
      { name: 'VirtualBox / VMware' },
    ],
  },
  {
    category: 'Networking',
    command: 'ls ~/networking',
    note: 'I use networking fundamentals to configure environments and troubleshoot connectivity across local systems and cloud infrastructure.',
    items: [
      { name: 'TCP / IP' },
      { name: 'DNS' },
      { name: 'Subnetting' },
      { name: 'Routing' },
      { name: 'Firewalls' },
    ],
  },
]

const certifications = [
  {
    name: 'CS50x',
    issuer: 'Harvard University',
    detail: 'Introduction to Computer Science',
  },
  {
    name: 'CS50P',
    issuer: 'Harvard University',
    detail: 'Introduction to Programming with Python',
  },
  {
    name: 'LanguageCert International ESOL',
    issuer: 'LanguageCert',
    detail: 'B2 English qualification',
  },
]

export function Stack() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-10 md:py-14">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <p className="font-mono text-xs text-muted-foreground">
            {'$ cat /etc/toolbox.conf'}
          </p>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground" aria-label="Status legend">
            <span className="flex items-center gap-2">
              <span className="size-1.5 bg-tech-green" aria-hidden="true" />
              using
            </span>
            <span className="flex items-center gap-2">
              <span className="size-1.5 bg-primary" aria-hidden="true" />
              learning
            </span>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {stack.map((category) => (
            <article key={category.category} className="flex flex-col gap-4 bg-background p-5 md:p-6">
              <header className="flex flex-col gap-1">
                <p className="font-mono text-xs text-primary">{`$ ${category.command}`}</p>
                <h2 className="font-pixel text-xs leading-relaxed text-foreground">
                  {category.category}
                </h2>
              </header>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                {category.note}
              </p>
              <ul className="flex flex-wrap gap-2" aria-label={`${category.category} technologies`}>
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 rounded border border-border bg-muted px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary"
                  >
                    <span
                      className={`size-1.5 shrink-0 ${item.status === 'learning' ? 'bg-primary' : 'bg-tech-green'}`}
                      aria-hidden="true"
                    />
                    {item.name}
                    <span className="sr-only">
                      {item.status === 'learning' ? ' — learning' : ' — using'}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        <section className="flex flex-col gap-4" aria-labelledby="learning-now-title">
          <p className="font-mono text-xs text-primary">{'$ tail -f current.log'}</p>
          <h2 id="learning-now-title" className="font-pixel text-xs leading-relaxed text-foreground">
            Currently learning
          </h2>
          <div className="flex flex-col gap-3 border-l border-primary pl-4">
            <p className="font-mono text-sm text-foreground">Kubernetes fundamentals</p>
            <p className="font-mono text-sm text-foreground">Go foundations</p>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Terraform is next on my infrastructure roadmap.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4" aria-labelledby="certifications-title">
          <p className="font-mono text-xs text-primary">{'$ ls ~/certificates'}</p>
          <h2 id="certifications-title" className="font-pixel text-xs leading-relaxed text-foreground">
            Certifications & coursework
          </h2>
          <ul className="flex flex-col gap-3">
            {certifications.map((certification) => (
              <li key={certification.name} className="flex flex-col gap-1 border-b border-border pb-3 last:border-b-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-mono text-sm text-foreground">{certification.name}</span>
                  <span className="font-mono text-xs text-tech-green">verified</span>
                </div>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {certification.issuer} — {certification.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

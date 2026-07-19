const projects = [
  {
    name: 'FleetView',
    description:
      'Multi-cloud resource dashboard: brings AWS, Hetzner, and DigitalOcean resources into a single view. JWT-based authentication and real-time metrics with Prometheus.',
    tags: ['FastAPI', 'Docker', 'Prometheus'],
    href: 'https://github.com/suatdurkaya/fleetview',
  },
  {
    name: 'SecureSight',
    description:
      'Flask-based SIEM dashboard. Log analysis, anomaly detection, and visualization with Chart.js — turning security events into something readable.',
    tags: ['Flask', 'SIEM', 'Chart.js'],
    href: 'https://github.com/suatdurkaya/securesight',
  },
  {
    name: 'Server Dashboard',
    description:
      'Real-time server monitoring stack: Flask, Prometheus, Grafana, and Node Exporter. Packaged with Docker Compose, auto-deployed via GitHub Actions.',
    tags: ['Flask', 'Prometheus', 'Grafana', 'Docker Compose', 'GitHub Actions'],
    href: 'https://github.com/suatdurkaya/server-dashboard',
  },
  {
    name: 'SSH Honeypot',
    description:
      'Medium-interaction SSH honeypot: fake shell, credential logging, and IP geolocation. Captured 1,800+ real brute-force attempts in 24 hours.',
    tags: ['Python', 'SSH', 'Security'],
    href: 'https://github.com/suatdurkaya/ssh-honeypot',
  },
]

export function Projects() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 md:py-14">
      <p className="mb-8 font-mono text-xs text-muted-foreground">
        {'$ ls ~/builds --sort=impact'}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col gap-3 rounded-lg border border-border bg-muted p-6 transition-all hover:-translate-y-0.5 hover:border-primary"
          >
            <h2 className="font-pixel text-sm font-bold uppercase tracking-wide text-foreground">
              {project.name}
            </h2>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-tech"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={project.href}
              className="mt-1 font-mono text-xs text-primary transition-[filter] hover:brightness-110"
            >
              {'view project →'}
              <span className="sr-only">{` ${project.name}`}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

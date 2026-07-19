export function PageHeader({
  title,
  path,
  description,
}: {
  title: string
  path: string
  description?: string
}) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-12 md:pt-16">
      <p className="mb-3 font-mono text-xs text-muted-foreground">
        <span className="text-tech-green">{'suat@durkaya'}</span>
        <span>{':'}</span>
        <span className="text-tech">{path}</span>
        <span>{'$'}</span>
      </p>
      <h1 className="font-pixel text-2xl font-bold uppercase tracking-wider text-foreground text-balance md:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}

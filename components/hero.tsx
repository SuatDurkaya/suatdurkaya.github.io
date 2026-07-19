import Link from 'next/link'
import { FolderGit2, Layers } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-3.25rem)] w-full items-center justify-center overflow-hidden px-4 py-20"
      aria-label="Intro"
    >
      {/*
        HERO BACKGROUND IMAGE
        =====================
        Replace /images/hero-pixel-art.gif in the public/images folder
        with your own background image to swap the hero artwork.
      */}
      <div
        className="pixelated absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-pixel-art.gif')" }}
        role="img"
        aria-label="Pixel art scene of a Japanese sunset with cherry blossoms and pagodas"
      />
      {/* Minimal darkening only for text contrast */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 rounded-xl border border-[#6b2424] bg-[rgba(20,10,10,0.88)] p-8 text-center md:p-10">
        {/* Status badge */}
        <div className="flex items-center gap-2 rounded-full border border-[#6b2424] px-3 py-1.5">
          <span className="size-2 bg-secondary" aria-hidden="true" />
          <span className="font-pixel text-[10px] uppercase tracking-widest text-secondary">
            Learning Mode: Active
          </span>
        </div>

        <h1 className="font-pixel text-4xl font-bold uppercase leading-tight text-foreground text-balance md:text-5xl">
          Suat Durkaya
        </h1>

        <p className="font-pixel text-xs uppercase tracking-[0.25em] text-secondary md:text-sm">
          Aspiring Platform Engineer
        </p>

        <p className="max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base text-pretty">
          {
            "I'm learning to build systems that don't just work — they're understandable, repeatable, and reliable. This is where I document my journey from Linux to the cloud."
          }
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-pixel text-xs font-bold uppercase tracking-wider text-primary-foreground transition-[filter] hover:brightness-110"
          >
            <FolderGit2 className="size-4" aria-hidden="true" />
            {'View Projects'}
          </Link>
          <Link
            href="/stack"
            className="flex items-center gap-2 rounded-sm border border-primary bg-transparent px-5 py-2.5 font-pixel text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
          >
            <Layers className="size-4" aria-hidden="true" />
            {'My Stack'}
          </Link>
        </div>

        <p className="font-mono text-[11px] text-muted-foreground/70">
          {'// crafted pixel by pixel'}
        </p>
      </div>
    </section>
  )
}

// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-12 font-sans text-white antialiased sm:py-24">
      {/* brilho de fundo, puramente decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary-muted),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-xl text-center motion-safe:animate-fade-in-up">
        <p className="mb-10 font-display text-2xl tracking-wide text-primary sm:text-3xl">
          Spotted
        </p>

        <div
          aria-hidden
          className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-2xl shadow-primary/20 backdrop-blur-xl"
        >
          <svg
            className="size-11 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>

  

        <h1 className="mb-4 text-balance text-3xl font-bold sm:text-4xl">
          Essa cidade não está no mapa
        </h1>

        <p className="mx-auto mb-10 max-w-md text-pretty text-lg leading-relaxed text-white/60">
          Não encontramos nenhuma cidade com esse endereço. Confira se o link
          está certo.
        </p>

    
      </div>
    </main>
  );
}
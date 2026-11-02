import Link from "next/link";

const stats = [
  { value: "10+", label: "cidades" },
  { value: "2", label: "estados" },
  { value: "2M+", label: "views pelo Brasil" },
  { value: "50k+", label: "seguidores" },
];

export default function Landing() {
  return (
    <main className="min-h-screen bg-surface text-white font-sans antialiased">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="font-display text-2xl text-primary">
          Spotted
        </Link>
        <a
          href="#contato"
          className="rounded-xl bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Anuncie
        </a>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:pt-20 animate-fade-in-up">
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary-muted px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Publicidade
        </span>
        <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          Anuncie sua <span className="text-primary">marca</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/60">
          A forma mais direta de alcançar estudantes universitários no Brasil.
        </p>
        <a
          href="#contato"
          className="mt-8 inline-flex h-14 items-center rounded-xl bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-[0.98]"
        >
          Quero anunciar
        </a>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl text-primary sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
          Abrace o <span className="text-primary">público universitário</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/60">
          Os universitários estão no Spotted todos os dias. É onde a conversa
          acontece, e onde a sua marca pode fazer parte dela.
        </p>
      </section>

      <section
        id="contato"
        className="mx-auto mb-16 w-full max-w-6xl px-6 scroll-mt-8"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl sm:p-16">
          <h2 className="font-display text-3xl sm:text-4xl">
            Vamos anunciar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Fale com a gente e monte uma campanha para a sua marca.
          </p>
          <a
            href="mailto:contato@spotted.com"
            className="mt-8 inline-flex h-14 items-center rounded-xl bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-[0.98]"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Spotted.
      </footer>
    </main>
  );
}

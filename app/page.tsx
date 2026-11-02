// app/page.tsx (ou onde fica a Landing)
import Link from "next/link";
import type { ReactNode } from "react";

const CONTACT_EMAIL = "spottedlimeiraunicamp@gmail.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Quero anunciar no Spotted"
)}`;

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const btnPrimary = `inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary-hover active:scale-[0.98] ${focus}`;
const btnGhost = `inline-flex h-14 items-center justify-center rounded-xl border border-white/15 px-8 text-lg font-semibold text-white/80 transition hover:border-white/40 hover:text-white ${focus}`;

const stats = [
  { value: "10+", label: "cidades" },
  { value: "2", label: "estados" },
  { value: "2M+", label: "views pelo Brasil" },
  { value: "50k+", label: "seguidores" },
];

function Icon({ d }: { d: string }) {
  return (
    <svg
      aria-hidden
      className="size-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const benefits: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: (
      <Icon d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
    title: "Público universitário",
    text: "Estudantes que acompanham o Spotted todos os dias, onde a conversa da faculdade acontece.",
  },
  {
    icon: (
      <Icon d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    title: "Alcance por cidade",
    text: "Fale com quem está perto do seu negócio, em uma ou em várias das nossas cidades.",
  },
  {
    icon: <Icon d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    title: "Dentro da conversa",
    text: "Sua marca aparece no mesmo feed que os estudantes já acompanham, sem parecer um corpo estranho.",
  },
];

const steps = [
  { title: "Fale com a gente", text: "Conte sobre a sua marca e o seu objetivo." },
  { title: "Montamos a campanha", text: "Definimos cidades, formato e período." },
  { title: "Sua marca no ar", text: "Publicamos e acompanhamos a campanha com você." },
];

export default function Landing() {
  return (
    <main className="min-h-dvh bg-surface font-sans text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className={`font-display text-2xl text-primary ${focus}`}>
            Spotted
          </Link>
          <nav className="flex items-center gap-6">
            <a
              href="#como-funciona"
              className={`hidden text-sm text-white/60 transition hover:text-white sm:inline ${focus}`}
            >
              Como funciona
            </a>
            <a
              href="#contato"
              className={`rounded-xl bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover ${focus}`}
            >
              Anuncie
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary-muted),transparent_65%)]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-14 sm:pb-28 sm:pt-24 motion-safe:animate-fade-in-up">

          <h1 className="max-w-3xl text-balance font-display text-4xl leading-tight sm:text-6xl">
            Anuncie sua <span className="text-primary">marca</span> para quem
            vive a faculdade
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/60">
            A forma mais direta de alcançar estudantes universitários no
            Brasil, cidade por cidade.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className={btnPrimary}>
              Quero anunciar
            </a>
            <a href="#como-funciona" className={btnGhost}>
              Como funciona
            </a>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section
        aria-label="Números do Spotted"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse text-center">
              <dt className="mt-2 text-sm text-white/60">{stat.label}</dt>
              <dd className="font-display text-4xl text-primary sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* POR QUE ANUNCIAR */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="max-w-2xl text-balance font-display text-3xl leading-tight sm:text-4xl">
          Abrace o <span className="text-primary">público universitário</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Os universitários estão no Spotted todos os dias. É onde a conversa
          acontece, e onde a sua marca pode fazer parte dela.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((b) => (
            <li
              key={b.title}
              className="rounded-2xl border border-white/10 bg-surface-elevated p-6 transition hover:border-primary/40"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary-muted">
                {b.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
              <p className="leading-relaxed text-white/60">{b.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="scroll-mt-24 border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="font-display text-3xl sm:text-4xl">
            Como <span className="text-primary">funciona</span>
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{s.title}</h3>
                  <p className="leading-relaxed text-white/60">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--color-primary-muted),transparent_70%)]"
          />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl">
              Vamos anunciar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Fale com a gente e monte uma campanha para a sua marca.
            </p>
            <a href={MAILTO} className={`mt-8 ${btnPrimary}`}>
              Entrar em contato
            </a>
            <p className="mt-4 text-sm text-white/40">{CONTACT_EMAIL}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Spotted.
      </footer>
    </main>
  );
}
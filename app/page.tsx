// app/page.tsx
import Link from "next/link";
import Image from "next/image";
const CONTACT_EMAIL = "spottedlimeiraunicamp@gmail.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Quero anunciar"
)}`;

// Altura de uma "tela" útil: viewport dinâmica (dvh) menos o header fixo.
const screen = "min-h-[calc(100dvh-var(--header-h,4.5rem))]";
const anchor = "scroll-mt-[var(--header-h,4.5rem)]";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const pill =
  "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] transition active:scale-[0.98]";
const btnPrimary = `${pill} bg-primary text-primary-foreground hover:bg-primary-hover ${focus}`;
const btnOutline = `${pill} border border-white/30 text-white hover:border-primary hover:text-primary ${focus}`;
const footLink = `text-white/60 transition-colors hover:text-primary ${focus}`;

const stats = [
  { value: "+2M", label: "views" },
  { value: "+3 mil", label: "spotteds" },
  { value: "+500", label: "seguidores" },
];

const cities = [
  { name: "Lavras", handle: "lavras_spotted" },
  { name: "Campinas", handle: "campinas_spotted" },
  { name: "Limeira", handle: "limeira_spotted" },
];

function Arrow() {
  return (
    <svg
      aria-hidden
      className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Landing() {
  return (
    <main
      id="topo"
      className="min-h-dvh bg-surface font-sans tracking-[0.06em] text-white antialiased"
    >


      {/* 1. HERO — uma tela exata */}
      <section className={`${screen} snap-start flex flex-col px-6`}>
        <div className="mx-auto my-auto w-full max-w-6xl py-12 motion-safe:animate-fade-in-up">
          <h1 className="text-[clamp(3.5rem,14vw,10rem)] font-black uppercase leading-[0.85] tracking-tight">
            <span className="block">Anuncie</span>
            <span className="block">para quem</span>
            <span className="block">vive a</span>
            <span className="block text-primary">faculdade</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/60">
            Os spotteds conectam sua marca onde <br></br>
            os universitários já estão conversando.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className={btnPrimary}>
              Quero anunciar
            </a>
            <a href="#cidades" className={btnOutline}>
              Ver cidades
            </a>
          </div>
        </div>


      </section>

      {/* 2. NÚMEROS — faixa verde ocupando a tela */}
      <section
        id="numeros"
        aria-label="Números"
        className={`${screen} ${anchor} snap-start bg-primary text-primary-foreground`}
      >
        <dl
          className={`mx-auto flex ${screen} w-full max-w-6xl flex-col divide-y divide-primary-foreground/20 px-6 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0`}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-1 flex-col-reverse justify-center py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="mt-2 text-sm font-bold uppercase">{s.label}</dt>
              <dd className="text-[clamp(3.5rem,10vw,7rem)] font-black leading-none tracking-tight">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3. CIDADES */}
      <section
        id="cidades"
        className={`${screen} ${anchor} snap-start flex px-6`}
      >
        <div className="mx-auto my-auto w-full max-w-6xl py-16">
          <p className="mb-3 text-xs font-bold uppercase text-primary">Onde estamos</p>
          <h2 className="mb-12 text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl">
            Hoje em 3 cidades
          </h2>

          <ul className="grid gap-4 sm:grid-cols-3">
            {cities.map((c) => (
              <li key={c.handle}>
                <a
                  href={`https://instagram.com/${c.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-full min-h-48 flex-col justify-between rounded-lg border border-white/15 bg-surface-elevated p-6 transition-colors hover:border-primary sm:min-h-64 ${focus}`}
                >
                  <span className="flex justify-end text-white/40 transition-colors group-hover:text-primary">
                    <Arrow />
                  </span>
                  <span>
                    <span className="block text-4xl font-black uppercase leading-none tracking-tight">
                      {c.name}
                    </span>
                    <span className="mt-2 block text-sm text-white/60">@{c.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. CONTATO */}
      <section
        id="contato"
        className={`${screen} ${anchor} snap-start flex border-t border-white/10 px-6`}
      >
        <div className="mx-auto my-auto w-full max-w-6xl py-16 text-center">
          <h2 className="text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-[0.85] tracking-tight">
            Vamos <span className="text-primary">anunciar?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-white/60">
            Fale com a gente e monte uma campanha para a sua marca.
          </p>
          <a href={MAILTO} className={`${btnPrimary} mt-10`}>
            Entrar em contato
          </a>
          <p className="mt-4 text-sm text-white/40">{CONTACT_EMAIL}</p>
        </div>
      </section>

      {/* FOOTER */}
  <footer className="snap-end border-t border-white/10 bg-surface">
  <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
    <Link href="/" aria-label="Página inicial" className={`block w-fit ${focus}`}>
      <Image
        src="/logo.png"
        alt="Spotted"
        width={240}
        height={80}
        className="h-16 w-auto sm:h-20"
      />
    </Link>

    <nav aria-label="Instagram e contato">
      <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
        {cities.map((c) => (
          <li key={c.handle}>
            <a
              href={`https://instagram.com/${c.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className={footLink}
            >
              @{c.handle}
            </a>
          </li>
        ))}
        <li>
          <a href={MAILTO} className={footLink}>
            {CONTACT_EMAIL}
          </a>
        </li>
      </ul>
    </nav>
  </div>


</footer>
    </main>
  );
}
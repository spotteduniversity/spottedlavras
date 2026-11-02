import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 sm:py-24 bg-black text-white font-sans antialiased">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="mb-6 font-display text-4xl sm:text-5xl text-primary">
          Spotted
        </h1>
        <div className="w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
          <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Cidade não encontrada</h2>
        <p className="text-lg text-white/60 mb-8">
          Não existe uma cidade cadastrada com este slug. Verifique o endereço ou acesse uma cidade disponível.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="bg-primary rounded-xl px-6 py-3 text-white font-bold hover:bg-primary-hover transition-colors">
            Voltar ao início
          </Link>
          <a href="http://localhost:3001" className="border border-white/10 rounded-xl px-6 py-3 text-white/60 hover:text-white hover:border-white transition-colors">
            Painel Admin
          </a>
        </div>
      </div>
    </div>
  );
}
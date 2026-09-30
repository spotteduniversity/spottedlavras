"use client";

import { useState, useRef } from "react";
import { sendSpotted } from "@/lib/api";
import fpPromise from "@fingerprintjs/fingerprintjs";

const MAX_LENGTH = 350;

export default function Home() {
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setErrorMsg("Apenas imagens JPEG ou PNG são permitidas.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg("A imagem deve ter no máximo 5MB.");
      return;
    }

    setErrorMsg(null);
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const doSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const fp = await fpPromise.load();
      const result = await fp.get();
      const visitorId = result.visitorId;

      const formData = new FormData();
      formData.append("message", message.trim());
      formData.append("fingerprint", visitorId);
      if (selectedImage) {
        formData.append("image", selectedImage);
      }

      await sendSpotted({
        message: message.trim(),
        fingerprint: visitorId,
        image: selectedImage || undefined,
      });

      setIsSuccess(true);
      setMessage("");
      removeImage();
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (err: any) {
      setErrorMsg(err.message || "Falha ao conectar com o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
      return;
    }

    if (!message.trim()) return;

    await doSubmit();
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 sm:py-24 bg-black text-white font-sans antialiased">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h1 className="mb-6">
          <img src="/logo.png" alt="Lavras Spotted" className="mx-auto h-auto w-full max-w-xs sm:max-w-md" />
        </h1>
        <p className="text-lg text-white/60 leading-relaxed max-w-lg mx-auto">
          Viu alguém interessante? Tem uma fofoca? Desabafa aqui.
        </p>
      </div>

      <div className="w-full max-w-xl relative z-10">
        {isSuccess ? (
          <div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center animate-fade-in-up"
          >
            <div className="w-20 h-20 bg-linear-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Spot Enviado!</h2>
            <p className="text-white/60">Sua mensagem vai passar por aprovação e logo vai aparecer no nosso Instagram.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 animate-fade-in-up transition-all duration-500 ease-out"
          >
            <div className="absolute opacity-0 -z-10 pointer-events-none" aria-hidden="true">
              <label htmlFor="website">Leave this field blank if you are human</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium flex items-center gap-2 animate-in fade-in">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errorMsg}
              </div>
            )}

            <div className="relative mb-6">
              <textarea
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all w-full h-48 rounded-2xl p-5 text-lg resize-none scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                placeholder="O que tá rolando de bom?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={MAX_LENGTH}
                disabled={isSubmitting}
              />
              <div className="absolute bottom-4 right-5 text-sm font-mono transition-colors">
                <span className={message.length > MAX_LENGTH - 20 ? "text-red-400" : "text-white/30"}>
                  {message.length}
                </span>
                <span className="text-white/20">/{MAX_LENGTH}</span>
              </div>
            </div>

            {/* Upload de Imagem */}
            <div className="mb-6">
              {!imagePreview ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full rounded-2xl border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer p-4 flex flex-col items-center justify-center gap-2 text-white/60"
                >
                  <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">Adicionar foto (opcional)</span>
                </div>
              ) : (
                <div className="w-full rounded-2xl border border-white/20 bg-white/5 p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-12 h-12 rounded-lg bg-black/50 overflow-hidden shrink-0 flex items-center justify-center">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col truncate text-sm">
                      <span className="text-white truncate font-medium">{selectedImage?.name}</span>
                      <span className="text-white/50 text-xs">{(selectedImage?.size! / (1024 * 1024)).toFixed(1)} MB</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeImage}
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-red-400 transition-colors shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={handleImageChange}
              />
            </div>

            {/* Termos / Responsabilidade */}
            <div className="mb-6 flex items-start gap-3">
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="peer appearance-none w-5 h-5 rounded border border-white/30 bg-white/5 checked:bg-primary checked:border-primary cursor-pointer transition-all"
                  disabled={isSubmitting}
                />
                <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label htmlFor="terms" className="text-sm text-white/60 leading-relaxed cursor-pointer select-none">
                Eu me responsabilizo integralmente pelo conteúdo enviado. Concordo que o meu endereço IP será registrado e armazenado estritamente para eventuais fins legais de responsabilização.
              </label>
            </div>

            <button
              type="submit"
              disabled={!message.trim() || isSubmitting || !acceptedTerms}
              className="bg-linear-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] w-full h-14 rounded-xl text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Enviando na surdina...</span>
                </>
              ) : (
                <>
                  <span>Enviar Spotted</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
"use client";

import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: "bg-zinc-900 border border-white/10 text-white",
            description: "text-white/60",
            actionButton: "bg-emerald-500 text-black hover:bg-emerald-400",
            cancelButton: "bg-white/10 hover:bg-white/20",
          },
        }}
      />
    </>
  );
}
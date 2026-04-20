"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setMessage("Hvala! Uspešno ste se prijavili.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(data.error || "Došlo je do greške. Pokušajte ponovo.");
    }
  }

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div
        className="rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-10 px-10 py-14"
        style={{ backgroundColor: "#1a3a2a" }}
      >
        {/* Leva strana — tekst i forma */}
        <div className="flex-1 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-4">
            Newsletter
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ostanite u toku sa<br />
            duhovnim zapisima.
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-md">
            Prijavite se na newsletter i primajte nove tekstove o pravoslavnoj veri,
            molitvi i duhovnom životu direktno u vaš sandučić.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vaša email adresa"
              className="flex-1 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg px-6 py-3 text-sm font-semibold bg-white text-green-900 hover:bg-green-50 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Šaljem..." : "Prijavi se →"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-green-400 text-sm">{message}</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400 text-sm">{message}</p>
          )}
        </div>

        {/* Desna strana — dve slike kao kartice */}
        <div className="relative flex-shrink-0 w-72 h-52 hidden md:block">
          {/* Pozadinska kartica */}
          <div className="absolute top-4 right-0 w-56 h-40 rounded-xl overflow-hidden shadow-xl rotate-3">
            <Image
              src="/newsletter2.jpg"
              alt="Newsletter slika 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Prednja kartica */}
          <div className="absolute bottom-0 left-0 w-56 h-40 rounded-xl overflow-hidden shadow-2xl -rotate-2">
            <Image
              src="/newsletter1.jpg"
              alt="Newsletter slika 1"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

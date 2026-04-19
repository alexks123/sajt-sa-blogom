import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <main>
      {/* Hero sekcija sa video pozadinom */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/video.mp4"
        />
        {/* Blagi tamni overlay za čitljivost teksta */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Tekst — desna strana, gore */}
        <div className="relative z-10 w-full flex justify-end items-start px-10 md:px-20 pb-20">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
              Zapisi o pravoslavnoj veri.
            </h1>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-base font-medium text-white/80 hover:text-white transition-colors group"
            >
              <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform">↳</span>
              Pročitaj postove
            </Link>
          </div>
        </div>
      </section>

      {/* Poslednji postovi */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          Poslednji postovi
        </h2>
        {recentPosts.length === 0 ? (
          <p className="text-gray-500">Nema objavljenih postova.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
        {recentPosts.length > 0 && (
          <div className="pt-10 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Svi postovi →
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

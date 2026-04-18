import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <section className="mb-16">
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Zapisi o pravoslavnoj veri
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Mesto duhovnih razmišljanja, molitvi i svedočanstava o životu u
          Hristu. Piše Aleksej Bla­žić.
        </p>
        <Link
          href="/o-meni"
          className="text-sm font-medium underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          O meni →
        </Link>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
          Poslednji postovi
        </h2>
        {recentPosts.length === 0 ? (
          <p className="text-gray-500">Nema objavljenih postova.</p>
        ) : (
          recentPosts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
        {recentPosts.length > 0 && (
          <div className="pt-8">
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

import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Blog | Aleksej Bla\u017ei\u0107",
  description: "Svi blog postovi o pravoslavnoj hri\u0161\u0107anskoj veri.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const allPosts = getAllPosts();
  const allTags = Array.from(new Set(allPosts.flatMap((p) => p.tags))).sort();
  const filtered = tag ? allPosts.filter((p) => p.tags.includes(tag)) : allPosts;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Zapisi o pravoslavnoj hrišćanskoj veri.
      </p>

      {/* Filter tagovi */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="/blog"
            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
              !tag
                ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                : "bg-white dark:bg-transparent border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            Svi
          </a>
          {allTags.map((t) => (
            <a
              key={t}
              href={`/blog?tag=${encodeURIComponent(t)}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                tag === t
                  ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                  : "bg-white dark:bg-transparent border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {t}
            </a>
          ))}
        </div>
      )}

      {/* Grid postova */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center">Nema postova za ovaj tag.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}

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
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Zapisi o pravoslavnoj hrišćanskoj veri.
      </p>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <a
            href="/blog"
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              !tag
                ? "bg-foreground text-background border-foreground"
                : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Svi
          </a>
          {allTags.map((t) => (
            <a
              key={t}
              href={`/blog?tag=${encodeURIComponent(t)}`}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                tag === t
                  ? "bg-foreground text-background border-foreground"
                  : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {t}
            </a>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-gray-500">Nema postova za ovaj tag.</p>
      ) : (
        filtered.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </main>
  );
}

import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ShareButtons from "@/components/ShareButtons";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Aleksej Bla\u017ei\u0107`, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allPosts = getAllPosts();
  if (!allPosts.find((p) => p.slug === slug)) notFound();

  const post = await getPostBySlug(slug);

  return (
    <>
      {post.image && (
        <div
          className="relative flex items-center justify-center"
          style={{
            height: "67vh",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center px-6 leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      )}

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-4">
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            ← Blog
          </Link>
        </div>

        <header className="mb-10">
          {!post.image && (
            <h1 className="text-3xl font-bold leading-tight mb-4">{post.title}</h1>
          )}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime} min čitanja</span>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <ShareButtons title={post.title} slug={post.slug} />
      </main>
    </>
  );
}

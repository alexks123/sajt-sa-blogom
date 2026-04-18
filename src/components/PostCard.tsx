import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="border-b border-gray-200 dark:border-gray-800 py-8 last:border-b-0">
      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readTime} min čitanja</span>
      </div>
      <h2 className="text-xl font-semibold mb-2 leading-snug">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        {post.excerpt}
      </p>
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
    </article>
  );
}

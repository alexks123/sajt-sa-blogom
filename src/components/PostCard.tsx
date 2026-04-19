import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col">
      {/* Slika */}
      <Link href={`/blog/${post.slug}`} className="block relative group">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-800">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <span className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md">
              Otvori post ↗
            </span>
          </div>
        </div>
      </Link>

      {/* Sadržaj */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-base font-bold leading-snug mb-2 line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Footer: autor + read time */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-400 flex-shrink-0 select-none">
              AB
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Aleksej Blažić
            </span>
          </div>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            {post.readTime} min čitanja
          </span>
        </div>
      </div>
    </article>
  );
}

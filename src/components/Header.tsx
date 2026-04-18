import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-background">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Aleksej Blazic
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Početna
          </Link>
          <Link
            href="/o-meni"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            O Meni
          </Link>
          <Link
            href="/blog"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

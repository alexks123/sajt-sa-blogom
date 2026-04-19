import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm px-8 py-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* Cross icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-800 dark:text-gray-100">
                <rect x="8.5" y="1" width="3" height="18" rx="1.5" fill="currentColor" />
                <rect x="1" y="6" width="18" height="3" rx="1.5" fill="currentColor" />
              </svg>
              <span className="font-bold text-base text-gray-900 dark:text-white">Aleksej Blažić</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              Blog posvećen pravoslavnoj hrišćanskoj veri — molitva, sveci i duhovni život.
            </p>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Col 2 — Brzi linkovi */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Stranice</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Početna" },
                { href: "/blog", label: "Blog" },
                { href: "/o-meni", label: "O meni" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kategorije */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Kategorije</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { tag: "Molitva" },
                { tag: "Duhovni život" },
                { tag: "Post" },
                { tag: "Pravoslavlje" },
                { tag: "Sveci" },
              ].map(({ tag }) => (
                <li key={tag}>
                  <Link
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Kontakt</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:akialeksej@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  akialeksej@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Aleksej Blažić. Sva prava zadržana.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 italic">
            „Slava Bogu za sve."
          </p>
        </div>
      </div>
    </footer>
  );
}

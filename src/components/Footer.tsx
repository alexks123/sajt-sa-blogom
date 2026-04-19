import Link from "next/link";

const C = "#1a3a2a";

export default function Footer() {
  return (
    <footer>
      {/* SVG Silhouette */}
      <svg
        viewBox="0 0 1440 210"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="xMidYMax meet"
        aria-hidden="true"
      >
        <g fill={C}>
          {/* Ground */}
          <path d="M0 188 C200 182 400 192 600 186 C800 180 1050 194 1250 187 C1350 184 1400 189 1440 187 L1440 210 L0 210 Z" />

          {/* ── HRAM SVETOG SAVE ── */}
          {/* Steps */}
          <rect x="582" y="176" width="276" height="10" />
          <rect x="604" y="168" width="232" height="9" />
          <rect x="622" y="160" width="196" height="9" />
          {/* Main nave body */}
          <rect x="632" y="114" width="176" height="48" />
          {/* Side apses */}
          <rect x="598" y="136" width="36" height="26" />
          <rect x="806" y="136" width="36" height="26" />
          {/* Drum below main dome */}
          <rect x="674" y="90" width="92" height="28" />
          {/* MAIN DOME */}
          <path d="M667 90 C648 90 636 64 647 38 Q661 10 720 2 Q779 10 793 38 C804 64 792 90 773 90 Z" />
          {/* Main cross */}
          <rect x="718" y="0" width="5" height="10" />
          <rect x="708" y="3" width="25" height="4" />
          <rect x="711" y="7" width="19" height="3" />
          {/* Left side dome + drum */}
          <rect x="639" y="108" width="36" height="10" />
          <path d="M637 108 C628 108 624 96 631 87 Q642 76 657 76 Q672 76 679 87 C686 96 682 108 673 108 Z" />
          <rect x="654" y="70" width="4" height="8" />
          <rect x="649" y="73" width="14" height="3" />
          {/* Right side dome + drum */}
          <rect x="765" y="108" width="36" height="10" />
          <path d="M763 108 C754 108 750 96 757 87 Q768 76 783 76 Q798 76 805 87 C812 96 808 108 799 108 Z" />
          <rect x="780" y="70" width="4" height="8" />
          <rect x="775" y="73" width="14" height="3" />
          {/* Rear small dome */}
          <rect x="706" y="104" width="28" height="12" />
          <path d="M704 104 C697 104 694 94 699 87 Q708 79 720 79 Q732 79 741 87 C746 94 743 104 736 104 Z" />
          <rect x="718" y="73" width="4" height="8" />
          <rect x="713" y="76" width="14" height="3" />

          {/* ── TREES LEFT ── */}
          {/* Large oak x=72 */}
          <rect x="69" y="150" width="9" height="36" />
          <ellipse cx="74" cy="141" rx="26" ry="21" />
          <ellipse cx="59" cy="150" rx="17" ry="14" />
          <ellipse cx="90" cy="148" rx="16" ry="13" />
          {/* Pine x=158 */}
          <path d="M158 178 L145 160 L150 160 L140 143 L146 143 L158 124 L170 143 L176 143 L166 160 L171 160 Z" />
          {/* Medium x=238 */}
          <rect x="235" y="154" width="8" height="30" />
          <ellipse cx="239" cy="145" rx="22" ry="18" />
          <ellipse cx="225" cy="153" rx="15" ry="12" />
          <ellipse cx="254" cy="151" rx="14" ry="11" />
          {/* Tall x=322 */}
          <rect x="319" y="148" width="9" height="36" />
          <ellipse cx="323" cy="138" rx="27" ry="22" />
          <ellipse cx="308" cy="147" rx="18" ry="14" />
          <ellipse cx="339" cy="145" rx="16" ry="13" />
          {/* Small pine x=400 */}
          <path d="M400 180 L389 163 L394 163 L386 149 L392 149 L400 133 L408 149 L414 149 L406 163 L411 163 Z" />
          {/* Medium x=468 */}
          <rect x="465" y="155" width="8" height="29" />
          <ellipse cx="469" cy="146" rx="21" ry="17" />
          <ellipse cx="455" cy="154" rx="15" ry="12" />
          <ellipse cx="484" cy="152" rx="14" ry="11" />
          {/* Small x=534 */}
          <rect x="531" y="160" width="7" height="24" />
          <ellipse cx="534" cy="152" rx="17" ry="14" />
          <ellipse cx="546" cy="158" rx="13" ry="10" />
          {/* Tiny x=578 */}
          <rect x="575" y="164" width="6" height="20" />
          <ellipse cx="578" cy="157" rx="13" ry="11" />

          {/* ── TREES RIGHT ── */}
          {/* Tiny x=862 */}
          <rect x="859" y="164" width="6" height="20" />
          <ellipse cx="862" cy="157" rx="13" ry="11" />
          {/* Small x=908 */}
          <rect x="905" y="160" width="7" height="24" />
          <ellipse cx="908" cy="152" rx="17" ry="14" />
          <ellipse cx="920" cy="158" rx="13" ry="10" />
          {/* Pine x=980 */}
          <path d="M980 180 L969 163 L974 163 L966 149 L972 149 L980 133 L988 149 L994 149 L986 163 L991 163 Z" />
          {/* Medium x=1050 */}
          <rect x="1047" y="155" width="8" height="29" />
          <ellipse cx="1051" cy="146" rx="21" ry="17" />
          <ellipse cx="1037" cy="154" rx="15" ry="12" />
          <ellipse cx="1066" cy="152" rx="14" ry="11" />
          {/* Tall x=1138 */}
          <rect x="1135" y="148" width="9" height="36" />
          <ellipse cx="1139" cy="138" rx="27" ry="22" />
          <ellipse cx="1124" cy="147" rx="18" ry="14" />
          <ellipse cx="1155" cy="145" rx="16" ry="13" />
          {/* Pine x=1228 */}
          <path d="M1228 178 L1215 160 L1220 160 L1210 143 L1216 143 L1228 124 L1240 143 L1246 143 L1236 160 L1241 160 Z" />
          {/* Medium x=1308 */}
          <rect x="1305" y="154" width="8" height="30" />
          <ellipse cx="1309" cy="145" rx="22" ry="18" />
          <ellipse cx="1295" cy="153" rx="15" ry="12" />
          <ellipse cx="1324" cy="151" rx="14" ry="11" />
          {/* Large x=1386 */}
          <rect x="1383" y="150" width="9" height="36" />
          <ellipse cx="1387" cy="141" rx="26" ry="21" />
          <ellipse cx="1372" cy="150" rx="17" ry="14" />
          <ellipse cx="1403" cy="148" rx="16" ry="13" />

          {/* ── BELIEVERS ── */}
          {/* Left group approaching */}
          {[504, 520, 536, 552].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={164} r={i % 2 === 0 ? 3.5 : 3} />
              <rect x={x - 3} y={167} width={6} height={9} />
              <rect x={x - 3.5 + (i % 2) * 0.5} y={176} width={3} height={6} />
              <rect x={x + 0.5 + (i % 2) * 0.5} y={176} width={3} height={6} />
            </g>
          ))}
          {/* Right group departing */}
          {[888, 904, 920, 936].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={164} r={i % 2 === 0 ? 3.5 : 3} />
              <rect x={x - 3} y={167} width={6} height={9} />
              <rect x={x - 3} y={176} width={3} height={6} />
              <rect x={x + 1} y={176} width={3} height={6} />
            </g>
          ))}
          {/* Scattered individuals */}
          {[185, 370, 1270, 1090].map((x) => (
            <g key={x}>
              <circle cx={x} cy={166} r={3} />
              <rect x={x - 3} y={169} width={6} height={8} />
              <rect x={x - 3} y={177} width={3} height={5} />
              <rect x={x + 1} y={177} width={3} height={5} />
            </g>
          ))}
        </g>
      </svg>

      {/* Footer Content */}
      <div style={{ backgroundColor: C }} className="text-white">
        <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Navigation */}
          <div>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Početna" },
                { href: "/blog", label: "Blog" },
                { href: "/o-meni", label: "O meni" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 hover:border-white transition-colors mt-8"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Column 2: About */}
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Aleksej Blažić</p>
            <p className="text-white/60 text-sm leading-relaxed italic">
              „Tražite najpre Carstvo Božije i pravdu Njegovu,
              i sve ostalo dodaće vam se."
            </p>
            <p className="text-white/40 text-xs mt-2">— Mt 6:33</p>
          </div>

          {/* Column 3: Contact */}
          <div className="md:text-right">
            <a
              href="mailto:akialeksej@gmail.com"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              Pošalji poruku →
            </a>
            <p className="text-white/50 text-sm mt-3">akialeksej@gmail.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Aleksej Blažić. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

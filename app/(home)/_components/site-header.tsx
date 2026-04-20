const navItems = [
  { href: "#home", label: "TRANG CHU" },
  { href: "#collection", label: '"NHA" COLLECTION' },
  { href: "#story", label: 'CHUYEN "NHA"' },
  { href: "#stores", label: "CUA HANG" },
  { href: "#news", label: "TIN TUC" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#efe4d8] bg-[rgba(255,250,245,0.9)] px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 py-4"
        style={{ viewTransitionName: "site-header" }}
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c67c3a] text-sm font-semibold tracking-[0.25em] text-white shadow-[0_12px_25px_rgba(198,124,58,0.25)]">
            WC
          </span>
          <div className="leading-none text-[#2f2118]">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#b07b48]">
              Web Cafe
            </p>
            <p className="text-sm font-medium tracking-[0.18em]">Cafe House Style</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-[0.82rem] font-semibold text-[#5f493a] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#c67c3a]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-xs font-semibold text-[#8f7867] sm:flex">
            <span className="text-[#2f2118]">VI</span>
            <span>/</span>
            <span>EN</span>
          </div>
          <a
            href="#visit"
            className="rounded-full bg-[#2f2118] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b3528]"
          >
            APP DOWNLOAD
          </a>
        </div>
      </div>
    </header>
  );
}

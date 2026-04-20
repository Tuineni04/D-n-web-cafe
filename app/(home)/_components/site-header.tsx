const navItems = [
  { href: "#experience", label: "Không gian" },
  { href: "#menu", label: "Menu" },
  { href: "#stories", label: "Cảm nhận" },
  { href: "#visit", label: "Đặt bàn" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-[rgba(22,13,9,0.72)] px-5 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        style={{ viewTransitionName: "site-header" }}
      >
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-sm font-semibold tracking-[0.25em] text-white">
            WC
          </span>
          <div className="leading-none text-white">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/55">
              Web Cafe
            </p>
            <p className="text-sm font-medium tracking-[0.18em]">Roastery Lounge</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#visit"
          className="rounded-full border border-[rgba(245,199,142,0.35)] bg-[linear-gradient(135deg,rgba(230,178,116,0.22),rgba(94,56,31,0.18))] px-4 py-2 text-sm font-medium text-[#ffe8c6] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(139,87,42,0.28)]"
        >
          Giữ chỗ tối nay
        </a>
      </div>
    </header>
  );
}

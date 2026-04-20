import { heroStats } from "../_data/cafe-data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5_0%,#fff6ee_100%)] px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,199,145,0.3),transparent_24%),radial-gradient(circle_at_20%_25%,rgba(255,226,192,0.8),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ecd8c4] bg-white px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#b07b48] shadow-[0_10px_30px_rgba(138,90,44,0.08)]">
            MATCHA LATTE TAY BAC
            <span className="h-1.5 w-1.5 rounded-full bg-[#c67c3a]" />
            chi tu 45.000d
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.42em] text-[#a08672]">
              UX-UI theo ngon ngu thuong hieu cua The Coffee House
            </p>
            <h1 className="max-w-4xl text-5xl leading-[0.92] font-semibold text-[#2f2118] sm:text-6xl lg:text-7xl">
              Giao dien sang, de mua hang va mang nhip brand-site giong The Coffee House.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#6a5444] sm:text-lg">
              Toi da doi toan bo visual system sang tong trang kem va cam nau,
              giu hero dang banner ban san pham, section ke chuyen thuong hieu,
              menu theo danh muc va CTA rat ro de ban co the phat trien tiep.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c67c3a] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b96d2a] hover:shadow-[0_18px_45px_rgba(198,124,58,0.28)]"
            >
              MUA NGAY
              <span className="transition duration-300 group-hover:translate-x-1">
                {"->"}
              </span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-[#e5d3c4] bg-white px-6 py-3.5 text-sm font-medium text-[#2f2118] transition duration-300 hover:-translate-y-1 hover:border-[#d5b394]"
            >
              TIM HIEU
            </a>
          </div>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.8rem] border border-[#ecddd0] bg-white px-5 py-4 shadow-[0_18px_40px_rgba(66,40,20,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <p className="text-2xl font-semibold text-[#2f2118]">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#816c5b]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="floating-card relative overflow-hidden rounded-[2.8rem] border border-[#eddccd] bg-white p-6 shadow-[0_28px_90px_rgba(98,62,32,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(252,229,204,0.9),transparent_24%),linear-gradient(180deg,rgba(255,249,241,0.1),rgba(240,226,211,0.35))]" />
            <div className="relative space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#b07b48]">
                    The Drink Hero
                  </p>
                  <h2 className="mt-3 max-w-sm text-3xl leading-tight font-semibold text-[#2f2118]">
                    Banner san pham lon, text ngan gon va CTA rat ro rang.
                  </h2>
                </div>
                <div className="h-14 w-14 rounded-full bg-[#f8eee4]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-80 overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,#f7d9bb_0%,#f7c28a_28%,#df8f43_100%)]">
                  <div className="absolute inset-x-10 bottom-0 top-12 rounded-t-[9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(172,91,25,0.36))]" />
                  <div className="absolute left-1/2 top-[14%] h-48 w-32 -translate-x-1/2 rounded-[3rem] bg-[linear-gradient(180deg,#8fda8b,#4e8f46)] shadow-[0_30px_55px_rgba(88,64,40,0.2)]" />
                  <div className="absolute left-1/2 top-[18%] h-12 w-10 -translate-x-1/2 rounded-b-2xl rounded-t-lg bg-[#f3e7d9]" />
                  <div className="absolute left-1/2 top-[58%] h-24 w-40 -translate-x-1/2 rounded-[999px_999px_100px_100px] bg-[linear-gradient(180deg,#7f4a25,#4d2a13)] shadow-[0_24px_40px_rgba(88,49,19,0.25)]" />
                  <div className="absolute left-1/2 top-[68%] h-3 w-24 -translate-x-1/2 rounded-full bg-[rgba(255,248,234,0.55)] blur-sm" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.7rem] border border-[#eee1d4] bg-[#fffaf4] p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#a08672]">
                      Hero Logic
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#6a5444]">
                      Dung bo cuc 2 cot, trai la thong diep va phai la visual san pham.
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-[#eee1d4] bg-[#fffaf4] p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#a08672]">
                      Conversion
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#6a5444]">
                      Nut mua ngay dat som, nut tim hieu dat canh de phuc vu hai nhom y dinh.
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-[#f1d4ba] bg-[#fff1e2] p-5 text-[#7b4f2d]">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#c67c3a]">
                      Brand Color
                    </p>
                    <p className="mt-3 text-base leading-7">
                      Tong mau sang, sach va than thien hon rat nhieu so voi version toi truoc do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

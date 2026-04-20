import { cafeStats } from "../_data/cafe-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[34rem] max-w-6xl rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(224,162,103,0.24),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] blur-2xl" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f0d3a6]">
            Specialty Coffee
            <span className="h-1.5 w-1.5 rounded-full bg-[#e9b06b]" />
            Saigon-inspired atmosphere
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.42em] text-white/45">
              Crafted for conversation and calm
            </p>
            <h1 className="max-w-4xl text-5xl leading-[0.88] font-semibold text-white sm:text-6xl lg:text-8xl">
              Quán cafe cao cấp với nhịp chuyển động mượt, ấm và rất có hồn.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#d8cab9] sm:text-lg">
              Một landing page dành cho quán cafe hiện đại: visual đậm bản sắc,
              cảm giác sang nhưng gần, nhiều điểm chạm thú vị và đủ tinh tế để
              khách muốn cuộn sâu hơn, tương tác nhiều hơn.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f0c78f] px-6 py-3.5 text-sm font-semibold text-[#22140d] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd9a6] hover:shadow-[0_18px_45px_rgba(235,180,102,0.32)]"
            >
              Khám phá signature menu
              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Xem concept không gian
            </a>
          </div>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {cafeStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:bg-white/7"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="floating-card relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(237,205,159,0.16),rgba(36,21,13,0.85)_35%,rgba(14,10,8,0.98))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,214,156,0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(198,111,45,0.2),transparent_30%),linear-gradient(135deg,transparent,rgba(255,255,255,0.03),transparent)]" />
            <div className="relative space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#f0c78f]">
                    Signature Scene
                  </p>
                  <h2 className="mt-3 max-w-xs text-3xl leading-tight font-semibold text-white">
                    Lớp ánh sáng như một buổi chụp studio dành cho cà phê.
                  </h2>
                </div>
                <div className="h-14 w-14 rounded-full border border-white/14 bg-white/8" />
              </div>
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,208,145,0.34),transparent_18%),linear-gradient(180deg,#9f5f28_0%,#4c2e1b_28%,#19100d_100%)]">
                  <div className="absolute inset-x-8 bottom-0 top-10 rounded-t-[8rem] bg-[linear-gradient(180deg,rgba(53,33,20,0.1),rgba(15,10,8,0.9))]" />
                  <div className="absolute left-1/2 top-[22%] h-36 w-36 -translate-x-1/2 rounded-full border-[12px] border-[#311d13] bg-[radial-gradient(circle_at_50%_40%,#2f1a10,#100908_72%)] shadow-[0_24px_70px_rgba(0,0,0,0.45)]" />
                  <div className="absolute left-1/2 top-[56%] h-28 w-52 -translate-x-1/2 rounded-[999px_999px_120px_120px] border border-[#a56a3c]/50 bg-[linear-gradient(180deg,#3a2418,#1b120e)] shadow-[0_24px_50px_rgba(0,0,0,0.35)]" />
                  <div className="absolute left-1/2 top-[65%] h-4 w-24 -translate-x-1/2 rounded-full bg-[rgba(232,190,137,0.34)] blur-sm" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.7rem] border border-white/10 bg-black/18 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                      Interior Tone
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#eadbc7]">
                      Gỗ trầm, kim loại cháy sẫm, da nâu và điểm nhấn ánh hổ phách.
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-white/10 bg-black/18 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                      Flow
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#eadbc7]">
                      Di chuyển từ bar mở sang lounge rồi sân hiên như một hành trình có tiết tấu.
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-[rgba(240,199,143,0.2)] bg-[rgba(240,199,143,0.08)] p-5 text-[#ffe4bb]">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#f4c98d]">
                      Moodboard
                    </p>
                    <p className="mt-3 text-base leading-7">
                      Social-friendly nhưng không phô, đủ lạ để người dùng muốn khám phá thêm từng section.
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

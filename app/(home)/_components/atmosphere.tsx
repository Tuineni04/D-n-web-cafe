import { atmosphereCards } from "../_data/cafe-data";

export function Atmosphere() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(14,10,8,0.96))] p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,214,156,0.2),transparent_25%),radial-gradient(circle_at_85%_10%,rgba(199,110,45,0.18),transparent_26%)]" />
          <div className="relative max-w-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d9a86d]">
              Spatial Layers
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold text-white sm:text-5xl">
              Cấu trúc nội dung mô phỏng cách khách di chuyển trong quán.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/58">
              Thay vì một trang “đẹp cho có”, bố cục ở đây được dựng thành nhiều
              lớp: gây ấn tượng, đào sâu lý do tin tưởng, tạo điểm tương tác, rồi
              mới chốt hành động.
            </p>
          </div>
        </div>
        <div className="grid gap-5">
          {atmosphereCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-[rgba(19,13,11,0.8)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[rgba(26,18,15,0.95)]"
            >
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/55">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { instagramTiles, storeCities } from "../_data/cafe-data";

export function Atmosphere() {
  return (
    <section id="stores" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="relative overflow-hidden rounded-[2.6rem] border border-[#ecddd0] bg-[linear-gradient(180deg,#fffaf5,#f9efe5)] p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,221,190,0.6),transparent_25%),radial-gradient(circle_at_85%_10%,rgba(199,110,45,0.12),transparent_26%)]" />
          <div className="relative max-w-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c67c3a]">
              TIM NHA GAN BAN
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold text-[#2f2118] sm:text-5xl">
              Section tim cua hang la mot diem UX rat giong mo hinh chuoi lon.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6a5444]">
              Toi mo phong phan locator bang card lon, danh sach thanh pho va nut
              xem danh sach cua hang. Day la dang section rat hop cho website cafe.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {storeCities.map((city) => (
                <div key={city} className="rounded-2xl border border-[#ecdccc] bg-white px-4 py-3 text-sm font-medium text-[#5f493a]">
                  {city}
                </div>
              ))}
            </div>
            <a
              href="#visit"
              className="mt-8 inline-flex rounded-full bg-[#2f2118] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4a3428]"
            >
              XEM DANH SACH CUA HANG
            </a>
          </div>
        </div>
        <div className="rounded-[2.6rem] border border-[#ecddd0] bg-white p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c67c3a]">
            INSTAGRAM
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {instagramTiles.map((tile, index) => (
              <div
                key={tile}
                className="group aspect-square rounded-[1.6rem] bg-[linear-gradient(135deg,#f6d6ba,#e6a467)] p-4 text-sm font-semibold text-[#6b3f1f] transition duration-300 hover:-translate-y-1"
              >
                <div className="flex h-full items-end rounded-[1.2rem] bg-[rgba(255,255,255,0.38)] p-3">
                  {index + 1}. {tile}
                </div>
              </div>
            ))}
          </div>
          <a href="#news" className="mt-6 inline-flex text-sm font-semibold text-[#c67c3a]">
            FOLLOW NGAY
          </a>
        </div>
      </div>
    </section>
  );
}

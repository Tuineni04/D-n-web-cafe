import { footerLinks } from "../_data/cafe-data";

export function ReservationCta() {
  return (
    <section id="visit" className="bg-[#2f2118] px-4 pb-20 pt-16 text-white sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.24)] lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f1c38d]">
              DOWNLOAD APP
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold text-white sm:text-5xl">
              Footer duoc doi sang dang corporate cafe chain: app, lien he, dieu huong va thong tin cong ty.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#ddcec1]">
              The Coffee House ket thuc trang bang mot khoi footer rat day thong tin.
              Toi giu logic nay de trang trong dung hon, khong bi giong mot landing page ngan han.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="tel:0900000000"
              className="inline-flex items-center justify-center rounded-full bg-[#f1c38d] px-6 py-3.5 text-sm font-semibold text-[#23150e] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd8a2]"
            >
              Dat hang: 1800 6936
            </a>
            <a
              href="mailto:hello@webcafe.vn"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              support@webcafe.vn
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">GIOI THIEU</h3>
            <div className="mt-4 grid gap-2 text-sm text-[#ddcec1]">
              {footerLinks.about.map((item) => (
                <a key={item} href="#home" className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">DIEU KHOAN</h3>
            <div className="mt-4 grid gap-2 text-sm text-[#ddcec1]">
              {footerLinks.policy.map((item) => (
                <a key={item} href="#home" className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">WEB CAFE</h3>
            <p className="mt-4 text-sm leading-7 text-[#ddcec1]">
              86-88 Cao Thang, Quan 3, TP.HCM
              <br />
              So dien thoai: (028) 7107 8079
              <br />
              Day la footer mo phong theo nguyen tac UX-UI cua The Coffee House.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

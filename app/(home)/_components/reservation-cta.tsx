export function ReservationCta() {
  return (
    <section id="visit" className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-[rgba(240,199,143,0.16)] bg-[linear-gradient(135deg,rgba(235,188,123,0.18),rgba(31,18,11,0.96)_40%,rgba(15,9,7,1))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f4cc96]">
              Reserve A Table
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold text-white sm:text-5xl">
              Nếu đây là website thật của quán, đoạn cuối này phải đủ thuyết phục để khách bấm ngay.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#eadbc6]">
              Tôi đã dựng sẵn một CTA đậm, tương phản tốt và có sức nặng thị giác.
              Bạn có thể nối tiếp sang form đặt bàn, Zalo, Messenger hoặc một
              route riêng cho reservation sau này mà không phải phá lại bố cục.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="tel:0900000000"
              className="inline-flex items-center justify-center rounded-full bg-[#f0c78f] px-6 py-3.5 text-sm font-semibold text-[#23150e] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd8a2]"
            >
              Gọi đặt chỗ
            </a>
            <a
              href="mailto:hello@webcafe.vn"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Nhận concept đầy đủ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

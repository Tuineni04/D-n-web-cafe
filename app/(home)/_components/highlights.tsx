import { highlights, signatureMoments } from "../_data/cafe-data";

export function Highlights() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d7a86b]">
              Spatial Experience
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold text-white sm:text-5xl">
              Không chỉ là uống cafe. Đây là một nhịp trải nghiệm có dàn dựng.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/58">
            Bố cục UI bám theo tinh thần quán thật: mở đầu cuốn hút, giữa trang
            là phần khám phá có tương tác, cuối trang là social proof và lời mời
            hành động rõ ràng.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition duration-500 hover:-translate-y-1.5 hover:border-[rgba(237,189,123,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.26)]"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />
              <p className="text-sm text-[#d9a86d]">0{index + 1}</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/58">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {signatureMoments.map((moment) => (
            <article
              key={moment.eyebrow}
              className="rounded-[2rem] border border-white/10 bg-[rgba(17,11,9,0.8)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                {moment.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl leading-tight font-semibold text-[#f7efe4]">
                {moment.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/55">{moment.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

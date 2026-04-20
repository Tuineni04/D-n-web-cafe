import { qualityStories, storyCards } from "../_data/cafe-data";

export function Highlights() {
  return (
    <section id="story" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c67c3a]">
              CHUYEN &quot;NHA&quot;
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold text-[#2f2118] sm:text-5xl">
              Mot section ke chuyen thuong hieu truoc khi day nguoi dung vao danh sach san pham.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#6a5444]">
            The Coffee House dung rat ro logic nay: dau trang de thuong hieu noi
            chuyen, giua trang moi dan vao collection va cuoi trang la store,
            social va news.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {storyCards.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#ecddd0] bg-white p-6 transition duration-500 hover:-translate-y-1.5 hover:border-[#ddb895] hover:shadow-[0_24px_60px_rgba(85,52,24,0.08)]"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(198,124,58,0.4),transparent)]" />
              <p className="text-sm text-[#c67c3a]">0{index + 1}</p>
              <h3 className="mt-6 text-2xl font-semibold text-[#2f2118]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#6a5444]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {qualityStories.map((moment) => (
            <article
              key={moment.title}
              className="overflow-hidden rounded-[2.2rem] border border-[#ecd9c8] bg-[linear-gradient(135deg,#fffaf5,#f9efe4)] p-6 shadow-[0_20px_50px_rgba(96,63,34,0.06)]"
            >
              <div className="mb-5 h-56 rounded-[1.8rem] bg-[linear-gradient(135deg,#efd8be,#d59352)]" />
              <p className="text-xs uppercase tracking-[0.35em] text-[#a08672]">
                Story Block
              </p>
              <h3 className="mt-4 text-2xl leading-tight font-semibold text-[#2f2118]">
                {moment.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#6a5444]">{moment.description}</p>
              <a href="#collection" className="mt-5 inline-flex text-sm font-semibold text-[#c67c3a]">
                {moment.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { newsPosts } from "../_data/cafe-data";

export function Testimonials() {
  return (
    <section id="news" className="bg-[#fbf4ec] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c67c3a]">
            NEWS
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-semibold text-[#2f2118] sm:text-5xl">
            Mot brand-site giong The Coffee House rat can khoi noi dung editorial.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {newsPosts.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#ecddd0] bg-white p-7 shadow-[0_18px_50px_rgba(87,55,27,0.05)]"
            >
              <div className="mb-6 h-56 rounded-[1.6rem] bg-[linear-gradient(135deg,#ecd4b8,#c67c3a)]" />
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-[#9b8574]">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="mt-4 text-2xl leading-9 font-semibold text-[#2f2118]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#6a5444]">{item.excerpt}</p>
              <a href="#visit" className="mt-6 inline-flex text-sm font-semibold text-[#c67c3a]">
                XEM THEM
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { testimonials } from "../_data/cafe-data";

export function Testimonials() {
  return (
    <section id="stories" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d9a86d]">
            Social Proof
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-semibold text-white sm:text-5xl">
            Một quán cafe tốt luôn khiến khách muốn kể lại cảm giác ở đó.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7"
            >
              <p className="text-2xl leading-10 text-[#f5ecdf]">“{item.quote}”</p>
              <footer className="mt-8">
                <p className="text-lg font-semibold text-white">{item.author}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.24em] text-white/38">
                  {item.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = Array.from({ length: 10 }, () => "FROM A LEADING LOCAL ESPRESSO CHAIN");

export function BrandMarquee() {
  return (
    <section className="overflow-hidden border-y border-[#eadfd2] bg-[#fff7ef] py-4">
      <div className="marquee-track flex min-w-max gap-10 whitespace-nowrap text-sm font-semibold tracking-[0.28em] text-[#b07b48]">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}

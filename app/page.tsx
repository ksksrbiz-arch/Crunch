import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-xs tracking-[4px] text-[#D4A017] font-semibold mb-4">
          FRESHLY BAKED · TACOMA, WA
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#5C3317] mb-6">
          Handcrafted Cookies &amp; Premium Milkshakes
        </h1>
        <p className="text-lg text-[#3F2A1E]/80 mb-10">
          Baked from scratch every morning with the finest ingredients. Stop by our cozy bakery
          in Tacoma, or order online for pickup and delivery.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="px-7 py-3 rounded-full bg-[#5C3317] text-white font-medium hover:bg-[#3F2A1E] transition-colors"
          >
            Shop Online
          </Link>
          <Link
            href="/menu"
            className="px-7 py-3 rounded-full border border-[#5C3317] text-[#5C3317] font-medium hover:bg-[#5C3317] hover:text-white transition-colors"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

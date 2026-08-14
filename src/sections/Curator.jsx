import { ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Curator() {
  return (
    <section className="bg-[#fff8fb] py-16 sm:py-24">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="rotate-[-3deg] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85"
                alt="XOXO curator"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -right-2 rotate-6 rounded-full bg-[#fff067] px-5 py-3 text-xs font-black">
              your internet bff ♡
            </div>
          </div>

          <div className="lg:pl-10">
            <Heart
              size={28}
              className="fill-[#ff9fc5] text-[#ff4f9a]"
            />

            <h2 className="display-font mt-5 max-w-2xl text-5xl leading-[1.02] text-[#24151d] sm:text-7xl">
              hi babe, i'm your internet personal shopper ♡
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#7b6470]">
              XOXO started with one simple rule: if I wouldn't send it
              to my best friend, it doesn't make the shop. Every drop
              mixes fashion, gadgets, decor and collectible finds into
              one constantly changing little world.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.13em]"
            >
              meet the curator
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curator;
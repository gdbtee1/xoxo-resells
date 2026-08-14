import {
  ArrowUpRight,
  Radio,
  ShoppingBag,
} from "lucide-react";

function LiveSale() {
  return (
    <section id="live" className="bg-[#ff4f9a] py-16 sm:py-24">
      <div className="site-container">
        <div className="grid overflow-hidden rounded-[2.3rem] bg-[#24151d] text-white lg:grid-cols-2">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ff4f9a] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em]">
              <Radio size={14} />
              xoxo live
            </div>

            <h2 className="block-font mt-6 text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-7xl">
              You had
              <br />
              to be
              <br />
              there.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-white/65">
              High-energy live drops, first looks and one-off finds.
              Once someone claims it, it's gone.
            </p>

            <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff9fc5] px-6 py-4 text-xs font-black uppercase tracking-[0.13em] text-[#24151d]">
              Follow for next live
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="relative min-h-[470px] bg-[#ffb6d0]">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85"
              alt="XOXO live curator"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              ● live
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-white/90 p-4 text-[#24151d] backdrop-blur-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f9a]">
                    currently showing
                  </p>

                  <p className="mt-1 font-bold">
                    mystery closet drop ♡
                  </p>
                </div>

                <ShoppingBag size={21} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveSale;
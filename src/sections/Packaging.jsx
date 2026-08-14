import {
  Heart,
  PackageCheck,
  Sparkles,
} from "lucide-react";

function Packaging() {
  return (
    <section className="bg-[#f7bbd2] py-16 sm:py-24">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              from our hands to yours
            </p>

            <h2 className="block-font mt-3 text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl">
              packed
              <br />
              with love.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-[#653c4d]">
              Random inventory, one unmistakable experience. Every order
              gets the XOXO treatment with signature pink wrapping,
              stickers and cute little details.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                [Heart, "XOXO sticker"],
                [Sparkles, "pink tissue"],
                [PackageCheck, "carefully packed"],
              ].map(([Icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-3 text-xs font-bold"
                >
                  <Icon size={15} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-[9%] rotate-6 rounded-[2rem] bg-[#24151d]" />

            <div className="absolute inset-[6%] -rotate-3 rounded-[2rem] bg-[#fff8fb] p-5 shadow-2xl sm:p-8">
              <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-[#ff9fc5] bg-[#fff0f6] text-center">
                <span className="text-7xl">🎁</span>

                <p className="display-font mt-5 text-4xl text-[#ff4f9a]">
                  XOXO
                </p>

                <p className="mt-1 text-xs font-black uppercase tracking-[0.2em]">
                  packed just for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packaging;
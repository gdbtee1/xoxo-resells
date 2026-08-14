import {
  ArrowUpRight,
  Heart,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

function CollectorCorner() {
  return (
    <section
      id="collectibles"
      className="relative overflow-hidden bg-[#f5dfe6] py-14 sm:py-20"
    >
      {/* decorative oversized heart */}
      <div className="pointer-events-none absolute -right-14 -top-28 text-[18rem] leading-none text-white/25 sm:text-[24rem]">
        ♡
      </div>

      <div className="site-container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          {/* LEFT COPY */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2">
              <Sparkles
                size={14}
                strokeWidth={1.4}
                className="text-[#bc6f88]"
              />

              <p className="micro-label text-[#b0667f]">
                the collector shelf
              </p>
            </div>

            <h2 className="editorial-font mt-4 text-[clamp(3.7rem,7vw,6.7rem)] font-medium leading-[0.84] tracking-[-0.055em] text-[#563945]">
              tiny things
              <span className="block pl-[10%] italic text-[#c36c8a]">
                with big
              </span>
              personality.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#866a75]">
              Plush, stationery, little collectibles and cute things
              that somehow become impossible to leave behind.
            </p>

            <Link
              to="/shop?category=collectibles"
              className="mt-6 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.19em] text-[#9c5970]"
            >
              open the shelf
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* CABINET */}
          <div className="relative">
            <div className="relative rounded-[2.7rem] border border-white/70 bg-[#fff8f7]/75 p-3 shadow-[0_30px_80px_rgba(111,55,76,.08)] backdrop-blur-xl sm:p-5">
              {/* cabinet top */}
              <div className="flex items-center justify-between border-b border-[#ead5dd] px-3 pb-4 pt-2">
                <p className="editorial-font text-lg italic text-[#76515f]">
                  xoxo's little cabinet
                </p>

                <Heart
                  size={15}
                  strokeWidth={1.3}
                  className="fill-[#f4c7d5] text-[#c87993]"
                />
              </div>

              <div className="grid grid-cols-12 gap-3 pt-3">
                {/* BIG PLUSH TILE */}
                <div className="col-span-7 row-span-2 flex min-h-[245px] flex-col justify-between rounded-[2rem] bg-[#f0bed0] p-5 sm:min-h-[320px] sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="text-5xl sm:text-7xl">
                      🎀
                    </span>

                    <span className="rounded-full bg-white/55 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#99566e]">
                      soft spot
                    </span>
                  </div>

                  <div>
                    <p className="editorial-font text-3xl italic text-[#6b4352] sm:text-4xl">
                      plush things
                    </p>

                    <p className="mt-2 max-w-xs text-[10px] leading-5 text-[#916979] sm:text-xs">
                      The shelf where cute beats practical every single time.
                    </p>
                  </div>
                </div>

                {/* STRAWBERRY */}
                <div className="col-span-5 flex min-h-[116px] flex-col justify-between rounded-[1.8rem] bg-[#fff3f4] p-4 sm:min-h-[154px] sm:p-5">
                  <span className="text-3xl sm:text-4xl">
                    🍓
                  </span>

                  <div>
                    <p className="editorial-font text-xl italic text-[#674451] sm:text-2xl">
                      tiny finds
                    </p>

                    <p className="mt-1 text-[9px] text-[#9a7784]">
                      unnecessary. obviously needed.
                    </p>
                  </div>
                </div>

                {/* STATIONERY */}
                <div className="col-span-5 flex min-h-[116px] flex-col justify-between rounded-[1.8rem] bg-[#f5e8a9] p-4 sm:min-h-[154px] sm:p-5">
                  <span className="text-3xl sm:text-4xl">
                    💌
                  </span>

                  <div>
                    <p className="editorial-font text-xl italic text-[#635630] sm:text-2xl">
                      desk candy
                    </p>

                    <p className="mt-1 text-[9px] text-[#8b7d4e]">
                      notes, stickers & tiny paper things
                    </p>
                  </div>
                </div>

                {/* BOTTOM STRIP */}
                <div className="col-span-12 flex items-center justify-between rounded-[1.6rem] bg-[#7f5263] px-5 py-4 text-white sm:px-6">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#f5c9d7]">
                      curator rule no. 04
                    </p>

                    <p className="editorial-font mt-1 text-lg italic sm:text-xl">
                      cute enough = reason enough.
                    </p>
                  </div>

                  <span className="text-2xl text-[#f7d3de]">
                    ♡
                  </span>
                </div>
              </div>
            </div>

            {/* FLOATING LABEL */}
            <div className="absolute -bottom-3 -left-2 rotate-[-4deg] rounded-full bg-[#fff5b8] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#75652e] shadow-lg sm:left-5">
              little treasures only ♡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectorCorner;
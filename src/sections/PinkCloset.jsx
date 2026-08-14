import {
  ArrowUpRight,
  Heart,
  Sparkles,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Link } from "react-router-dom";
import { useRef } from "react";

function PinkCloset() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [-35, 35]
  );

  const titleX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-50, 0, 50]
  );

  const floatingY = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -80]
  );

  return (
    <section
      ref={sectionRef}
      id="closet"
      className="relative overflow-hidden bg-[#f3dce4]"
    >
      {/* DESKTOP EXPERIENCE */}
      <div className="hidden min-h-[175vh] lg:block">
        <div className="sticky top-[78px] h-[calc(100vh-78px)] overflow-hidden">
          <motion.div
            style={{ scale: imageScale, y: imageY }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=90"
              alt="Curated clothing collection"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[#6d3449]/18" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#4a2330]/55 via-[#4a2330]/10 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#3a1f28]/45 via-transparent to-transparent" />

          {/* GIANT TYPE */}
          <motion.div
            style={{ x: titleX }}
            className="pointer-events-none absolute left-[4%] top-[8%]"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/75">
              fashion edit / xoxo closet
            </p>

            <h2 className="editorial-font mt-3 text-[9vw] font-medium italic leading-[0.76] tracking-[-0.07em] text-white">
              the pink
              <span className="block pl-[12%]">
                closet.
              </span>
            </h2>
          </motion.div>

          {/* LEFT BOTTOM COPY */}
          <div className="absolute bottom-[8%] left-[5%] z-20 max-w-md">
            <p className="text-sm leading-7 text-white/78">
              Vintage denim, bags, sneakers, streetwear and pieces
              that already feel like they have a story.
            </p>

            <Link
              to="/shop?category=closet"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#f4c4d3] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#684252] backdrop-blur transition hover:bg-white"
            >
              raid the closet
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* FLOATING PRODUCT NOTE */}
          <motion.div
            style={{ y: floatingY }}
            className="absolute right-[6%] top-[25%] z-20 w-[280px]"
          >
            <div className="rotate-[4deg] rounded-[2.2rem] border border-white/60 bg-[#fffaf8]/88 p-5 shadow-[0_30px_70px_rgba(66,28,42,.2)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#b96b85]">
                  currently on the rack
                </p>

                <Heart
                  size={14}
                  className="fill-[#f5c5d4] text-[#c9708d]"
                />
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=85"
                  alt="Vintage jacket"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <p className="editorial-font mt-4 text-2xl italic text-[#5b3b47]">
                vintage jacket
              </p>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] text-[#9b7a86]">
                  one available
                </span>

                <span className="editorial-font text-xl italic text-[#97546c]">
                  $62
                </span>
              </div>
            </div>
          </motion.div>

          {/* SIDE STICKER */}
          <motion.div
            style={{
              y: useTransform(
                scrollYProgress,
                [0, 1],
                [40, -110]
              ),
            }}
            className="absolute right-[31%] top-[55%] rotate-[-7deg] rounded-full bg-[#f7eaa7] px-5 py-3 text-[8px] font-bold uppercase tracking-[0.17em] text-[#75632c]"
          >
            found this for u ♡
          </motion.div>

          <div className="absolute bottom-8 right-8 flex items-center gap-2 text-white/70">
            <Sparkles size={14} />
            <span className="text-[8px] font-bold uppercase tracking-[0.18em]">
              keep scrolling
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE EXPERIENCE */}
      <div className="lg:hidden">
        <div className="relative min-h-[760px]">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=88"
            alt="Curated clothing"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#57303c]/15 via-transparent to-[#40232d]/70" />

          <div className="relative z-10 flex min-h-[760px] flex-col justify-between p-5 pb-7 pt-8">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/75">
                fashion edit / 01
              </p>

              <h2 className="editorial-font mt-3 text-[4.7rem] font-medium italic leading-[0.76] tracking-[-0.065em] text-white">
                the pink
                <span className="block pl-[10%]">
                  closet.
                </span>
              </h2>
            </div>

            <div>
              <div className="mb-5 ml-auto w-[62%] rotate-[3deg] rounded-[1.7rem] bg-[#fffaf8]/88 p-3 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&q=85"
                  alt="Vintage jacket"
                  className="aspect-[4/5] rounded-[1.2rem] object-cover"
                />

                <p className="editorial-font mt-3 text-xl italic text-[#563a45]">
                  one-of-one ♡
                </p>
              </div>

              <p className="max-w-[300px] text-xs leading-6 text-white/80">
                Vintage denim, bags, sneakers and pieces that already
                feel like they have a story.
              </p>

              <Link
                to="/shop?category=closet"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f2c0d0] px-5 py-3.5 text-[8px] font-bold uppercase tracking-[0.17em] text-[#65404e]"
              >
                open the closet
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PinkCloset;
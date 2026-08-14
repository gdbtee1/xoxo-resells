import {
  ArrowUpRight,
  Camera,
  Heart,
  Headphones,
  Smartphone,
  Sparkles,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Link } from "react-router-dom";
import { useRef } from "react";

function CuteTech() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-62%"]
  );

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative bg-[#fff8fa]"
    >
      {/* DESKTOP HORIZONTAL SCROLL */}
      <div className="hidden h-[250vh] lg:block">
        <div className="sticky top-[78px] h-[calc(100vh-78px)] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,203,217,.45),transparent_28rem)]" />

          <div className="absolute left-10 top-10 z-20">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#b66882]">
              tech finds / scroll sideways
            </p>
          </div>

          <motion.div
            style={{ x }}
            className="absolute left-0 top-0 flex h-full w-[310vw] items-center gap-[7vw] pl-[7vw]"
          >
            {/* INTRO FRAME */}
            <div className="flex h-[72vh] w-[56vw] shrink-0 flex-col justify-center">
              <Sparkles
                size={19}
                className="text-[#bd6d87]"
              />

              <h2 className="editorial-font mt-5 text-[7vw] font-medium italic leading-[0.86] tracking-[-0.06em] text-[#563a45]">
                tech,
                <span className="block pl-[13%] text-[#c7718e]">
                  but darling.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#876d77]">
                Digicams, headphones, phone accessories and nostalgic
                little electronics selected because your tech can have
                personality too.
              </p>

              <Link
                to="/shop?category=tech"
                className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#efb7c9] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#694451]"
              >
                shop tech finds
                <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* CAMERA */}
            <article className="relative h-[72vh] w-[40vw] shrink-0 overflow-hidden rounded-[3rem]">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=88"
                alt="Digital camera"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3d242d]/60 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <Camera size={22} />

                <p className="editorial-font mt-4 text-4xl italic">
                  digicam season.
                </p>

                <p className="mt-2 max-w-sm text-xs leading-6 text-white/70">
                  blurry flash photos & tiny cameras forever.
                </p>
              </div>
            </article>

            {/* HEADPHONES */}
            <article className="flex h-[72vh] w-[34vw] shrink-0 flex-col justify-between rounded-[3rem] bg-[#edd3dd] p-9">
              <div className="flex items-start justify-between">
                <Headphones
                  size={25}
                  className="text-[#9d5b73]"
                />

                <Heart
                  size={17}
                  className="fill-[#f7cbd8] text-[#bc6c87]"
                />
              </div>

              <div>
                <div className="mx-auto mb-8 grid h-52 w-52 place-items-center rounded-full bg-[#fff8fa] shadow-[0_25px_60px_rgba(92,49,65,.1)]">
                  <span className="text-8xl">🎧</span>
                </div>

                <p className="editorial-font text-4xl italic text-[#65404f]">
                  cute sound.
                </p>

                <p className="mt-3 max-w-sm text-xs leading-6 text-[#8b6b77]">
                  headphones that belong in the outfit too.
                </p>
              </div>
            </article>

            {/* PHONE ACCESSORIES */}
            <article className="flex h-[72vh] w-[34vw] shrink-0 flex-col justify-between rounded-[3rem] bg-[#f5e7a9] p-9">
              <Smartphone
                size={25}
                className="text-[#7b6938]"
              />

              <div>
                <p className="text-8xl">🎀</p>

                <p className="editorial-font mt-8 text-4xl italic text-[#65552e]">
                  phone charms.
                </p>

                <p className="mt-3 max-w-sm text-xs leading-6 text-[#887746]">
                  because the phone itself was apparently not enough.
                </p>
              </div>
            </article>

            {/* FINAL CARD */}
            <article className="flex h-[72vh] w-[46vw] shrink-0 items-center justify-center rounded-[3rem] bg-[#835366] text-white">
              <div className="max-w-md p-10 text-center">
                <Heart
                  size={26}
                  className="mx-auto fill-[#efbfd0] text-[#efbfd0]"
                />

                <p className="editorial-font mt-7 text-5xl italic leading-[0.95]">
                  your setup deserves personality too.
                </p>

                <Link
                  to="/shop?category=tech"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f6d2de] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#704454]"
                >
                  shop the edit
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </article>
          </motion.div>

          <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-[#ead5dd]">
              <motion.div
                style={{
                  scaleX: scrollYProgress,
                  transformOrigin: "left",
                }}
                className="h-full w-full bg-[#c97994]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden">
        <div className="px-3 py-16">
          <div className="site-container">
            <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#bd6c86]">
              tech finds
            </p>

            <h2 className="editorial-font mt-3 text-5xl italic leading-[0.9] text-[#573b46]">
              tech,
              <span className="block pl-[10%] text-[#c97590]">
                but darling.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-xs leading-6 text-[#876d77]">
              Nostalgic electronics and cute little accessories.
            </p>
          </div>

          <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-4">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
                title: "digicam season.",
                label: "camera",
              },
              {
                emoji: "🎧",
                title: "cute sound.",
                label: "headphones",
              },
              {
                emoji: "🎀",
                title: "phone charms.",
                label: "accessories",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="w-[82vw] shrink-0 snap-center overflow-hidden rounded-[2rem] bg-[#efd5de]"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <div className="grid aspect-[4/5] place-items-center bg-[#f4dce4] text-8xl">
                    {item.emoji}
                  </div>
                )}

                <div className="p-5">
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#af667f]">
                    {item.label}
                  </p>

                  <p className="editorial-font mt-2 text-3xl italic text-[#5a3b47]">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="site-container mt-4">
            <p className="text-[9px] text-[#9d818c]">
              swipe to explore →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CuteTech;
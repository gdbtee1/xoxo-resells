import {
  ArrowDown,
  ArrowUpRight,
  Heart,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.14]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 150]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.78],
    [1, 0]
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92svh] overflow-hidden bg-[#e8bccb]"
    >
      {/* VIDEO */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85"
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/xoxo-fashion.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* FILM WASH */}
      <div className="absolute inset-0 bg-[#d891a9]/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#57303c]/10 via-transparent to-[#3e222b]/45" />

      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 0.7px, transparent 0.7px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* FLOATING DECOR */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-7, -3, -7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] top-[22%] hidden rounded-full border border-white/50 bg-white/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md md:block"
      >
        made to be found ♡
      </motion.div>

      <motion.div
        animate={{
          y: [0, 13, 0],
          rotate: [6, 10, 6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-[24%] hidden text-7xl text-white/70 lg:block"
      >
        ♡
      </motion.div>

      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        className="site-container relative z-10 flex min-h-[92svh] flex-col justify-between pb-8 pt-7 sm:pb-10 sm:pt-9"
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          <div className="rounded-full border border-white/45 bg-white/15 px-4 py-2 backdrop-blur-lg">
            <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white">
              xoxo resells / curated online
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70">
              scroll to discover
            </p>

            <ArrowDown
              size={15}
              className="ml-auto mt-2 text-white"
            />
          </div>
        </div>

        {/* CENTER */}
        <div className="relative my-auto py-14">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/85">
              thrifted • collected • obsessed over
            </p>

            <h1 className="editorial-font max-w-5xl text-[clamp(5rem,16vw,13rem)] font-medium italic leading-[0.67] tracking-[-0.075em] text-white">
              xoxo
            </h1>

            <div className="mt-6 max-w-2xl">
              <p className="editorial-font text-[clamp(2.3rem,6vw,5rem)] leading-[0.95] tracking-[-0.045em] text-white">
                find something
                <span className="block pl-[8%] italic">
                  worth keeping.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-md text-xs leading-6 text-white/80 sm:text-sm sm:leading-7">
              Fashion, nostalgic tech, room things and little collector
              treasures — curated into one unpredictable pink world.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 rounded-full bg-[#f2c4d3] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-[#714052] backdrop-blur transition hover:bg-white"
              >
                enter xoxo
                <ArrowUpRight size={14} />
              </Link>

              <a
                href="#latest"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-6 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white backdrop-blur"
              >
                see the drop
                <Sparkles size={13} />
              </a>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur">
              <Heart
                size={15}
                strokeWidth={1.4}
                className="text-white"
              />
            </div>

            <p className="editorial-font max-w-[200px] text-lg italic leading-tight text-white">
              nothing here stays ordinary.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
import {
  ArrowDownRight,
  ArrowUpRight,
  Heart,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { Link } from "react-router-dom";
import { useRef } from "react";

import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import XoxoPageFrame from "../components/experience/XoxoPageFrame";

import products from "../data/products";

function Home() {
  const BASE = import.meta.env.BASE_URL;
  const heroRef = useRef(null);
  const roomsRef = useRef(null);

  const featured = products
    .filter((product) => !product.sold)
    .slice(0, 3);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 65]
  );

  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 42]
  );

  const heartY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -40]
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 22,
  });

  const roomX = useTransform(
    smoothX,
    [-1, 1],
    [-9, 9]
  );

  const roomY = useTransform(
    smoothY,
    [-1, 1],
    [-7, 7]
  );

  const reverseRoomX = useTransform(
    smoothX,
    [-1, 1],
    [8, -8]
  );

  const reverseRoomY = useTransform(
    smoothY,
    [-1, 1],
    [6, -6]
  );

  function handleRoomPointerMove(event) {
    const rect =
      roomsRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
        2 -
      1;

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
        2 -
      1;

    mouseX.set(x);
    mouseY.set(y);
  }

  function resetRooms() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <XoxoPageFrame>
      <main className="overflow-hidden bg-[#fffaf8]">
        <AnnouncementBar />
        <Navbar />

        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          ref={heroRef}
          className="relative overflow-hidden border-b border-[#ead8df]"
        >
          <div className="pointer-events-none absolute -left-32 top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#f3d6e1]/65 blur-[120px]" />

          <div className="pointer-events-none absolute -right-32 bottom-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[#f5e8b2]/20 blur-[120px]" />

          {/* DESKTOP */}
          <div className="site-container relative hidden min-h-[760px] lg:block">
            <motion.div
              style={{
                scale: portraitScale,
                y: portraitY,
              }}
              className="absolute bottom-0 right-0 top-[4%] z-10 w-[49%]"
            >
              <div className="relative h-full overflow-hidden rounded-[5rem_5rem_0_0]">
                <img
                  src={`${BASE}images/curator/curator-hero.jpg`}
                  alt="XOXO Resells curator"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#392029]/55 via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf8]/42 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              style={{ y: headlineY }}
              className="relative z-20 flex min-h-[760px] w-[54%] flex-col justify-center"
            >
              <div className="flex items-center gap-2">
                <Sparkles
                  size={13}
                  strokeWidth={1.4}
                  className="text-[#be6d87]"
                />

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#b26981]">
                  curated resale
                </p>
              </div>

              <h1 className="editorial-font mt-5 text-[7.3rem] font-medium italic leading-[0.76] tracking-[-0.075em] text-[#573b46]">
                welcome
                <span className="block pl-[10%] text-[#c9728e]">
                  to xoxo.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[#806873]">
                Clothes, cameras, collectibles and
                little finds she thinks deserve another
                life.
              </p>

              {/* DESKTOP CTA ROW */}
              <div className="mt-8 flex max-w-[455px] gap-2">
                <Link
                  to="/shop"
                  className="group relative inline-flex min-h-[54px] min-w-[225px] flex-1 items-center overflow-hidden rounded-[1.25rem] border border-[#633c4b] bg-[#633c4b] text-white shadow-[0_16px_35px_rgba(67,31,45,.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#573440]"
                >
                  <span className="flex flex-1 items-center px-5 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                    shop her finds
                  </span>

                  <span className="mr-1.5 grid h-[41px] w-[41px] shrink-0 place-items-center rounded-[1rem] bg-[#fffaf8] text-[#633c4b] transition duration-300 group-hover:rotate-6">
                    <ShoppingBag
                      size={13}
                      strokeWidth={1.6}
                    />
                  </span>

                  <span className="pointer-events-none absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />
                </Link>

                <Link
                  to="/about"
                  className="group relative inline-flex min-h-[54px] min-w-[170px] items-center overflow-hidden rounded-[1.25rem] border border-[#dfcad2] bg-[#fffaf8] text-[#5a3946] shadow-[0_12px_28px_rgba(67,31,45,.08)] transition duration-300 hover:-translate-y-0.5"
                >
                  <span className="flex flex-1 items-center px-5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#5a3946]">
                    meet her
                  </span>

                  <span className="mr-1.5 grid h-[41px] w-[41px] shrink-0 place-items-center rounded-[1rem] bg-[#edbfd0] text-[#633c4b] transition duration-300 group-hover:scale-105">
                    <Heart
                      size={13}
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </div>

              <div className="mt-11">
                <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#bb7188]">
                  xoxo rule
                </p>

                <p className="editorial-font mt-2 max-w-md text-2xl italic leading-tight text-[#6b4955]">
                  if I wouldn't keep it
                  I don't sell it
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-3, 1, -3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[3%] top-[17%] z-30 rounded-full bg-[#f5e6a6] px-5 py-3 shadow-xl"
            >
              <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#75632d]">
                picked by her ♡
              </p>
            </motion.div>
          </div>

          {/* MOBILE */}
          <div className="relative min-h-[820px] overflow-hidden lg:hidden">
            <motion.div
              style={{
                scale: portraitScale,
                y: portraitY,
              }}
              className="absolute inset-0"
            >
              <img
                src={`${BASE}images/curator/curator-hero.jpg`}
                alt="XOXO Resells curator"
                className="h-full w-full object-cover object-[center_24%]"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f9]/94 via-[#fff7f9]/34 via-[29%] to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#341b25]/82 via-transparent via-[50%] to-transparent" />

              <div className="absolute inset-0 bg-[#b96c83]/[0.04]" />
            </motion.div>

            <div className="relative z-20 px-5 pt-8">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={12}
                  className="text-[#b85f7b]"
                />

                <p className="text-[7px] font-bold uppercase tracking-[0.21em] text-[#9f536b]">
                  curated resale
                </p>
              </div>

              <h1 className="editorial-font mt-4 max-w-[350px] text-[4.35rem] font-medium italic leading-[0.76] tracking-[-0.065em] text-[#4f2e39]">
                welcome
                <span className="block pl-[7%] text-[#bd607e]">
                  to xoxo.
                </span>
              </h1>
            </div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-5, -1, -5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-4 top-[52%] z-30 rounded-full border border-white/50 bg-[#f7e8aa]/95 px-4 py-2.5 shadow-xl"
            >
              <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#75632e]">
                picked by her ♡
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-5, 4, -5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-5 top-[33%] z-20"
            >
              <Heart
                size={44}
                strokeWidth={1}
                className="text-white/70 drop-shadow-md"
              />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 z-30 px-5 pb-7">
              <p className="max-w-[315px] text-[12px] leading-6 text-white/85">
                Clothes, cameras, collectibles and cute
                little finds she thinks deserve another life.
              </p>

              {/* MOBILE CTA ROW */}
              <div className="mt-5 grid grid-cols-[1.35fr_0.85fr] gap-2">
                <Link
                  to="/shop"
                  className="group relative inline-flex min-h-[54px] items-center overflow-hidden rounded-[1.15rem] border border-[#fffaf8] bg-[#fffaf8] text-[#553541] shadow-[0_16px_34px_rgba(28,12,18,.3)]"
                >
                  <span className="flex flex-1 items-center px-4 text-[7px] font-bold uppercase tracking-[0.16em] text-[#553541]">
                    shop her finds
                  </span>

                  <span className="mr-1.5 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[0.95rem] bg-[#633c4b] text-white">
                    <ShoppingBag
                      size={12}
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="group relative inline-flex min-h-[54px] items-center overflow-hidden rounded-[1.15rem] border border-white/35 bg-[#5b3443]/72 text-white shadow-lg backdrop-blur-md"
                >
                  <span className="flex flex-1 items-center px-4 text-[7px] font-bold uppercase tracking-[0.15em] text-white">
                    meet her
                  </span>

                  <span className="mr-1.5 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[0.95rem] bg-[#e9b6c8] text-[#5a3543]">
                    <Heart
                      size={12}
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </div>

              <div className="mt-5 flex items-center gap-2 text-white/50">
                <motion.span
                  animate={{
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                >
                  ↓
                </motion.span>

                <span className="text-[6px] font-bold uppercase tracking-[0.2em]">
                  see what she found
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRANSITION
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-[#ead9df] bg-[#f6e7ec] py-8 sm:py-10">
          <motion.div
            style={{ y: heartY }}
            animate={{
              rotate: [-5, 4, -5],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2"
          >
            <Heart
              size={110}
              strokeWidth={0.7}
              className="text-[#d693ab]/40 sm:h-[145px] sm:w-[145px]"
            />
          </motion.div>

          <div className="site-container relative z-10 flex items-center justify-between gap-6">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.19em] text-[#b86e86]">
                new in
              </p>

              <p className="editorial-font mt-1 text-2xl italic leading-tight text-[#62414d] sm:text-3xl">
                fresh finds just landed
              </p>
            </div>

            <a
              href="#latest"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-[1rem] border border-[#d6b6c2] bg-white/80 text-[#8b576a] shadow-sm transition hover:bg-white"
            >
              <ArrowDownRight size={15} />
            </a>
          </div>
        </section>

        {/* =====================================================
            PRODUCT DROP
        ====================================================== */}
        <section
          id="latest"
          className="relative bg-[#fffaf8] py-12 sm:py-18"
        >
          <div className="site-container">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#bc7088]">
                  this week
                </p>

                <h2 className="editorial-font mt-2 text-4xl italic text-[#583b46] sm:text-5xl">
                  what she found.
                </h2>
              </div>

              <Link
                to="/shop"
                className="hidden items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#9e5d73] sm:flex"
              >
                shop everything
                <ArrowUpRight size={11} />
              </Link>
            </div>

            {/* MOBILE PRODUCT RAIL */}
            <div className="no-scrollbar -mx-3 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-5 sm:hidden">
              {featured.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="w-[74vw] shrink-0 snap-center"
                >
                  <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[4/5] w-full object-cover"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-[#fffaf8]/92 px-3 py-1.5 text-[6px] font-bold uppercase tracking-[0.14em] text-[#a76279] backdrop-blur">
                      {product.badge}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#352029]/75 to-transparent px-4 pb-4 pt-14 text-white">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold">
                            {product.name}
                          </p>

                          <p className="mt-1 text-[8px] text-white/60">
                            {product.categoryLabel}
                          </p>
                        </div>

                        <p className="text-lg font-semibold">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="mt-9 hidden grid-cols-12 gap-5 sm:grid">
              {featured.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className={
                    index === 0
                      ? "group col-span-5"
                      : index === 1
                      ? "group col-span-3 mt-16"
                      : "group col-span-4 mt-5"
                  }
                >
                  <div className="relative overflow-hidden rounded-[2.3rem]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#fffaf8]/92 px-3 py-2 text-[6px] font-bold uppercase tracking-[0.15em] text-[#a66178] backdrop-blur">
                      {product.badge}
                    </span>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-[#583e48]">
                        {product.name}
                      </p>

                      <p className="mt-1 text-[8px] text-[#9b808b]">
                        {product.categoryLabel}
                      </p>
                    </div>

                    <p className="text-lg font-semibold text-[#9e5e75]">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to="/shop"
              className="mt-4 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#9f5d74] sm:hidden"
            >
              shop everything
              <ArrowUpRight size={11} />
            </Link>
          </div>
        </section>

        {/* =====================================================
            ROOMS
        ====================================================== */}
        <section
          ref={roomsRef}
          onPointerMove={handleRoomPointerMove}
          onPointerLeave={resetRooms}
          className="relative overflow-hidden bg-[#f8eef1] py-14 sm:py-20"
        >
          <div className="site-container">
            <div className="mb-8">
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#bb6d85]">
                explore xoxo
              </p>

              <h2 className="editorial-font mt-2 text-4xl italic text-[#563a45] sm:text-5xl">
                pick a room.
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-12">
              <motion.div
                style={{
                  x: roomX,
                  y: roomY,
                }}
                className="lg:col-span-7"
              >
                <RoomCard
                  to="/closet"
                  title="the pink closet."
                  number="01"
                  image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=88"
                  className="min-h-[500px]"
                />
              </motion.div>

              <motion.div
                style={{
                  x: reverseRoomX,
                  y: reverseRoomY,
                }}
                className="lg:col-span-5"
              >
                <RoomCard
                  to="/tech"
                  title="cute tech."
                  number="02"
                  image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1100&q=85"
                  className="min-h-[350px]"
                />
              </motion.div>

              {/* COLLECTOR */}
              <Link
                to="/collectors"
                className="group relative min-h-[350px] overflow-hidden rounded-[2.7rem] border border-[#e5c7d2] bg-[#f0d4de] p-6 lg:col-span-5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 to-transparent" />

                <p className="relative z-10 text-[7px] font-bold uppercase tracking-[0.18em] text-[#ae647c]">
                  room 03
                </p>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-4, 5, -4],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute right-[5%] top-[3%]"
                >
                  <Heart
                    size={150}
                    strokeWidth={0.7}
                    className="text-white/60"
                  />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [-7, -2, -7],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-7 right-7 text-5xl"
                >
                  🎀
                </motion.div>

                <div className="absolute bottom-7 left-6 z-10">
                  <p className="editorial-font text-[2.7rem] italic leading-none text-[#674351]">
                    collector
                    <span className="block">
                      shelf.
                    </span>
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-[1rem] bg-[#fffaf8]/78 px-4 py-2.5 text-[7px] font-bold uppercase tracking-[0.15em] text-[#98566e] backdrop-blur">
                    see the shelf
                    <ArrowUpRight size={10} />
                  </div>
                </div>
              </Link>

              {/* LIVE */}
              <Link
                to="/live"
                className="group relative min-h-[440px] overflow-hidden rounded-[2.7rem] bg-[#805065] lg:col-span-7"
              >
                <img
                  src={`${BASE}images/curator/curator-live.jpg`}
                  onError={(event) => {
                    event.currentTarget.src =
                      `${BASE}images/curator/curator-hero.jpg`;
                  }}
                  alt="XOXO Live"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#351b25]/80 via-transparent to-[#351b25]/5" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#c94e74] px-3 py-2 text-white shadow-md">
                  <motion.span
                    animate={{
                      opacity: [1, 0.35, 1],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-white"
                  />

                  <span className="text-[7px] font-bold uppercase tracking-[0.15em]">
                    live
                  </span>
                </div>

                <div className="absolute bottom-7 left-6 text-white">
                  <p className="text-[7px] font-bold uppercase tracking-[0.17em] text-white/65">
                    room 04
                  </p>

                  <p className="editorial-font mt-2 text-4xl italic sm:text-5xl">
                    xoxo live.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-[1rem] bg-white/14 px-4 py-2.5 text-[7px] font-bold uppercase tracking-[0.15em] backdrop-blur">
                    watch the room
                    <ArrowUpRight size={10} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#fffaf8] py-16 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2d9e3]/45 blur-[100px]" />

          <div className="site-container relative text-center">
            <Heart
              size={17}
              className="mx-auto fill-[#e9b9c9] text-[#b96e86]"
            />

            <p className="editorial-font mx-auto mt-4 max-w-2xl text-3xl italic leading-[1.08] text-[#63424e] sm:text-5xl">
              love it now
              <span className="block text-[#b76c86]">
                before it's gone ♡
              </span>
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/shop"
                className="group relative inline-flex min-h-[56px] w-full max-w-[290px] items-center overflow-hidden rounded-[1.25rem] border border-[#633c4b] bg-[#633c4b] text-white shadow-[0_16px_35px_rgba(67,31,45,.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#573440]"
              >
                <span className="flex flex-1 items-center px-5 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                  shop all xoxo
                </span>

                <span className="mr-1.5 grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[1rem] bg-[#fffaf8] text-[#633c4b] transition duration-300 group-hover:rotate-6">
                  <ShoppingBag
                    size={13}
                    strokeWidth={1.6}
                  />
                </span>

                <span className="pointer-events-none absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </XoxoPageFrame>
  );
}

function RoomCard({
  to,
  title,
  number,
  image,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`group relative block overflow-hidden rounded-[2.7rem] ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#3c212b]/72 via-transparent to-[#3c212b]/5" />

      <div className="absolute left-5 top-5">
        <span className="rounded-full bg-white/14 px-3 py-2 text-[7px] font-bold uppercase tracking-[0.17em] text-white backdrop-blur">
          room {number}
        </span>
      </div>

      <div className="absolute bottom-7 left-6 right-6 text-white">
        <p className="editorial-font text-4xl italic leading-none sm:text-5xl">
          {title}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-[1rem] bg-white/14 px-4 py-2.5 text-[7px] font-bold uppercase tracking-[0.15em] backdrop-blur transition group-hover:bg-white group-hover:text-[#563944]">
          enter
          <ArrowUpRight size={10} />
        </div>
      </div>
    </Link>
  );
}

export default Home;
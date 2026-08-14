import {
  ArrowLeft,
  ArrowUpRight,
  Heart,
  Shirt,
  ShoppingBag,
  Sparkles,
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

function Closet() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);

  const closetProducts = products.filter(
    (product) =>
      product.category === "closet" &&
      !product.sold
  );

  const featured =
    closetProducts[0] || null;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 70]
  );

  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const copyY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45]
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 65,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 65,
    damping: 22,
  });

  const floatingX = useTransform(
    smoothX,
    [-1, 1],
    [-10, 10]
  );

  const floatingY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8]
  );

  function handlePointerMove(event) {
    const rect =
      pageRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
        2 -
      1;

    const y =
      ((event.clientY -
        window.innerHeight / 2) /
        window.innerHeight) *
      2;

    mouseX.set(x);
    mouseY.set(y);
  }

  function resetPointer() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <XoxoPageFrame>
      <main
        ref={pageRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        className="overflow-hidden bg-[#fffaf8]"
      >
        <AnnouncementBar />
        <Navbar />

        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          ref={heroRef}
          className="relative overflow-hidden border-b border-[#ead8df] bg-[#f7edf1]"
        >
          <div className="pointer-events-none absolute -left-36 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#f3d7e1]/70 blur-[120px]" />

          <div className="pointer-events-none absolute -right-40 bottom-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[#f6e8b2]/22 blur-[130px]" />

          {/* DESKTOP */}
          <div className="site-container relative hidden min-h-[780px] lg:block">
            <Link
              to="/"
              className="absolute left-0 top-8 z-30 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.19em] text-[#806773]"
            >
              <ArrowLeft size={12} />
              xoxo house
            </Link>

            <div className="absolute right-0 top-8 z-30 text-right">
              <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#9d7f8e]">
                THE PINK CLOSET
              </p>

              <p className="mt-1 text-[8px] text-[#ae98a2]">
                vintage • streetwear • one-offs
              </p>
            </div>

            {/* COPY */}
            <motion.div
              style={{ y: copyY }}
              className="absolute left-0 top-1/2 z-20 w-[45%] -translate-y-1/2"
            >
              <div className="flex items-center gap-2">
                <Sparkles
                  size={13}
                  strokeWidth={1.4}
                  className="text-[#bb6f88]"
                />

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#af6981]">
                  from her rack
                </p>
              </div>

              <h1 className="editorial-font mt-7 text-[6.4rem] font-medium italic leading-[0.82] tracking-[-0.065em] text-[#533742]">
                The Pink
                <span className="block pl-[8%] text-[#bf6f8c]">
                  Closet.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-[#816a74]">
                Vintage jackets, denim, sneakers and
                pieces that already feel like they belong
                in somebody's favorite outfit.
              </p>

              <div className="mt-8 flex max-w-[470px] gap-2">
                <a
                  href="#rack"
                  className="group relative inline-flex min-h-[54px] min-w-[220px] flex-1 items-center overflow-hidden rounded-[1.25rem] border border-[#633c4b] bg-[#633c4b] text-white shadow-[0_16px_35px_rgba(67,31,45,.18)] transition hover:-translate-y-0.5"
                >
                  <span className="flex flex-1 items-center px-5 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                    shop the rack
                  </span>

                  <span className="mr-1.5 grid h-[41px] w-[41px] shrink-0 place-items-center rounded-[1rem] bg-[#fffaf8] text-[#633c4b]">
                    <ShoppingBag size={13} />
                  </span>
                </a>

                <Link
                  to="/shop?category=closet"
                  className="group relative inline-flex min-h-[54px] min-w-[180px] items-center overflow-hidden rounded-[1.25rem] border border-[#dfc7d0] bg-[#fffaf8] text-[#5b3a47] shadow-[0_12px_28px_rgba(67,31,45,.08)]"
                >
                  <span className="flex flex-1 items-center px-5 text-[8px] font-bold uppercase tracking-[0.18em]">
                    see all
                  </span>

                  <span className="mr-1.5 grid h-[41px] w-[41px] shrink-0 place-items-center rounded-[1rem] bg-[#efc4d2] text-[#5d3a47]">
                    <ArrowUpRight size={12} />
                  </span>
                </Link>
              </div>

              <div className="mt-11 flex gap-7">
                <SmallTrust
                  icon={Heart}
                  label="curated"
                  copy="picked by xoxo"
                />

                <SmallTrust
                  icon={Shirt}
                  label="one-offs"
                  copy="small quantities"
                />
              </div>
            </motion.div>

            {/* FEATURED FASHION STAGE */}
            {featured && (
              <motion.div
                style={{
                  x: floatingX,
                  y: floatingY,
                }}
                className="absolute bottom-[5%] right-[1%] top-[10%] z-10 w-[51%]"
              >
                <div className="relative h-full overflow-hidden rounded-[4rem] border border-[#decbd3] bg-white/58 shadow-[0_35px_100px_rgba(80,52,64,.09)] backdrop-blur-xl">
                  <div className="absolute left-8 top-7 z-20">
                    <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#a96780]">
                      CURRENTLY ON THE RACK
                    </p>

                    <p className="mt-1 text-[9px] text-[#ad95a0]">
                      {featured.name}
                    </p>
                  </div>

                  <div className="absolute right-8 top-7 z-20 rounded-full bg-[#f7e8ab] px-3 py-2">
                    <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#75642f]">
                      one of one ♡
                    </p>
                  </div>

                  <motion.div
                    style={{
                      y: heroImageY,
                      scale: heroImageScale,
                    }}
                    className="absolute inset-x-[8%] bottom-[11%] top-[14%]"
                  >
                    <div className="relative h-full overflow-hidden rounded-[3rem] shadow-[0_28px_70px_rgba(75,49,60,.12)]">
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#442630]/28 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  <div className="absolute bottom-8 left-8">
                    <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-[#a67d8e]">
                      condition
                    </p>

                    <p className="mt-1 text-[9px] font-semibold text-[#67535d]">
                      {featured.condition}
                    </p>
                  </div>

                  <div className="absolute bottom-8 left-[38%]">
                    <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-[#a67d8e]">
                      available
                    </p>

                    <p className="mt-1 text-[9px] font-semibold text-[#67535d]">
                      {featured.quantity === 1
                        ? "only 1"
                        : `${featured.quantity} left`}
                    </p>
                  </div>

                  <div className="absolute bottom-7 right-8 text-right">
                    <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-[#a67d8e]">
                      price
                    </p>

                    <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-[#9e6077]">
                      ${featured.price}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    rotate: [-4, -1, -4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-3 -left-4 rounded-full bg-[#efbdd0] px-5 py-3 shadow-xl"
                >
                  <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#6b4352]">
                    closet crush ♡
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* MOBILE */}
          <div className="relative min-h-[850px] overflow-hidden lg:hidden">
            <div className="absolute inset-0">
              <img
                src={featured?.image}
                alt={featured?.name || "The Pink Closet"}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f9]/94 via-[#fff7f9]/34 via-[28%] to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3a202b]/80 via-transparent via-[48%] to-transparent" />
            </div>

            <div className="relative z-20 px-5 pt-8">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.18em] text-[#7f6370]"
                >
                  <ArrowLeft size={11} />
                  xoxo
                </Link>

                <span className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#a27f8f]">
                  closet
                </span>
              </div>

              <div className="mt-9 flex items-center gap-2">
                <Sparkles
                  size={12}
                  className="text-[#b96e88]"
                />

                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#ad647e]">
                  from her rack
                </p>
              </div>

              <h1 className="editorial-font mt-4 text-[4.25rem] font-medium italic leading-[0.78] tracking-[-0.06em] text-[#523742]">
                The Pink
                <span className="block pl-[6%] text-[#be6d8a]">
                  Closet.
                </span>
              </h1>
            </div>

            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [-4, -1, -4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-4 top-[45%] z-30 rounded-full bg-[#f7e8aa]/95 px-4 py-2.5 shadow-xl"
            >
              <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#75642e]">
                closet crush ♡
              </p>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 z-30 px-5 pb-7">
              <p className="max-w-[315px] text-[12px] leading-6 text-white/85">
                Vintage, streetwear and pieces that
                already feel like your next favorite.
              </p>

              <div className="mt-5 grid grid-cols-[1.25fr_0.9fr] gap-2">
                <a
                  href="#rack"
                  className="group relative inline-flex min-h-[54px] items-center overflow-hidden rounded-[1.15rem] bg-[#fffaf8] text-[#543541] shadow-[0_16px_34px_rgba(28,12,18,.3)]"
                >
                  <span className="flex flex-1 items-center px-4 text-[7px] font-bold uppercase tracking-[0.16em]">
                    shop the rack
                  </span>

                  <span className="mr-1.5 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[0.95rem] bg-[#633c4b] text-white">
                    <ShoppingBag size={12} />
                  </span>
                </a>

                <Link
                  to="/shop?category=closet"
                  className="group relative inline-flex min-h-[54px] items-center overflow-hidden rounded-[1.15rem] border border-white/35 bg-[#5b3443]/72 text-white backdrop-blur"
                >
                  <span className="flex flex-1 items-center px-4 text-[7px] font-bold uppercase tracking-[0.15em] text-white">
                    see all
                  </span>

                  <span className="mr-1.5 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[0.95rem] bg-[#efbdd0] text-[#5a3543]">
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DROP STRIP
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-[#ead8df] bg-[#f4dce5] py-8">
          <div className="site-container flex items-center justify-between gap-6">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.19em] text-[#b76c85]">
                fresh on the rack
              </p>

              <p className="editorial-font mt-1 text-2xl italic text-[#60404c] sm:text-3xl">
                pieces she almost kept
              </p>
            </div>

            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <Heart
                size={46}
                strokeWidth={1}
                className="text-[#bf6e89]/60"
              />
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            THE RACK
        ====================================================== */}
        <section
          id="rack"
          className="bg-[#fffaf8] py-14 sm:py-20"
        >
          <div className="site-container">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#ba6e87]">
                  shop now
                </p>

                <h2 className="editorial-font mt-2 text-4xl italic text-[#583b46] sm:text-5xl">
                  on the rack.
                </h2>
              </div>

              <Link
                to="/shop?category=closet"
                className="hidden items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#9d5c73] sm:flex"
              >
                shop all closet
                <ArrowUpRight size={11} />
              </Link>
            </div>

            {/* MOBILE */}
            <div className="no-scrollbar -mx-3 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-5 sm:hidden">
              {closetProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="w-[76vw] shrink-0 snap-center"
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

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#39222c]/82 to-transparent px-4 pb-4 pt-16 text-white">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold">
                            {product.name}
                          </p>

                          <p className="mt-1 text-[8px] text-white/60">
                            {product.condition}
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
            <div className="mt-10 hidden grid-cols-12 gap-5 sm:grid">
              {closetProducts.map((product, index) => {
                const span =
                  index % 4 === 0
                    ? "col-span-5"
                    : index % 4 === 1
                    ? "col-span-3 mt-16"
                    : index % 4 === 2
                    ? "col-span-4 mt-6"
                    : "col-span-4";

                return (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className={`group ${span}`}
                  >
                    <div className="relative overflow-hidden rounded-[2.4rem]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                      />

                      <span className="absolute left-4 top-4 rounded-full bg-[#fffaf8]/92 px-3 py-2 text-[6px] font-bold uppercase tracking-[0.15em] text-[#a66178] backdrop-blur">
                        {product.badge}
                      </span>

                      {product.quantity <= 2 && (
                        <div className="absolute bottom-4 left-4 rounded-full bg-[#633c4b]/88 px-3 py-2 text-white backdrop-blur">
                          <p className="text-[6px] font-bold uppercase tracking-[0.14em]">
                            {product.quantity === 1
                              ? "only 1 left"
                              : `${product.quantity} left`}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-[#583d47]">
                          {product.name}
                        </p>

                        <p className="mt-1 text-[8px] text-[#9b808b]">
                          {product.condition}
                        </p>
                      </div>

                      <p className="text-lg font-semibold text-[#9e5e75]">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <Link
              to="/shop?category=closet"
              className="mt-5 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#9e5c73] sm:hidden"
            >
              shop all closet
              <ArrowUpRight size={11} />
            </Link>
          </div>
        </section>

        {/* =====================================================
            STYLE MOMENT
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#633c4b] py-14 text-white sm:py-20">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#e9b6c8]/10 blur-[90px]" />

          <div className="site-container relative">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#efbdcf]">
                  style it your way
                </p>

                <h2 className="editorial-font mt-3 text-4xl italic leading-[0.95] sm:text-6xl">
                  find the piece
                  <span className="block text-[#e8b3c6]">
                    that does the outfit.
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <StyleTile
                  title="Jackets"
                  note="layer it"
                />

                <StyleTile
                  title="Denim"
                  note="everyday staple"
                />

                <StyleTile
                  title="Sneakers"
                  note="finish the look"
                />

                <StyleTile
                  title="One-offs"
                  note="grab it quick"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL SELL
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#fffaf8] py-16 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2d9e3]/45 blur-[100px]" />

          <div className="site-container relative text-center">
            <Heart
              size={17}
              className="mx-auto fill-[#e8b7c8] text-[#b96d86]"
            />

            <p className="editorial-font mx-auto mt-4 max-w-2xl text-3xl italic leading-[1.08] text-[#63424e] sm:text-5xl">
              if it feels like yours
              <span className="block text-[#b76c86]">
                don't leave it behind ♡
              </span>
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/shop?category=closet"
                className="group relative inline-flex min-h-[56px] w-full max-w-[300px] items-center overflow-hidden rounded-[1.25rem] border border-[#633c4b] bg-[#633c4b] text-white shadow-[0_16px_35px_rgba(67,31,45,.18)] transition hover:-translate-y-0.5"
              >
                <span className="flex flex-1 items-center px-5 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                  shop the closet
                </span>

                <span className="mr-1.5 grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[1rem] bg-[#fffaf8] text-[#633c4b]">
                  <ShoppingBag size={13} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </XoxoPageFrame>
  );
}

function SmallTrust({
  icon: Icon,
  label,
  copy,
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon
          size={12}
          strokeWidth={1.4}
          className="text-[#ad7088]"
        />

        <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#8f6f7e]">
          {label}
        </p>
      </div>

      <p className="mt-1 text-[8px] text-[#9b858f]">
        {copy}
      </p>
    </div>
  );
}

function StyleTile({
  title,
  note,
}) {
  return (
    <Link
      to="/shop?category=closet"
      className="group rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"
    >
      <Heart
        size={14}
        strokeWidth={1.4}
        className="text-[#e7b6c8]"
      />

      <p className="mt-8 text-base font-semibold">
        {title}
      </p>

      <p className="mt-2 text-[9px] text-white/45">
        {note}
      </p>

      <div className="mt-6 flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.15em] text-[#e0b7c7]">
        shop
        <ArrowUpRight size={10} />
      </div>
    </Link>
  );
}

export default Closet;
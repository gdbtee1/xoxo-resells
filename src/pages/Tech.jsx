import {
  ArrowLeft,
  ArrowUpRight,
  BatteryCharging,
  Camera,
  Check,
  Heart,
  Headphones,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wifi,
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

import { useCart } from "../context/CartContext";
import products from "../data/products";

function Tech() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);

  const { addToCart } = useCart();

  const techProducts = products.filter(
    (product) =>
      product.category === "tech" &&
      !product.sold
  );

  const featured =
    techProducts[0] || null;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 65]
  );

  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.07]
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const floatX = useTransform(
    smoothX,
    [-1, 1],
    [-10, 10]
  );

  const floatY = useTransform(
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
        className="overflow-hidden bg-[#fbfafc]"
      >
        <AnnouncementBar />
        <Navbar />

        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          ref={heroRef}
          className="relative overflow-hidden border-b border-[#e8dde4]"
        >
          <div className="pointer-events-none absolute -left-40 top-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[#efe4fb]/70 blur-[120px]" />

          <div className="pointer-events-none absolute -right-40 bottom-[-12rem] h-[40rem] w-[40rem] rounded-full bg-[#dff3ec]/55 blur-[130px]" />

          <div className="pointer-events-none absolute left-[43%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#f8dbe7]/45 blur-[110px]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(176,145,163,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(176,145,163,.12) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* DESKTOP */}
          <div className="site-container relative hidden min-h-[760px] lg:block">
            <Link
              to="/"
              className="absolute left-0 top-8 z-30 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.19em] text-[#826976]"
            >
              <ArrowLeft size={12} />
              xoxo house
            </Link>

            <div className="absolute right-0 top-8 z-30 text-right">
              <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#9e8190]">
                CUTE TECH
              </p>

              <p className="mt-1 text-[8px] text-[#ad98a3]">
                cameras • headphones • accessories
              </p>
            </div>

            {/* HERO COPY */}
            <div className="absolute left-0 top-1/2 z-20 w-[46%] -translate-y-1/2">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={13}
                  strokeWidth={1.4}
                  className="text-[#bc718b]"
                />

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#b16b84]">
                  cute finds that actually work
                </p>
              </div>

              <h1 className="mt-7 text-[6rem] font-medium leading-[0.86] tracking-[-0.068em] text-[#51434a]">
                Your tech
                <span className="block text-[#b97791]">
                  can be cute too.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-[#83717b]">
                Digicams, headphones, phone accessories and
                other fun tech finds. Everything is checked
                before it gets listed so you can shop without
                guessing.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#tech-finds"
                  className="inline-flex items-center gap-3 rounded-full bg-[#dfa9be] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.17em] text-[#5f414d] transition hover:-translate-y-0.5 hover:bg-[#d797b0]"
                >
                  shop cute tech
                  <ShoppingBag size={13} />
                </a>

                <Link
                  to="/shop?category=tech"
                  className="inline-flex items-center gap-3 rounded-full border border-[#d8c9d2] bg-white/75 px-7 py-4 text-[8px] font-bold uppercase tracking-[0.17em] text-[#715763]"
                >
                  see everything
                  <ArrowUpRight size={12} />
                </Link>
              </div>

              <div className="mt-10 flex gap-7">
                <TrustMini
                  icon={Check}
                  label="tested"
                  copy="working"
                />

                <TrustMini
                  icon={ShieldCheck}
                  label="checked"
                  copy="condition listed"
                />

                <TrustMini
                  icon={Heart}
                  label="curated"
                  copy="picked by xoxo"
                />
              </div>
            </div>

            {/* FEATURED ITEM */}
            {featured && (
              <motion.div
                style={{
                  x: floatX,
                  y: floatY,
                }}
                className="absolute bottom-[5%] right-[1%] top-[10%] z-10 w-[50%]"
              >
                <div className="relative h-full rounded-[4rem] border border-[#ddd1d8] bg-white/52 shadow-[0_35px_100px_rgba(79,57,70,.08)] backdrop-blur-xl">
                  <div className="absolute left-8 top-7">
                    <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#a96e85]">
                      FEATURED FIND
                    </p>

                    <p className="mt-1 text-[9px] text-[#ad96a1]">
                      {featured.name}
                    </p>
                  </div>

                  <div className="absolute right-8 top-7 flex items-center gap-2 rounded-full bg-[#ecf8f2] px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#87cdb4]" />

                    <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#6b9b89]">
                      tested
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      top: ["16%", "82%", "16%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute left-[9%] right-[9%] z-30 h-px bg-[#d8a8ba]/75 shadow-[0_0_18px_rgba(216,168,186,.7)]"
                  />

                  <div className="absolute inset-x-[9%] bottom-[13%] top-[14%] flex items-center justify-center">
                    <motion.div
                      style={{
                        y: heroImageY,
                        scale: heroImageScale,
                      }}
                      className="relative w-[75%]"
                    >
                      <div className="absolute inset-[14%] rounded-full bg-[#e8ddf3]/60 blur-[45px]" />

                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative overflow-hidden rounded-[3rem] bg-[#eceaed] shadow-[0_30px_70px_rgba(72,53,63,.13)]"
                      >
                        <img
                          src={featured.image}
                          alt={featured.name}
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-[#a57d8e]">
                      condition
                    </p>

                    <p className="mt-1 text-[9px] font-semibold text-[#67535d]">
                      {featured.condition}
                    </p>
                  </div>

                  <div className="absolute bottom-8 left-[37%]">
                    <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-[#a57d8e]">
                      available
                    </p>

                    <p className="mt-1 text-[9px] font-semibold text-[#67535d]">
                      {featured.quantity === 1
                        ? "only 1"
                        : `${featured.quantity} left`}
                    </p>
                  </div>

                  <div className="absolute bottom-7 right-8 text-right">
                    <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-[#a57d8e]">
                      price
                    </p>

                    <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-[#9f6178]">
                      ${featured.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(featured)}
                  className="absolute -bottom-4 right-8 inline-flex items-center gap-2 rounded-full bg-[#d99bb3] px-5 py-3.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#5f414d] shadow-xl transition hover:-translate-y-1"
                >
                  add to bag
                  <ShoppingBag size={12} />
                </button>

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [-3, -1, -3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-3 -left-4 rounded-full border border-[#dacbd3] bg-[#fffaf8]/95 px-5 py-3 shadow-xl"
                >
                  <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#a96880]">
                    viral pick ♡
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* MOBILE */}
          <div className="relative px-4 pb-10 pt-7 lg:hidden">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.18em] text-[#826878]"
              >
                <ArrowLeft size={11} />
                xoxo
              </Link>

              <span className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#a58294]">
                cute tech
              </span>
            </div>

            <div className="mt-9">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={12}
                  className="text-[#bb718b]"
                />

                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#b26c86]">
                  cameras • audio • accessories
                </p>
              </div>

              <h1 className="mt-4 text-[3.9rem] font-medium leading-[0.86] tracking-[-0.065em] text-[#51434a]">
                Your tech
                <span className="block pl-[5%] text-[#ba7892]">
                  can be cute too.
                </span>
              </h1>

              <p className="mt-5 max-w-[330px] text-xs leading-6 text-[#81717a]">
                Fun tech finds checked before listing.
                See the condition, see the price, grab it
                before it's gone.
              </p>
            </div>

            {featured && (
              <div className="relative mt-8 rounded-[2.8rem] border border-[#dacfd5] bg-white/60 p-3 shadow-[0_30px_80px_rgba(77,56,67,.08)] backdrop-blur">
                <div className="flex items-center justify-between px-3 py-3">
                  <div>
                    <p className="text-[6px] font-bold uppercase tracking-[0.17em] text-[#a66f86]">
                      featured find
                    </p>

                    <p className="mt-1 text-[9px] text-[#7f6974]">
                      {featured.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-[#eef8f3] px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8dceb7]" />

                    <span className="text-[6px] font-bold uppercase tracking-[0.14em] text-[#729b8b]">
                      tested
                    </span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[2.2rem]">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="aspect-[4/5] w-full object-cover"
                  />

                  <motion.div
                    animate={{
                      top: ["8%", "90%", "8%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute left-[5%] right-[5%] h-px bg-[#e5afc2]/90 shadow-[0_0_14px_rgba(230,177,197,.85)]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 p-3 pt-4">
                  <MiniStat
                    label="condition"
                    value={featured.condition}
                  />

                  <MiniStat
                    label="stock"
                    value={
                      featured.quantity === 1
                        ? "1 left"
                        : `${featured.quantity} left`
                    }
                  />

                  <MiniStat
                    label="price"
                    value={`$${featured.price}`}
                  />
                </div>

                <button
                  onClick={() => addToCart(featured)}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-[#dfa8bd] px-5 py-4 text-[8px] font-bold uppercase tracking-[0.16em] text-[#5f414d]"
                >
                  add to bag
                  <ShoppingBag size={12} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            TRUST BAR
        ====================================================== */}
        <section className="border-b border-[#e5dae1] bg-[#f3eff5]">
          <div className="site-container">
            <div className="no-scrollbar flex items-center gap-8 overflow-x-auto py-5 sm:justify-between">
              <TrustItem
                icon={Check}
                title="TESTED"
                copy="works before listing"
              />

              <TrustItem
                icon={ShieldCheck}
                title="CONDITION LISTED"
                copy="no guessing"
              />

              <TrustItem
                icon={BatteryCharging}
                title="READY TO GO"
                copy="prepared for resale"
              />

              <TrustItem
                icon={Heart}
                title="XOXO PICK"
                copy="curated for the shop"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCTS
        ====================================================== */}
        <section
          id="tech-finds"
          className="bg-[#fbfafc] py-14 sm:py-22"
        >
          <div className="site-container">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#ae7189]">
                  SHOP NOW
                </p>

                <h2 className="mt-2 text-4xl font-medium tracking-[-0.05em] text-[#51434a] sm:text-6xl">
                  Cute tech
                  <span className="text-[#b77a92]">
                    {" "}
                    in stock.
                  </span>
                </h2>
              </div>

              <Link
                to="/shop?category=tech"
                className="inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.17em] text-[#9f5e76]"
              >
                shop all tech
                <ArrowUpRight size={12} />
              </Link>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-5 lg:grid-cols-3">
              {techProducts.map(
                (product, index) => (
                  <TechProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    addToCart={addToCart}
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK CATEGORY SHOPPING
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#69535f] py-14 text-white sm:py-18">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#d5b9e2]/10 blur-[90px]" />

          <div className="site-container relative">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#dfbfd0]">
                SHOP BY TYPE
              </p>

              <h2 className="mt-2 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
                Find your next
                <span className="text-[#e3b7ca]">
                  {" "}
                  favorite.
                </span>
              </h2>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <CategoryTile
                icon={Camera}
                title="Cameras"
                copy="Digicams & photo finds"
              />

              <CategoryTile
                icon={Headphones}
                title="Headphones"
                copy="Cute audio finds"
              />

              <CategoryTile
                icon={Smartphone}
                title="Phone Stuff"
                copy="Cases & accessories"
              />

              <CategoryTile
                icon={Sparkles}
                title="Desk Finds"
                copy="Little setup upgrades"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            SIMPLE CHECKED SECTION
        ====================================================== */}
        <section className="bg-[#f5f1f5] py-14 sm:py-20">
          <div className="site-container">
            <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#ad6d85]">
                  BEFORE IT GETS LISTED
                </p>

                <h2 className="mt-3 text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-[#55464e] sm:text-6xl">
                  Checked
                  <span className="block text-[#b77791]">
                    and ready.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#83717b]">
                  We check the important stuff before it
                  hits the shop so you can focus on whether
                  you want it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <CheckCard
                  icon={BatteryCharging}
                  title="Power"
                  copy="Charging checked."
                />

                <CheckCard
                  icon={Wifi}
                  title="Connection"
                  copy="Connectivity checked."
                />

                <CheckCard
                  icon={Camera}
                  title="Features"
                  copy="Main controls tested."
                />

                <CheckCard
                  icon={ShieldCheck}
                  title="Condition"
                  copy="Wear clearly listed."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SALES CLOSE
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#fbfafc] py-16 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3dce6]/45 blur-[100px]" />

          <div className="site-container relative text-center">
            <Heart
              size={18}
              className="mx-auto fill-[#e8b7ca] text-[#b97790]"
            />

            <p className="mx-auto mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] text-[#5c4953] sm:text-5xl">
              If you love it
              <span className="block text-[#b77991]">
                don't wait too long.
              </span>
            </p>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#88747e]">
              A lot of XOXO finds are one-offs or
              available in tiny quantities.
            </p>

            <Link
              to="/shop?category=tech"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#dda7bc] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.17em] text-[#60434f] transition hover:-translate-y-0.5"
            >
              shop cute tech
              <ShoppingBag size={12} />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </XoxoPageFrame>
  );
}

/* =====================================================
   HELPERS
===================================================== */

function TrustMini({
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

function MiniStat({ label, value }) {
  return (
    <div className="rounded-[1.1rem] bg-[#f8f5f8] p-3 text-center">
      <p className="text-[6px] font-bold uppercase tracking-[0.13em] text-[#a07d8d]">
        {label}
      </p>

      <p className="mt-1.5 truncate text-[8px] font-semibold text-[#62505a]">
        {value}
      </p>
    </div>
  );
}

function TrustItem({
  icon: Icon,
  title,
  copy,
}) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-white/75">
        <Icon
          size={13}
          strokeWidth={1.4}
          className="text-[#a97086]"
        />
      </div>

      <div>
        <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#745d68]">
          {title}
        </p>

        <p className="mt-1 text-[8px] text-[#9b8590]">
          {copy}
        </p>
      </div>
    </div>
  );
}

function TechProductCard({
  product,
  index,
  addToCart,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
      }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.3rem]">
        <Link
          to={`/product/${product.slug}`}
          className="block"
        >
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </Link>

        <div className="absolute left-3 top-3 rounded-full bg-[#fffaf8]/90 px-3 py-1.5 backdrop-blur">
          <p className="text-[6px] font-bold uppercase tracking-[0.14em] text-[#ab657d]">
            {product.badge}
          </p>
        </div>

        {product.quantity <= 2 && (
          <div className="absolute bottom-3 left-3 rounded-full bg-[#76505f]/85 px-3 py-1.5 text-white backdrop-blur">
            <p className="text-[6px] font-bold uppercase tracking-[0.14em]">
              {product.quantity === 1
                ? "only 1 left"
                : `${product.quantity} left`}
            </p>
          </div>
        )}

        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-[#f0bfd0] text-[#65414f] shadow-lg transition hover:scale-105"
          aria-label={`Add ${product.name} to bag`}
        >
          <ShoppingBag size={14} />
        </button>
      </div>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              to={`/product/${product.slug}`}
              className="text-sm font-semibold leading-5 text-[#55434c] sm:text-base"
            >
              {product.name}
            </Link>

            <p className="mt-1 text-[8px] text-[#9b828e]">
              {product.condition} • tested
            </p>
          </div>

          <p className="shrink-0 text-lg font-semibold tracking-[-0.03em] text-[#a16078]">
            ${product.price}
          </p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 inline-flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.15em] text-[#b26780]"
        >
          add to bag
          <ArrowUpRight size={10} />
        </button>
      </div>
    </motion.article>
  );
}

function CategoryTile({
  icon: Icon,
  title,
  copy,
}) {
  return (
    <Link
      to="/shop?category=tech"
      className="group rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
    >
      <Icon
        size={18}
        strokeWidth={1.3}
        className="text-[#e4b9ca]"
      />

      <p className="mt-8 text-base font-semibold">
        {title}
      </p>

      <p className="mt-2 text-[9px] leading-5 text-white/45">
        {copy}
      </p>

      <div className="mt-6 flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.15em] text-[#e1b8c8]">
        shop
        <ArrowUpRight size={10} />
      </div>
    </Link>
  );
}

function CheckCard({
  icon: Icon,
  title,
  copy,
}) {
  return (
    <div className="rounded-[1.7rem] border border-[#ded0d8] bg-white/75 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <Icon
          size={15}
          strokeWidth={1.3}
          className="text-[#a86d85]"
        />

        <Check
          size={11}
          className="text-[#7eb79f]"
        />
      </div>

      <p className="mt-6 text-sm font-semibold text-[#5d4953]">
        {title}
      </p>

      <p className="mt-2 text-[9px] leading-5 text-[#907c86]">
        {copy}
      </p>
    </div>
  );
}

export default Tech;
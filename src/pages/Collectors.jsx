import {
  ArrowLeft,
  ArrowUpRight,
  Crown,
  Heart,
  Sparkles,
  Star,
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

/*
  TEMPORARY VISUAL INVENTORY

  These are stock placeholders for the design only.
  Replace these with her real products later.
*/
const demoCollectibles = [
  {
    id: "pink-pocket-pet",
    name: "Pink Pocket Pet",
    price: 32,
    type: "nostalgia find",
    badge: "tiny icon",
    image:
      "https://images.pexels.com/photos/34938794/pexels-photo-34938794.jpeg?cs=srgb&dl=pexels-fotios-photos-34938794.jpg&fm=jpg",
  },
  {
    id: "blush-teddy",
    name: "Blush Teddy",
    price: 36,
    type: "soft shelf favorite",
    badge: "sweet find",
    image:
      "https://images.pexels.com/photos/4887099/pexels-photo-4887099.jpeg?cs=srgb&dl=pexels-karola-g-4887099.jpg&fm=jpg",
  },
  {
    id: "mint-mini",
    name: "Mint Mini Figure",
    price: 28,
    type: "tiny display piece",
    badge: "xoxo pick",
    image:
      "https://images.pexels.com/photos/10912253/pexels-photo-10912253.jpeg?auto=compress&dpr=1&h=750&w=1260",
  },
  {
    id: "crochet-cat",
    name: "Crochet Kitty Mini",
    price: 34,
    type: "handmade cutie",
    badge: "one cute thing",
    image:
      "https://images.pexels.com/photos/33481692/pexels-photo-33481692/free-photo-of-cute-handmade-crochet-doll-with-bird-accessory.jpeg?auto=compress&dpr=1&h=750&w=1260",
  },
  {
    id: "rainbow-charm",
    name: "Pink Rainbow Charm",
    price: 18,
    type: "bag charm",
    badge: "little treasure",
    image:
      "https://images.pexels.com/photos/20688978/pexels-photo-20688978.jpeg?cs=srgb&dl=pexels-pexels-user-1095721408-20688978.jpg&fm=jpg",
  },
  {
    id: "bear-charm",
    name: "Tiny Bear Charm",
    price: 22,
    type: "everyday collectible",
    badge: "cute find",
    image:
      "https://images.pexels.com/photos/18577406/pexels-photo-18577406.jpeg?cs=srgb&dl=pexels-batuhan-kocabas-123879152-18577406.jpg&fm=jpg",
  },
];

function Collectors() {
  const pageRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 55,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 55,
    damping: 24,
  });

  const displayX = useTransform(
    smoothX,
    [-1, 1],
    [-10, 10]
  );

  const displayY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8]
  );

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const floatingHeartY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 150]
  );

  function handlePointerMove(event) {
    const rect =
      pageRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      ((event.clientX - rect.left) /
        rect.width) *
        2 -
        1
    );

    mouseY.set(
      ((event.clientY - rect.top) /
        rect.height) *
        2 -
        1
    );
  }

  function resetPointer() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const featured = demoCollectibles[0];

  return (
    <XoxoPageFrame>
      <main
        ref={pageRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        className="overflow-hidden bg-[#fff7fa]"
      >
        <AnnouncementBar />
        <Navbar />

        {/* =====================================================
            ENTRANCE
        ====================================================== */}
        <section className="relative min-h-[760px] overflow-hidden bg-[radial-gradient(circle_at_60%_15%,#fffefd_0%,#fff2f7_43%,#f7dce6_100%)]">
          <KawaiiWallpaper />

          <div className="pointer-events-none absolute -left-24 top-[15%] h-[25rem] w-[25rem] rounded-full bg-[#ffc7db]/25 blur-[100px]" />

          <div className="pointer-events-none absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#f8df8f]/15 blur-[110px]" />

          {/* DESKTOP */}
          <div className="site-container relative hidden min-h-[760px] lg:block">
            <Link
              to="/"
              className="absolute left-0 top-8 z-30 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#714e5d]"
            >
              <ArrowLeft size={12} />
              xoxo house
            </Link>

            <div className="absolute right-0 top-8 z-30 text-right">
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#b6617d]">
                ROOM 03
              </p>

              <p className="mt-1 text-[8px] text-[#a98693]">
                collector corner ♡
              </p>
            </div>

            <div className="absolute left-0 top-1/2 z-20 w-[40%] -translate-y-1/2">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={12}
                  className="text-[#c56c8b]"
                />

                <p className="text-[8px] font-bold uppercase tracking-[0.21em] text-[#a75f79]">
                  welcome to
                </p>
              </div>

              <h1 className="editorial-font mt-5 text-[6.3rem] font-medium italic leading-[0.78] tracking-[-0.07em] text-[#5b3845]">
                collector
                <span className="block pl-[8%] text-[#dd769b]">
                  corner.
                </span>
              </h1>

              <p className="mt-8 max-w-[410px] text-sm leading-7 text-[#7a606b]">
                Plushies, charms, little gadgets and
                cute things that deserve their own spot.
              </p>

              <a
                href="#treasures"
                className="group mt-8 inline-flex min-h-[54px] items-center overflow-hidden rounded-[1.2rem] bg-[#693d4f] text-white shadow-[0_18px_38px_rgba(80,39,58,.2)]"
              >
                <span className="px-5 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                  see her finds
                </span>

                <span className="mr-1.5 grid h-[41px] w-[41px] place-items-center rounded-[0.95rem] bg-[#fff8fb] text-[#693d4f]">
                  <ArrowUpRight size={12} />
                </span>
              </a>
            </div>

            {/* WORLD ON RIGHT */}
            <motion.div
              style={{
                x: displayX,
                y: displayY,
              }}
              className="absolute bottom-[3%] right-0 top-[10%] w-[56%]"
            >
              <CatRoomStage item={featured} />
            </motion.div>
          </div>

          {/* MOBILE */}
          <div className="relative min-h-[760px] px-5 pb-8 pt-7 lg:hidden">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.18em] text-[#745463]"
              >
                <ArrowLeft size={11} />
                xoxo
              </Link>

              <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#aa607b]">
                room 03
              </p>
            </div>

            <div className="relative z-20 mt-10">
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#a65f79]">
                collector corner
              </p>

              <h1 className="editorial-font mt-3 text-[4.3rem] font-medium italic leading-[0.78] tracking-[-0.06em] text-[#593643]">
                tiny
                <span className="block pl-[7%] text-[#dc769a]">
                  obsessions.
                </span>
              </h1>
            </div>

            <div className="absolute inset-x-4 bottom-[95px] top-[270px]">
              <CatRoomStage
                item={featured}
                mobile
              />
            </div>

            <a
              href="#treasures"
              className="absolute bottom-7 left-5 right-5 z-30 flex min-h-[54px] items-center overflow-hidden rounded-[1.15rem] bg-[#693d4f] text-white shadow-[0_16px_34px_rgba(67,31,45,.2)]"
            >
              <span className="flex-1 px-5 text-[7px] font-bold uppercase tracking-[0.17em] text-white">
                see her finds
              </span>

              <span className="mr-1.5 grid h-[40px] w-[40px] place-items-center rounded-[0.95rem] bg-[#fff8fb] text-[#693d4f]">
                <ArrowUpRight size={12} />
              </span>
            </a>
          </div>
        </section>

        {/* =====================================================
            CONNECTING RIBBON
            NO HARD SECTION RESET
        ====================================================== */}
        <section
          id="treasures"
          className="relative -mt-px overflow-hidden bg-[#f9c8d9]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbd7e4_0%,#f5b9cf_50%,#f8cadb_100%)]" />

          <div className="pointer-events-none absolute left-[-5%] top-[-10rem] h-[22rem] w-[110%] rounded-[50%] bg-[#fff7fa]" />

          <div className="pointer-events-none absolute bottom-[-12rem] left-[-5%] h-[22rem] w-[110%] rounded-[50%] bg-[#fff8fb]" />

          <motion.div
            animate={{
              x: ["-10%", "110%"],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute top-[52%] text-3xl opacity-50"
          >
            ✦
          </motion.div>

          <div className="site-container relative z-10 min-h-[470px] py-24 sm:min-h-[560px]">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.21em] text-[#9d526e]">
                  CURRENT CRUSH
                </p>

                <h2 className="editorial-font mt-4 text-5xl italic leading-[0.92] text-[#633847] sm:text-7xl">
                  she found
                  <span className="block text-[#fff9fb]">
                    this first ♡
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-[#764f5e]">
                  Little finds come and go fast.
                  The good ones usually don't sit around.
                </p>
              </div>

              <div className="relative min-h-[330px]">
                <FloatingFeature
                  item={demoCollectibles[1]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TREASURE TRAIL
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#fff8fb] pb-24 pt-8 sm:pb-32">
          <KawaiiWallpaper opacity="0.12" />

          {/* winding trail */}
          <div className="pointer-events-none absolute left-1/2 top-[-40px] h-[90%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#eca9c0] via-[#f1c1d2] to-transparent lg:left-[52%]" />

          <motion.div
            style={{ y: floatingHeartY }}
            className="pointer-events-none absolute right-[5%] top-[18%]"
          >
            <Heart
              size={90}
              strokeWidth={0.7}
              className="text-[#efb2c6]/30"
            />
          </motion.div>

          <div className="site-container relative">
            <div className="flex items-end justify-between pb-10 pt-10 sm:pb-16">
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.21em] text-[#b6617d]">
                  HER LITTLE COLLECTION
                </p>

                <h2 className="editorial-font mt-3 text-4xl italic text-[#5f3b48] sm:text-6xl">
                  keep scrolling,
                  <span className="text-[#d77598]">
                    {" "}
                    there's more.
                  </span>
                </h2>
              </div>

              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-6, 2, -6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="hidden text-5xl sm:block"
              >
                🎀
              </motion.div>
            </div>

            <div className="space-y-5 sm:space-y-0">
              {demoCollectibles
                .slice(2)
                .map((item, index) => (
                  <TreasureMoment
                    key={item.id}
                    item={item}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            KAWAII CHARACTER MOMENT
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#efacc4]">
          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "radial-gradient(#7f4058 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="site-container relative min-h-[400px]">
            <div className="grid min-h-[400px] lg:grid-cols-2">
              <div className="relative z-20 flex items-center py-14">
                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#804359]">
                    THE XOXO RULE
                  </p>

                  <p className="editorial-font mt-4 max-w-lg text-4xl italic leading-[0.95] text-[#633646] sm:text-5xl">
                    cute enough to make you
                    <span className="block text-[#fff9fb]">
                      turn around for it.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <CatPeek />

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    rotate: [-7, -2, -7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute right-[9%] top-[10%] text-7xl"
                >
                  🎀
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#fff8fb] py-16 sm:py-20">
          <KawaiiWallpaper opacity="0.1" />

          <div className="site-container relative text-center">
            <Sparkles
              size={17}
              className="mx-auto text-[#c06a87]"
            />

            <p className="editorial-font mx-auto mt-5 max-w-2xl text-3xl italic leading-[1.02] text-[#633d4b] sm:text-5xl">
              find the one that makes you
              <span className="block text-[#d87598]">
                say “I need that.” ♡
              </span>
            </p>

            <Link
              to="/shop?category=collectibles"
              className="mx-auto mt-8 flex min-h-[56px] max-w-[305px] items-center overflow-hidden rounded-[1.2rem] bg-[#693d4f] text-white shadow-[0_18px_35px_rgba(79,39,56,.18)]"
            >
              <span className="flex-1 px-5 text-left text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                shop collectibles
              </span>

              <span className="mr-1.5 grid h-[42px] w-[42px] place-items-center rounded-[0.95rem] bg-[#fff8fb] text-[#693d4f]">
                <ArrowUpRight size={12} />
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </XoxoPageFrame>
  );
}

/* ============================================================
   HERO DISPLAY
============================================================ */

function CatRoomStage({
  item,
  mobile = false,
}) {
  return (
    <div className="relative h-full">
      {/* ears */}
      <div
        className={`absolute left-[9%] z-20 rotate-[-20deg] border-l-[#efa8c1] border-t-[#efa8c1] ${
          mobile
            ? "top-0 h-14 w-14 border-l-[13px] border-t-[13px]"
            : "top-[1%] h-24 w-24 border-l-[20px] border-t-[20px]"
        }`}
      />

      <div
        className={`absolute right-[9%] z-20 rotate-[20deg] border-r-[#efa8c1] border-t-[#efa8c1] ${
          mobile
            ? "top-0 h-14 w-14 border-r-[13px] border-t-[13px]"
            : "top-[1%] h-24 w-24 border-r-[20px] border-t-[20px]"
        }`}
      />

      <div className="absolute inset-x-[3%] bottom-0 top-[7%] overflow-hidden border-x-[5px] border-[#efa8c1] bg-[#fff8fb]/88 shadow-[inset_20px_0_35px_rgba(151,75,104,.06),inset_-20px_0_35px_rgba(151,75,104,.06),0_30px_60px_rgba(89,45,63,.12)]">
        <KawaiiWallpaper opacity="0.16" />

        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [-7, -2, -7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className={`absolute right-[7%] top-[6%] z-30 ${
            mobile
              ? "text-3xl"
              : "text-5xl"
          }`}
        >
          🎀
        </motion.div>

        <Heart
          size={mobile ? 190 : 330}
          strokeWidth={0.65}
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-[#eda5bd]/33"
        />

        <motion.div
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={
            mobile
              ? "absolute inset-x-[23%] bottom-[28%] top-[12%] z-20"
              : "absolute inset-x-[29%] bottom-[27%] top-[13%] z-20"
          }
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover shadow-[0_28px_45px_rgba(69,36,51,.2)]"
          />

          <div className="absolute -bottom-3 left-1/2 h-8 w-[78%] -translate-x-1/2 rounded-[50%] bg-[#55303f]/20 blur-xl" />
        </motion.div>

        <div className="absolute inset-x-[9%] bottom-[20%]">
          <CandyShelf />
        </div>

        <div className="absolute bottom-[7%] left-[10%] right-[10%] flex items-end justify-between gap-4">
          <div>
            <p className="text-[6px] font-bold uppercase tracking-[0.16em] text-[#b1657e]">
              CURRENT CRUSH
            </p>

            <p
              className={`mt-1 font-semibold text-[#5a3d48] ${
                mobile
                  ? "text-xs"
                  : "text-sm"
              }`}
            >
              {item.name}
            </p>
          </div>

          <p className="text-lg font-semibold text-[#b85e7d]">
            ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   FEATURE TRANSITION
============================================================ */

function FloatingFeature({ item }) {
  return (
    <div className="relative h-[330px]">
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-2, 1, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 sm:w-[265px]"
      >
        <div className="absolute -inset-12 rounded-[48%] border-[15px] border-[#fff8fb]/55" />

        <img
          src={item.image}
          alt={item.name}
          className="relative z-20 aspect-[4/5] w-full object-cover shadow-[0_28px_45px_rgba(89,42,61,.2)]"
        />

        <div className="absolute -right-3 -top-3 z-30 rotate-3 bg-[#fff0a5] px-3 py-2 shadow-md">
          <p className="text-[6px] font-bold uppercase tracking-[0.14em] text-[#80672e]">
            she likes this ♡
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   TREASURE TRAIL
============================================================ */

function TreasureMoment({
  item,
  index,
}) {
  const left = index % 2 === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.65,
      }}
      className="relative min-h-[500px] sm:min-h-[620px]"
    >
      {/* little dot on trail */}
      <div className="absolute left-1/2 top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#fff8fb] bg-[#d97196] shadow-[0_0_0_6px_rgba(217,113,150,.12)] lg:left-[52%]" />

      {/* PRODUCT */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.025,
          rotate:
            left ? -1.5 : 1.5,
        }}
        className={`absolute top-1/2 w-[48%] -translate-y-1/2 sm:w-[32%] lg:w-[26%] ${
          left
            ? "left-[3%] lg:left-[11%]"
            : "right-[3%] lg:right-[10%]"
        }`}
      >
        <img
          src={item.image}
          alt={item.name}
          className="aspect-[4/5] w-full object-cover shadow-[0_30px_42px_rgba(68,36,51,.19)]"
        />

        <div className="absolute -bottom-3 left-1/2 h-9 w-[74%] -translate-x-1/2 rounded-[50%] bg-[#4c2d39]/18 blur-xl" />

        <div className="absolute -right-3 -top-3 rotate-3 bg-[#fff0a7] px-2.5 py-1.5 shadow-sm">
          <p className="text-[5px] font-bold uppercase tracking-[0.14em] text-[#82672f]">
            {item.badge}
          </p>
        </div>
      </motion.div>

      {/* COPY */}
      <div
        className={`absolute top-1/2 w-[43%] -translate-y-1/2 sm:w-[38%] lg:w-[31%] ${
          left
            ? "right-[2%] lg:right-[10%]"
            : "left-[2%] lg:left-[10%]"
        }`}
      >
        <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#b46b84]">
          FIND {String(index + 1).padStart(2, "0")}
        </p>

        <p className="editorial-font mt-3 text-2xl italic leading-[1] text-[#623e4b] sm:text-4xl">
          {item.name}
        </p>

        <p className="mt-3 text-[9px] text-[#957782]">
          {item.type}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <p className="text-xl font-semibold text-[#b85e7d]">
            ${item.price}
          </p>

          <Link
            to="/shop?category=collectibles"
            className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#925368]"
          >
            shop similar ↗
          </Link>
        </div>
      </div>

      {/* decorative accent */}
      {index % 2 === 0 ? (
        <motion.div
          animate={{
            rotate: [-7, 5, -7],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute right-[4%] top-[12%] text-4xl opacity-35"
        >
          🎀
        </motion.div>
      ) : (
        <Heart
          size={50}
          strokeWidth={0.8}
          className="absolute left-[4%] top-[12%] text-[#eca8bf]/40"
        />
      )}

      <div className="absolute inset-x-[4%] bottom-0">
        <CandyShelf />
      </div>
    </motion.article>
  );
}

/* ============================================================
   SHELF
============================================================ */

function CandyShelf() {
  return (
    <div className="relative h-[26px]">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-white shadow-[0_0_9px_rgba(255,255,255,.9)]" />

      <div className="absolute inset-x-[5%] top-[4px] h-[4px] bg-[#ff9fc0] shadow-[0_0_17px_rgba(255,130,173,.75)]" />

      <div className="absolute inset-x-0 top-[7px] h-[14px] bg-gradient-to-b from-[#f4c2d4] via-[#d482a0] to-[#a25d77]" />

      <div className="absolute inset-x-0 top-[20px] h-[4px] bg-[#794659]" />

      <div className="absolute inset-x-[5%] top-[19px] h-8 bg-[#6d3a50]/15 blur-xl" />
    </div>
  );
}

/* ============================================================
   CAT MOMENT
============================================================ */

function CatPeek() {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="absolute bottom-[-65px] right-[4%] h-[315px] w-[380px]"
    >
      <div className="absolute left-[45px] top-[10px] h-[105px] w-[105px] rotate-[-24deg] rounded-[35%_70%_20%_70%] bg-[#fffdfc]" />

      <div className="absolute right-[45px] top-[10px] h-[105px] w-[105px] rotate-[24deg] rounded-[70%_35%_70%_20%] bg-[#fffdfc]" />

      <div className="absolute inset-x-[28px] bottom-0 top-[48px] rounded-[48%] bg-[#fffdfc] shadow-[0_25px_50px_rgba(93,45,65,.12)]">
        <div className="absolute left-[92px] top-[110px] h-[15px] w-[10px] rounded-full bg-[#583845]" />
        <div className="absolute right-[92px] top-[110px] h-[15px] w-[10px] rounded-full bg-[#583845]" />

        <div className="absolute left-1/2 top-[143px] h-[9px] w-[13px] -translate-x-1/2 rounded-full bg-[#efc74e]" />

        <Whiskers side="left" />
        <Whiskers side="right" />
      </div>
    </motion.div>
  );
}

function Whiskers({ side }) {
  const left = side === "left";

  return (
    <>
      <span
        className={`absolute top-[130px] h-px w-[68px] bg-[#b88799] ${
          left
            ? "left-[25px] -rotate-6"
            : "right-[25px] rotate-6"
        }`}
      />
      <span
        className={`absolute top-[148px] h-px w-[72px] bg-[#b88799] ${
          left
            ? "left-[20px]"
            : "right-[20px]"
        }`}
      />
      <span
        className={`absolute top-[166px] h-px w-[68px] bg-[#b88799] ${
          left
            ? "left-[25px] rotate-6"
            : "right-[25px] -rotate-6"
        }`}
      />
    </>
  );
}

/* ============================================================
   WALLPAPER
============================================================ */

function KawaiiWallpaper({
  opacity = "0.18",
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage:
          "radial-gradient(#db7d9e 1.1px, transparent 1.1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

export default Collectors;
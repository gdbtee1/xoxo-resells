import {
  ArrowUpRight,
  Camera,
  Cherry,
  Heart,
  Home,
  Search,
  Shirt,
  Sparkles,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Link,
  useSearchParams,
} from "react-router-dom";

import {
  useMemo,
  useState,
} from "react";

import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import XoxoPageFrame from "../components/experience/XoxoPageFrame";

import products from "../data/products";

const rooms = [
  {
    value: "all",
    label: "The Whole House",
    short: "All",
    icon: Heart,
    number: "00",
  },
  {
    value: "closet",
    label: "The Closet Room",
    short: "Closet",
    icon: Shirt,
    number: "01",
  },
  {
    value: "tech",
    label: "The Tech Vanity",
    short: "Tech",
    icon: Camera,
    number: "02",
  },
  {
    value: "home",
    label: "The Home Shelf",
    short: "Home",
    icon: Home,
    number: "03",
  },
  {
    value: "collectibles",
    label: "Collector Cabinet",
    short: "Collect",
    icon: Cherry,
    number: "04",
  },
];

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "all";

  const [category, setCategory] =
    useState(initialCategory);

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (product.sold) return false;

      const categoryMatches =
        category === "all" ||
        product.category === category;

      const searchMatches =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.categoryLabel
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatches && searchMatches;
    });
  }, [category, search]);

  function selectRoom(value) {
    setCategory(value);

    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: value,
      });
    }
  }

  return (
    <XoxoPageFrame>
      <main className="min-h-screen bg-[#fffaf8]">
        <AnnouncementBar />
        <Navbar />

        {/* ENTRY HALL */}
        <section className="relative overflow-hidden border-b border-[#eddce2]">
          <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#f5d8e3]/55 blur-[110px]" />

          <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#f8e9ac]/20 blur-[100px]" />

          <div className="site-container relative z-10 pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#c36d89]"
                  />

                  <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#b66780]">
                    welcome inside
                  </span>
                </div>

                <h1 className="editorial-font mt-4 text-[clamp(4.7rem,10vw,8.5rem)] font-medium italic leading-[0.8] tracking-[-0.065em] text-[#563a45]">
                  the xoxo
                  <span className="block pl-[8%] text-[#c76f8d]">
                    house.
                  </span>
                </h1>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-[#886e79]">
                  Every room holds something different.
                  Clothes. Cameras. Tiny treasures.
                  Things nobody came here looking for
                  and somehow leave wanting.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px w-12 bg-[#d6a4b5]" />

                  <span className="editorial-font text-lg italic text-[#ac6b82]">
                    wander around ♡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROOM DIRECTORY */}
        <section className="sticky top-[70px] z-40 border-b border-[#ebd9e0] bg-[#fffaf8]/91 backdrop-blur-xl lg:top-[78px]">
          <div className="site-container">
            <div className="no-scrollbar flex gap-2 overflow-x-auto py-3">
              {rooms.map(
                ({
                  value,
                  short,
                  icon: Icon,
                  number,
                }) => (
                  <button
                    key={value}
                    onClick={() =>
                      selectRoom(value)
                    }
                    className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 transition duration-300 ${
                      category === value
                        ? "border-[#d796ab] bg-[#f1c3d2] text-[#65414f]"
                        : "border-[#ead9df] bg-white/70 text-[#80616e] hover:bg-[#faeaf0]"
                    }`}
                  >
                    <span className="text-[7px] font-bold tracking-[0.16em] opacity-60">
                      {number}
                    </span>

                    <Icon
                      size={13}
                      strokeWidth={1.5}
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.15em]">
                      {short}
                    </span>
                  </button>
                )
              )}

              <div className="ml-auto hidden items-center sm:flex">
                <div className="relative">
                  <Search
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b1778c]"
                  />

                  <input
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                    placeholder="find something..."
                    className="w-48 rounded-full border border-[#ead8df] bg-white px-4 py-2.5 pl-9 text-[10px] outline-none transition focus:border-[#d58ca5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOBILE SEARCH */}
        <div className="site-container pt-5 sm:hidden">
          <div className="relative">
            <Search
              size={14}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#af7187]"
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="search the house..."
              className="w-full rounded-full border border-[#ead8df] bg-white px-5 py-4 pl-11 text-xs outline-none focus:border-[#d58ca5]"
            />
          </div>
        </div>

        {/* THE ACTUAL SHOP WORLD */}
        <section className="relative py-8 sm:py-12 lg:py-16">
          <div className="site-container">
            {/* ROOM TITLE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="mb-8 flex items-end justify-between gap-4"
              >
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#bf708a]">
                    currently browsing
                  </p>

                  <h2 className="editorial-font mt-2 text-4xl italic text-[#593b47] sm:text-5xl">
                    {
                      rooms.find(
                        (room) =>
                          room.value ===
                          category
                      )?.label
                    }
                  </h2>
                </div>

                <p className="hidden text-[8px] uppercase tracking-[0.17em] text-[#a68793] sm:block">
                  {filtered.length} treasures inside
                </p>
              </motion.div>
            </AnimatePresence>

            {filtered.length > 0 ? (
              <>
                {/* DESKTOP CURIO CABINET */}
                <div className="hidden lg:block">
                  <div className="rounded-[3.2rem] border border-[#dfbdc9] bg-[#f2d9e2] p-4 shadow-[0_40px_100px_rgba(103,57,74,.10)]">
                    {/* CABINET TOP */}
                    <div className="flex items-center justify-between px-5 pb-4 pt-2">
                      <div>
                        <p className="editorial-font text-xl italic text-[#785260]">
                          xoxo's cabinet
                        </p>

                        <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#b46d84]">
                          everything deserves its own little shelf
                        </p>
                      </div>

                      <span className="text-2xl text-[#bd7088]">
                        ♡
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-3">
                      {filtered.map(
                        (
                          product,
                          index
                        ) => (
                          <CabinetProduct
                            key={product.id}
                            product={
                              product
                            }
                            index={index}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* MOBILE XOXO HALLWAY */}
                <div className="relative lg:hidden">
                  {/* central guide line */}
                  <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#e8bdcc] to-transparent" />

                  <div className="space-y-8">
                    {filtered.map(
                      (
                        product,
                        index
                      ) => (
                        <MobileTreasure
                          key={product.id}
                          product={
                            product
                          }
                          index={index}
                        />
                      )
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="py-24 text-center">
                <p className="editorial-font text-4xl italic text-[#be7089]">
                  nothing hiding here ♡
                </p>

                <p className="mt-3 text-xs text-[#917580]">
                  Try another room.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* EXIT NOTE */}
        <section className="border-t border-[#ead8df] py-12">
          <div className="site-container flex flex-col items-center text-center">
            <Heart
              size={17}
              className="fill-[#f3c7d5] text-[#bf7189]"
            />

            <p className="editorial-font mt-3 max-w-xl text-2xl italic leading-tight text-[#74505e] sm:text-3xl">
              you don't have to need it.
              <br />
              you just have to love it.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </XoxoPageFrame>
  );
}

function CabinetProduct({
  product,
  index,
}) {
  const large =
    index % 5 === 0 ||
    index % 7 === 0;

  const widthClass = large
    ? "col-span-6"
    : "col-span-3";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
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
        duration: 0.5,
        delay:
          (index % 4) * 0.06,
      }}
      className={`${widthClass}`}
    >
      <Link
        to={`/product/${product.slug}`}
        className="group relative block overflow-hidden rounded-[2.2rem] border border-white/70 bg-[#fffaf8]/85 p-2 backdrop-blur transition duration-500 hover:-translate-y-1"
      >
        <div className="relative overflow-hidden rounded-[1.7rem]">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
              large
                ? "aspect-[16/11]"
                : "aspect-[4/5]"
            }`}
          />

          <div className="absolute left-3 top-3 rounded-full bg-[#fffaf8]/88 px-3 py-1.5 backdrop-blur">
            <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#ae637b]">
              {product.badge}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 px-2 pb-2 pt-4">
          <div>
            <p className="editorial-font text-xl italic leading-tight text-[#5b3d48]">
              {product.name}
            </p>

            <p className="mt-1 text-[8px] text-[#9c7d88]">
              {product.categoryLabel}
            </p>
          </div>

          <p className="editorial-font shrink-0 text-xl italic text-[#a05d74]">
            ${product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

function MobileTreasure({
  product,
  index,
}) {
  const even =
    index % 2 === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: even
          ? -25
          : 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`relative w-[87%] ${
        even
          ? "mr-auto"
          : "ml-auto"
      }`}
    >
      {/* hallway connector */}
      <div
        className={`absolute top-10 h-px w-[8%] bg-[#d99bb0] ${
          even
            ? "-right-[8%]"
            : "-left-[8%]"
        }`}
      />

      <Link
        to={`/product/${product.slug}`}
        className="group block overflow-hidden rounded-[2rem] border border-[#ecd8df] bg-[#fffdfb] p-2 shadow-[0_18px_45px_rgba(101,55,71,.08)]"
      >
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/5] w-full object-cover"
          />

          <div className="absolute left-3 top-3 rounded-full bg-[#fffaf8]/88 px-3 py-1.5 backdrop-blur">
            <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#ae637b]">
              {product.badge}
            </p>
          </div>

          <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/88 backdrop-blur">
            <Heart
              size={14}
              strokeWidth={1.4}
              className="text-[#b76782]"
            />
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 px-2 pb-2 pt-4">
          <div>
            <p className="editorial-font text-[1.35rem] italic leading-tight text-[#5a3c47]">
              {product.name}
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#a1808c]">
              {product.categoryLabel}
            </p>
          </div>

          <p className="editorial-font text-xl italic text-[#a05d74]">
            ${product.price}
          </p>
        </div>
      </Link>

      <div
        className={`mt-2 flex ${
          even
            ? "justify-start pl-4"
            : "justify-end pr-4"
        }`}
      >
        <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#bd748c]">
          room find {String(index + 1).padStart(2, "0")} ♡
        </span>
      </div>
    </motion.article>
  );
}

export default Shop;
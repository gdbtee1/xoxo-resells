import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useCart } from "../../context/CartContext";

function XoxoCat({ compact = false }) {
  return (
    <div
      className={`relative shrink-0 ${
        compact ? "h-10 w-11" : "h-12 w-14"
      }`}
    >
      <div className="absolute left-[5px] top-[2px] h-5 w-5 rotate-[-18deg] rounded-[75%_20%_58%_42%] bg-[#fffdfb] shadow-sm" />

      <div className="absolute right-[5px] top-[2px] h-5 w-5 rotate-[18deg] rounded-[20%_75%_42%_58%] bg-[#fffdfb] shadow-sm" />

      <div className="absolute bottom-0 left-1/2 h-[34px] w-[45px] -translate-x-1/2 rounded-[48%] border border-[#ead4dc] bg-[#fffdfb] shadow-[0_8px_18px_rgba(103,64,79,.08)]">
        <span className="absolute left-[12px] top-[16px] h-[3px] w-[3px] rounded-full bg-[#6c4855]" />
        <span className="absolute right-[12px] top-[16px] h-[3px] w-[3px] rounded-full bg-[#6c4855]" />

        <span className="absolute left-1/2 top-[20px] h-[3px] w-[4px] -translate-x-1/2 rounded-full bg-[#dfb953]" />

        <span className="absolute left-[-6px] top-[14px] h-px w-4 rotate-[8deg] bg-[#ba909f]" />
        <span className="absolute left-[-6px] top-[21px] h-px w-4 rotate-[-5deg] bg-[#ba909f]" />

        <span className="absolute right-[-6px] top-[14px] h-px w-4 rotate-[-8deg] bg-[#ba909f]" />
        <span className="absolute right-[-6px] top-[21px] h-px w-4 rotate-[5deg] bg-[#ba909f]" />
      </div>

      <div className="absolute right-[-1px] top-[2px] z-20">
        <div className="relative h-5 w-8">
          <div className="absolute left-0 top-1 h-4 w-4 rotate-[-18deg] rounded-[75%_35%_70%_35%] bg-[#d97798]" />

          <div className="absolute right-0 top-1 h-4 w-4 rotate-[18deg] rounded-[35%_75%_35%_70%] bg-[#d97798]" />

          <div className="absolute left-1/2 top-[6px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#b95b7a]" />
        </div>
      </div>

      <motion.div
        animate={{
          rotate: [-14, 18, -14],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 1.7,
          ease: "easeInOut",
        }}
        className="absolute -right-[9px] bottom-[4px] z-30 origin-bottom-left"
      >
        <div className="relative h-6 w-5 rounded-full border border-[#ead4dc] bg-[#fffdfb] shadow-sm">
          <span className="absolute left-[4px] top-[3px] h-1 w-1 rounded-full bg-[#f2b8ca]" />
          <span className="absolute right-[4px] top-[3px] h-1 w-1 rounded-full bg-[#f2b8ca]" />
        </div>
      </motion.div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navItems = [
    ["New", "/shop"],
    ["Closet", "/closet"],
    ["Tech", "/tech"],
    ["Collect", "/collectors"],
    ["Live", "/live"],
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#ead8df]/80 bg-[#fffaf8]/88 shadow-[0_10px_30px_rgba(94,56,70,.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#fffaf8]/70 backdrop-blur-md"
        }`}
      >
        <div className="site-container flex h-[70px] items-center justify-between lg:h-[78px]">
          <Link
            to="/"
            className="group flex items-center gap-2.5"
          >
            <XoxoCat />

            <div className="relative">
              <div className="flex items-end gap-1.5">
                <span className="editorial-font text-[1.95rem] font-medium italic leading-none tracking-[-0.055em] text-[#75495a] transition group-hover:text-[#c86e8c]">
                  xoxo
                </span>

                <span className="mb-[2px] text-[7px] font-bold uppercase tracking-[0.22em] text-[#cc7894]">
                  resells
                </span>
              </div>

              <span className="absolute -bottom-[6px] left-[3px] h-px w-0 bg-[#da8ba4] transition-all duration-300 group-hover:w-[68px]" />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className="group relative rounded-full px-4 py-2 text-[10px] font-semibold tracking-[0.04em] text-[#6f5560] transition hover:bg-[#f8e7ed]"
              >
                {label}

                <span className="absolute bottom-[4px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#dd8ca7] transition-all duration-300 group-hover:w-4" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              to="/shop"
              aria-label="Search shop"
              className="hidden h-10 w-10 place-items-center rounded-full text-[#644953] transition hover:bg-[#f9e8ee] sm:grid"
            >
              <Search size={17} strokeWidth={1.6} />
            </Link>

            <Link
              to="/shop"
              aria-label="Favorites"
              className="hidden h-10 w-10 place-items-center rounded-full text-[#644953] transition hover:bg-[#f9e8ee] sm:grid"
            >
              <Heart size={17} strokeWidth={1.6} />
            </Link>

            <Link
              to="/cart"
              aria-label="Shopping bag"
              className="relative grid h-10 w-10 place-items-center rounded-full bg-[#f2c3d2] text-[#724657] transition duration-300 hover:-translate-y-0.5 hover:bg-[#eab3c5]"
            >
              <ShoppingBag size={17} strokeWidth={1.6} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#b65e7b] px-1 text-[8px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full text-[#644953] transition hover:bg-[#f9e8ee] lg:hidden"
            >
              <Menu size={20} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
          className={`absolute inset-0 bg-[#54303d]/28 backdrop-blur-md transition duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[92%] max-w-[410px] flex-col bg-[#fffaf8] transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#efdee4] px-5 py-5">
            <div className="flex items-center gap-3">
              <XoxoCat compact />

              <div>
                <p className="editorial-font text-2xl italic leading-none text-[#75495a]">
                  xoxo
                </p>

                <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#ca7792]">
                  pick a world
                </p>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#ead7df] bg-white"
            >
              <X size={17} strokeWidth={1.5} />
            </button>
          </div>

          <div className="px-6 py-6">
            {[
              ["01", "new treasures", "/shop"],
              ["02", "the pink closet", "/closet"],
              ["03", "cute tech", "/tech"],
              ["04", "collector shelf", "/collectors"],
              ["05", "xoxo live", "/live"],
              ["06", "her edit", "/about"],
            ].map(([number, label, href]) => (
              <Link
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-[#efdee4] py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[8px] font-bold tracking-[0.18em] text-[#c37a92]">
                    {number}
                  </span>

                  <span className="editorial-font text-[1.55rem] italic text-[#583b46] transition group-hover:translate-x-1 group-hover:text-[#bf6886]">
                    {label}
                  </span>
                </div>

                <span className="text-[#c47b94]">↗</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto p-5">
            <div className="rounded-[2rem] bg-[#f5dde5] p-5">
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#b86983]">
                xoxo says
              </p>

              <p className="editorial-font mt-2 text-2xl italic leading-tight text-[#67414f]">
                go look around. she found things.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
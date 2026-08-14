import { Mail, Music2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="overflow-hidden bg-[#24151d] text-white">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto]">
          <div>
            <Link
              to="/"
              className="display-font text-4xl text-[#ff9fc5]"
            >
              XOXO Resells
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Curating your lifestyle, one cute find at a time.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
              <Heart
                size={14}
                className="fill-[#ff9fc5] text-[#ff9fc5]"
              />
              curated with love
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9fc5]">
              Shop
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <Link
                to="/shop"
                className="transition hover:text-[#ff9fc5]"
              >
                All finds
              </Link>

              <Link
                to="/shop?category=closet"
                className="transition hover:text-[#ff9fc5]"
              >
                Pink Closet
              </Link>

              <Link
                to="/shop?category=tech"
                className="transition hover:text-[#ff9fc5]"
              >
                Cute Tech
              </Link>

              <Link
                to="/shop?category=home"
                className="transition hover:text-[#ff9fc5]"
              >
                Home & Lifestyle
              </Link>

              <Link
                to="/shop?category=collectibles"
                className="transition hover:text-[#ff9fc5]"
              >
                Collector Corner
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9fc5]">
              Follow
            </p>

            <div className="mt-4 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[11px] font-black transition hover:border-[#ff9fc5] hover:bg-[#ff9fc5] hover:text-[#24151d]"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-[#ff9fc5] hover:bg-[#ff9fc5] hover:text-[#24151d]"
              >
                <Music2 size={18} />
              </a>

              <a
                href="mailto:hello@xoxoresells.com"
                aria-label="Email"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-[#ff9fc5] hover:bg-[#ff9fc5] hover:text-[#24151d]"
              >
                <Mail size={18} />
              </a>
            </div>

            <p className="mt-4 max-w-[180px] text-xs leading-5 text-white/45">
              Follow the drops before somebody else grabs your favorite.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 XOXO Resells.</p>

          <p>One cute find at a time ♡</p>
        </div>
      </div>

      <div className="block-font translate-y-[18%] whitespace-nowrap text-center text-[22vw] font-black uppercase leading-[0.65] tracking-[-0.09em] text-[#ff9fc5]">
        XOXO
      </div>
    </footer>
  );
}

export default Footer;
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";

import products from "../data/products";

function LatestDrop() {
  const latest = products.filter((product) => !product.sold).slice(0, 4);

  const sceneRef = useRef(null);

  function handlePointerMove(event) {
    const scene = sceneRef.current;
    if (!scene) return;

    const rect = scene.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    scene.style.setProperty("--mx", x.toFixed(3));
    scene.style.setProperty("--my", y.toFixed(3));
  }

  function resetPointer() {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.style.setProperty("--mx", "0");
    scene.style.setProperty("--my", "0");
  }

  return (
    <section
      id="latest"
      className="relative overflow-hidden bg-[#fffaf8] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#f7dce5]/55 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#f5e7aa]/30 blur-[100px]" />

      <div className="site-container relative z-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Heart
                size={13}
                strokeWidth={1.4}
                className="fill-[#f5c7d5] text-[#c97691]"
              />

              <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#b86a83]">
                just dropped
              </p>
            </div>

            <h2 className="editorial-font mt-4 max-w-3xl text-[clamp(3.9rem,8vw,7.3rem)] font-medium italic leading-[0.86] tracking-[-0.055em] text-[#563a45]">
              she came back
              <span className="block pl-[9%] text-[#cb7491]">
                with these.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-3">
            <p className="text-sm leading-7 text-[#856d76]">
              No giant inventory dump. Just a few pieces worth stopping for.
            </p>

            <Link
              to="/shop"
              className="mt-4 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.19em] text-[#a76178]"
            >
              see everything
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* DESKTOP STYLING TABLE */}
        <div
          ref={sceneRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          className="relative mt-12 hidden min-h-[780px] lg:block"
          style={{
            "--mx": "0",
            "--my": "0",
          }}
        >
          {/* background paper */}
          <div className="absolute inset-[3%_2%_5%_2%] rounded-[4rem] border border-[#eedde3] bg-[#f9ecef]" />

          {/* handwritten top note */}
          <motion.div
            initial={{ opacity: 0, rotate: -7 }}
            whileInView={{ opacity: 1, rotate: -4 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="absolute left-[7%] top-[7%] z-30"
          >
            <p className="editorial-font text-3xl italic text-[#a8647b]">
              this week's little haul ♡
            </p>
          </motion.div>

          {/* product 1 */}
          <motion.article
            initial={{ opacity: 0, y: 40, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="absolute left-[6%] top-[19%] z-20 w-[24%]"
            style={{
              x: "calc(var(--mx) * -12px)",
              y: "calc(var(--my) * -8px)",
            }}
          >
            <ProductPolaroid product={latest[0]} />
          </motion.article>

          {/* product 2 */}
          <motion.article
            initial={{ opacity: 0, y: 60, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="absolute left-[32%] top-[34%] z-30 w-[22%]"
            style={{
              x: "calc(var(--mx) * 16px)",
              y: "calc(var(--my) * -10px)",
            }}
          >
            <ProductPolaroid product={latest[1]} compact />
          </motion.article>

          {/* product 3 */}
          <motion.article
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="absolute right-[18%] top-[13%] z-20 w-[25%]"
            style={{
              x: "calc(var(--mx) * 8px)",
              y: "calc(var(--my) * 12px)",
            }}
          >
            <ProductPolaroid product={latest[2]} />
          </motion.article>

          {/* product 4 */}
          <motion.article
            initial={{ opacity: 0, y: 60, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="absolute bottom-[8%] right-[5%] z-30 w-[21%]"
            style={{
              x: "calc(var(--mx) * -14px)",
              y: "calc(var(--my) * 7px)",
            }}
          >
            <ProductPolaroid product={latest[3]} compact />
          </motion.article>

          {/* decorative notes */}
          <div className="absolute bottom-[18%] left-[12%] z-30 rotate-[-6deg] rounded-full bg-[#f6eaa6] px-5 py-3 text-[8px] font-bold uppercase tracking-[0.17em] text-[#75642e] shadow-sm">
            literally one left ♡
          </div>

          <div className="absolute right-[7%] top-[41%] z-30">
            <Sparkles
              size={26}
              strokeWidth={1.2}
              className="text-[#c97b96]"
            />
          </div>

          <div className="absolute bottom-[8%] left-[39%] z-30 max-w-[220px]">
            <p className="editorial-font rotate-[3deg] text-2xl italic leading-tight text-[#a05f76]">
              the kind of finds you text somebody about.
            </p>
          </div>

          {/* tiny shop link */}
          <Link
            to="/shop"
            className="absolute bottom-[7%] left-[7%] z-40 inline-flex items-center gap-2 border-b border-[#c97b96] pb-1 text-[8px] font-bold uppercase tracking-[0.19em] text-[#9e5b72]"
          >
            shop the whole drop
            <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* MOBILE SWIPEABLE STACK */}
        <div className="lg:hidden">
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6">
            {latest.map((product, index) => (
              <div
                key={product.id}
                className="w-[78vw] shrink-0 snap-center"
              >
                <div
                  className={`transition ${
                    index % 2 === 0
                      ? "rotate-[-1.5deg]"
                      : "rotate-[1.5deg]"
                  }`}
                >
                  <ProductPolaroid
                    product={product}
                    mobile
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-1 flex items-center justify-between">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#a98391]">
              swipe the haul →
            </p>

            <Link
              to="/shop"
              className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9d5e74]"
            >
              shop all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPolaroid({
  product,
  compact = false,
  mobile = false,
}) {
  if (!product) return null;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block rounded-[2rem] bg-[#fffdfb] p-2.5 shadow-[0_28px_60px_rgba(85,45,60,.12)] sm:p-3"
    >
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
            compact
              ? "aspect-[1/1.18]"
              : mobile
              ? "aspect-[4/5]"
              : "aspect-[4/5]"
          }`}
        />

        <button
          type="button"
          onClick={(event) => event.preventDefault()}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-[#fffaf8]/90 backdrop-blur"
        >
          <Heart
            size={14}
            strokeWidth={1.4}
            className="text-[#a9647a]"
          />
        </button>
      </div>

      <div className="px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#bf718a]">
              {product.badge}
            </p>

            <p className="editorial-font mt-1 text-xl italic leading-tight text-[#593b46]">
              {product.name}
            </p>
          </div>

          <p className="editorial-font shrink-0 text-lg italic text-[#9f5c73]">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default LatestDrop;
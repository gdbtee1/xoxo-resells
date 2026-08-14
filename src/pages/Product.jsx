import {
  ArrowLeft,
  Check,
  Heart,
  PackageCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/product/ProductCard";
import ProductBadge from "../components/product/ProductBadge";

import products from "../data/products";
import { useCart } from "../context/CartContext";

function Product() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#fff8fb] p-6 text-center">
        <div>
          <p className="display-font text-5xl text-[#ff4f9a]">
            she's missing ♡
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-block rounded-full bg-[#24151d] px-6 py-4 text-sm font-bold text-white"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 3);

  return (
    <main className="bg-[#fff8fb]">
      <AnnouncementBar />
      <Navbar />

      <section className="py-6 sm:py-10">
        <div className="site-container">
          <Link
            to="/shop"
            className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em]"
          >
            <ArrowLeft size={15} />
            Back to shop
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <div
                className="relative overflow-hidden rounded-[2rem]"
                style={{ backgroundColor: product.accent }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`aspect-[4/5] w-full object-cover ${
                    product.sold ? "grayscale" : ""
                  }`}
                />

                <div className="absolute left-4 top-4">
                  <ProductBadge>{product.badge}</ProductBadge>
                </div>

                <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            <div className="lg:py-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4f9a]">
                {product.categoryLabel}
              </p>

              <h1 className="block-font mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-2xl font-black">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-lg text-[#9d8993] line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#755f6a]">
                {product.description}
              </p>

              <div className="mt-8 rounded-[1.7rem] border border-pink-200 bg-white p-5">
                <p className="display-font text-2xl text-[#ff4f9a]">
                  the tea ♡
                </p>

                <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-[#9c8791]">
                      Condition
                    </p>
                    <p className="mt-1 font-bold">
                      {product.condition}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9c8791]">
                      Availability
                    </p>
                    <p className="mt-1 font-bold">
                      {product.sold
                        ? "Sold"
                        : product.quantity === 1
                        ? "Literally 1"
                        : `${product.quantity} available`}
                    </p>
                  </div>

                  {product.tested !== null && (
                    <div>
                      <p className="text-xs text-[#9c8791]">
                        Tested
                      </p>
                      <p className="mt-1 flex items-center gap-1 font-bold">
                        <Check size={14} />
                        Yes
                      </p>
                    </div>
                  )}

                  <div>
                    <p className="text-xs text-[#9c8791]">
                      Ships
                    </p>
                    <p className="mt-1 font-bold">
                      1–2 business days
                    </p>
                  </div>
                </div>
              </div>

              <button
                disabled={product.sold}
                onClick={() => addToCart(product)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#24151d] px-6 py-5 text-xs font-black uppercase tracking-[0.15em] text-white disabled:bg-[#9c8791]"
              >
                <ShoppingBag size={17} />
                {product.sold ? "She's gone ♡" : "Add to bag ♡"}
              </button>

              {!product.sold && product.quantity <= 2 && (
                <p className="mt-3 text-center text-xs font-bold text-[#ff4f9a]">
                  once she's gone, she's gone.
                </p>
              )}

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  [PackageCheck, "Carefully packed"],
                  [Sparkles, "Curator approved"],
                  [Heart, "Tiny quantities"],
                ].map(([Icon, text]) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 rounded-2xl border border-pink-100 bg-white p-3 text-xs font-bold"
                  >
                    <Icon size={16} className="text-[#ff4f9a]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="site-container">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4f9a]">
              you might also spiral over
            </p>

            <h2 className="block-font mt-2 text-4xl font-black uppercase tracking-[-0.05em]">
              More cute stuff
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

export default Product;
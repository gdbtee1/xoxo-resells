import {
  Heart,
  Plus,
} from "lucide-react";

import { Link } from "react-router-dom";

import ProductBadge from "./ProductBadge";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="group">
      <div className="relative">
        <Link
          to={`/product/${product.slug}`}
          className="block overflow-hidden rounded-[1.8rem] bg-[#f8e8ed] sm:rounded-[2.2rem]"
        >
          <img
            src={product.image}
            alt={product.name}
            className={`aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.035] ${
              product.sold ? "grayscale" : ""
            }`}
          />
        </Link>

        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
          <ProductBadge>{product.badge}</ProductBadge>
        </div>

        <button
          aria-label="Favorite"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-white/90 text-[#a66b80] backdrop-blur transition hover:bg-[#f9d9e4] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <Heart
            size={15}
            strokeWidth={1.5}
          />
        </button>

        {product.sold && (
          <div className="absolute inset-0 grid place-items-center rounded-[1.8rem] bg-[#50323c]/16">
            <span className="editorial-font -rotate-6 rounded-full border border-white bg-white/90 px-5 py-2 text-xl italic text-[#7d5363] backdrop-blur">
              already loved ♡
            </span>
          </div>
        )}
      </div>

      <div className="px-1 pt-4">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/product/${product.slug}`}>
            <p className="text-[13px] font-semibold leading-5 text-[#513a43] sm:text-sm">
              {product.name}
            </p>

            <p className="mt-1 text-[10px] text-[#9a7d88]">
              {product.categoryLabel}
            </p>
          </Link>

          <div className="shrink-0 text-right">
            <p className="editorial-font text-lg italic text-[#6e4857]">
              ${product.price}
            </p>

            {product.originalPrice && (
              <p className="text-[9px] text-[#aa929b] line-through">
                ${product.originalPrice}
              </p>
            )}
          </div>
        </div>

        {!product.sold && (
          <button
            onClick={() => addToCart(product)}
            className="mt-3 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#c56f8b] transition hover:text-[#98556d]"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f8dce5]">
              <Plus size={11} />
            </span>

            add to bag
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
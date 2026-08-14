import ProductCard from "../components/product/ProductCard";
import products from "../data/products";

function RecentlySold() {
  const soldProducts = products.filter((product) => product.sold);

  if (!soldProducts.length) return null;

  return (
    <section className="bg-[#fff8fb] py-16 sm:py-24">
      <div className="site-container">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff4f9a]">
          gone but not forgotten
        </p>

        <h2 className="block-font mt-2 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
          Recently sold ♡
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-6 text-[#806b75]">
          If you love something, don't overthink it. Most finds don't
          come back.
        </p>

        <div className="mt-8 grid max-w-sm grid-cols-1">
          {soldProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentlySold;
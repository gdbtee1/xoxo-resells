import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart();

  return (
    <main className="min-h-screen bg-[#fff8fb]">
      <AnnouncementBar />
      <Navbar />

      <section className="py-10 sm:py-16">
        <div className="site-container">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em]"
          >
            <ArrowLeft size={15} />
            Keep shopping
          </Link>

          <h1 className="block-font mt-5 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
            Your bag ♡
          </h1>

          {!cart.length ? (
            <div className="mt-10 rounded-[2rem] border border-pink-200 bg-white px-6 py-16 text-center">
              <ShoppingBag
                className="mx-auto text-[#ff4f9a]"
                size={35}
              />

              <p className="display-font mt-5 text-3xl">
                she's looking a little empty.
              </p>

              <Link
                to="/shop"
                className="mt-6 inline-block rounded-full bg-[#24151d] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white"
              >
                Find something cute
              </Link>
            </div>
          ) : (
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_360px]">
              <div className="space-y-4">
                {cart.map((item) => (
                  <article
                    key={item.id}
                    className="grid grid-cols-[100px_1fr] gap-4 rounded-[1.7rem] border border-pink-100 bg-white p-3 sm:grid-cols-[140px_1fr] sm:p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-square h-full w-full rounded-[1.2rem] object-cover"
                    />

                    <div className="flex min-w-0 flex-col">
                      <div className="flex justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold sm:text-base">
                            {item.name}
                          </p>

                          <p className="mt-1 text-xs text-[#9b818d]">
                            {item.categoryLabel}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#fff0f6]"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                        <div className="flex items-center rounded-full border border-pink-200">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.cartQuantity - 1
                              )
                            }
                            className="grid h-9 w-9 place-items-center"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="min-w-6 text-center text-xs font-bold">
                            {item.cartQuantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.cartQuantity + 1
                              )
                            }
                            className="grid h-9 w-9 place-items-center"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <span className="font-black">
                          ${item.price * item.cartQuantity}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="h-fit rounded-[2rem] bg-[#24151d] p-6 text-white lg:sticky lg:top-28">
                <p className="display-font text-3xl text-[#ff9fc5]">
                  bag summary ♡
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between text-white/65">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-white/65">
                    <span>Shipping</span>
                    <span>Calculated next</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between border-t border-white/15 pt-5 text-lg font-black">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <button className="mt-6 w-full rounded-full bg-[#ff9fc5] px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-[#24151d]">
                  Checkout
                </button>

                <p className="mt-4 text-center text-[10px] leading-5 text-white/40">
                  Demo storefront checkout. Connect Stripe or your commerce
                  backend before accepting real orders.
                </p>
              </aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Cart;
import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <main className="bg-[#fff8fb]">
      <AnnouncementBar />
      <Navbar />

      <section className="overflow-hidden py-12 sm:py-20">
        <div className="site-container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff4f9a]">
                the girl behind the finds
              </p>

              <h1 className="display-font mt-4 text-6xl leading-[0.96] sm:text-8xl">
                I find cute stuff so you don't have to.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#725f68]">
                XOXO Resells is a curated resale shop built around one
                obsession: finding things that feel special. The category
                doesn't matter nearly as much as the feeling.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#725f68]">
                Some weeks it's vintage denim. The next week it might be
                a digital camera, a novelty mug or a tiny collectible.
                Everything gets filtered through the same pink XOXO world.
              </p>

              <Link
                to="/shop"
                className="mt-8 inline-flex rounded-full bg-[#24151d] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-white"
              >
                Shop my picks ♡
              </Link>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] bg-[#ffb6d0]">
                <img
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=85"
                  alt="XOXO Resells curator"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 left-4 rotate-[-5deg] rounded-full bg-[#fff067] px-5 py-3 text-xs font-black sm:left-8">
                curator approved ♡
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ff9fc5] py-16 sm:py-20">
        <div className="site-container">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              [
                Heart,
                "If I wouldn't send it to my best friend, it doesn't make the shop.",
              ],
              [
                Sparkles,
                "Every item gets photographed and presented through the XOXO world.",
              ],
              [
                Heart,
                "Tiny quantities keep every drop unpredictable and worth checking.",
              ],
            ].map(([Icon, copy], index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-white/70 p-6 backdrop-blur"
              >
                <Icon className="text-[#ff4f9a]" />
                <p className="mt-6 text-lg font-bold leading-7">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;
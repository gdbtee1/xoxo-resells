import {
  ArrowLeft,
  ArrowUpRight,
  Heart,
  Radio,
  ShoppingBag,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import XoxoPageFrame from "../components/experience/XoxoPageFrame";

const comments = [
  "show the camera again 😭",
  "CLAIM",
  "wait I need that",
  "how much??",
];

function Live() {
  return (
    <XoxoPageFrame>
      <main className="overflow-hidden bg-[#75485b] text-white">
        <AnnouncementBar />
        <Navbar />

        <section className="relative py-10 sm:py-16">
          <div className="pointer-events-none absolute -right-10 top-10 editorial-font text-[15rem] italic text-white/[0.03]">
            live
          </div>

          <div className="site-container relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/60"
            >
              <ArrowLeft size={12} />
              xoxo house
            </Link>

            <div className="mt-9 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-[#ff9cbd]"
                  />

                  <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#efbed0]">
                    xoxo live room
                  </p>
                </div>

                <h1 className="editorial-font mt-5 text-[clamp(4.7rem,9vw,8rem)] italic leading-[0.8] tracking-[-0.06em]">
                  catch it
                  <span className="block pl-[10%] text-[#f1aec4]">
                    before it's gone.
                  </span>
                </h1>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/65">
                  Live drops, quick claims and pieces that sometimes
                  disappear before the explanation is even finished.
                </p>

                <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f0bdd0] px-6 py-4 text-[8px] font-bold uppercase tracking-[0.18em] text-[#704454]">
                  follow for next live
                  <ArrowUpRight size={12} />
                </button>
              </div>

              {/* PHONE */}
              <div className="relative mx-auto w-full max-w-[470px]">
                <div className="overflow-hidden rounded-[3rem] border-[7px] border-[#f5dce5] bg-[#26151c] shadow-[0_45px_100px_rgba(34,14,22,.3)]">
                  <div className="relative aspect-[9/16]">
                    <img
                      src="/images/curator/curator-live.jpg"
                      onError={(event) => {
                        event.currentTarget.src =
                          "/images/curator/curator-hero.jpg";
                      }}
                      alt="XOXO live curator"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#26151c]/80 via-transparent to-[#26151c]/15" />

                    <div className="absolute left-4 right-4 top-4 flex justify-between">
                      <div>
                        <p className="text-[9px] font-bold">
                          xoxo.resells
                        </p>

                        <p className="text-[7px] text-white/55">
                          214 watching
                        </p>
                      </div>

                      <div className="rounded-full bg-[#c84d74] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.16em]">
                        ● live
                      </div>
                    </div>

                    <div className="absolute bottom-[21%] left-4 space-y-2">
                      {comments.map((comment, index) => (
                        <motion.div
                          key={comment}
                          animate={{
                            opacity: [0, 1, 1, 0],
                            y: [15, 0, -5, -15],
                          }}
                          transition={{
                            duration: 6,
                            delay: index * 1.25,
                            repeat: Infinity,
                          }}
                          className="w-fit rounded-full bg-[#2c1820]/55 px-3 py-2 backdrop-blur"
                        >
                          <p className="text-[8px]">
                            {comment}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] bg-[#fffaf8]/90 p-3 text-[#603c49] backdrop-blur">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-[1rem] bg-[#f4d9e2] text-2xl">
                          📷
                        </div>

                        <div className="flex-1">
                          <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#bb6d86]">
                            currently showing
                          </p>

                          <p className="mt-1 text-[10px] font-semibold">
                            baby pink digicam
                          </p>
                        </div>

                        <p className="editorial-font text-lg italic">
                          $119
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-[14%] right-5">
                      {[0, 1, 2].map((item) => (
                        <motion.div
                          key={item}
                          animate={{
                            y: [40, -80],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: item,
                            repeat: Infinity,
                          }}
                          className="absolute bottom-0 right-0"
                        >
                          <Heart
                            size={20}
                            className="fill-[#f3abc2] text-[#f3abc2]"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    rotate: [-5, -2, -5],
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-3 -left-3 rounded-full bg-[#f5e7a6] px-4 py-2 shadow-xl"
                >
                  <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#70612e]">
                    claim fast ♡
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#eeb9cb]">
                next drop
              </p>

              <p className="editorial-font mt-2 text-3xl italic">
                date announced soon ♡
              </p>
            </div>

            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] text-white/60">
              <Radio size={13} />
              TikTok + Instagram
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </XoxoPageFrame>
  );
}

export default Live;
import { motion } from "framer-motion";

function XoxoPageFrame({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fffaf8]">
      {/* MOBILE LEFT GLOW WALL */}
      <div className="pointer-events-none fixed bottom-0 left-0 top-0 z-[80] w-[7px] sm:w-[9px] lg:w-[5px]">
        <div className="absolute inset-0 bg-[#e990ad]/75" />

        <div className="absolute -right-5 inset-y-0 w-8 bg-[#f6bfd2]/15 blur-xl" />

        <div className="absolute left-0 top-[18%] h-28 w-[2px] bg-white/80 shadow-[0_0_18px_5px_rgba(255,190,215,.75)]" />
      </div>

      {/* MOBILE RIGHT GLOW WALL */}
      <div className="pointer-events-none fixed bottom-0 right-0 top-0 z-[80] w-[7px] sm:w-[9px] lg:w-[5px]">
        <div className="absolute inset-0 bg-[#e990ad]/75" />

        <div className="absolute -left-5 inset-y-0 w-8 bg-[#f6bfd2]/15 blur-xl" />

        <div className="absolute right-0 top-[58%] h-36 w-[2px] bg-white/80 shadow-[0_0_18px_5px_rgba(255,190,215,.75)]" />
      </div>

      {/* FLOATING AMBIENT SPARKLES */}
      <motion.span
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-[13px] top-[27%] z-[81] hidden text-[11px] text-white sm:block"
      >
        ✦
      </motion.span>

      <motion.span
        animate={{
          y: [0, 12, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed right-[13px] top-[67%] z-[81] hidden text-[10px] text-white sm:block"
      >
        ♡
      </motion.span>

      {/* PAGE CONTENT */}
      <div className="relative z-10 px-[7px] sm:px-[9px] lg:px-[5px]">
        {children}
      </div>
    </div>
  );
}

export default XoxoPageFrame;
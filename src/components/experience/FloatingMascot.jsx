import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function FloatingMascot() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    mass: 0.7,
  });

  const y = useTransform(
    smoothProgress,
    [0, 1],
    ["8vh", "78vh"]
  );

  const rotate = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-8, 8, -5, 7, -3]
  );

  const scale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [0.9, 1.06, 0.94, 1]
  );

  return (
    <motion.div
      style={{
        y,
        rotate,
        scale,
      }}
      className="pointer-events-none fixed right-3 top-0 z-[70] hidden lg:block"
    >
      <div className="relative">
        <div className="relative h-[82px] w-[90px]">
          {/* ears */}
          <div className="absolute left-[10px] top-[5px] h-8 w-8 rotate-[-18deg] rounded-[70%_20%_55%_45%] bg-[#fffdfb] shadow-sm" />

          <div className="absolute right-[10px] top-[5px] h-8 w-8 rotate-[18deg] rounded-[20%_70%_45%_55%] bg-[#fffdfb] shadow-sm" />

          {/* head */}
          <div className="absolute bottom-0 left-1/2 h-[64px] w-[82px] -translate-x-1/2 rounded-[48%] border border-[#edd8df] bg-[#fffdfb] shadow-[0_15px_35px_rgba(117,66,84,.12)]">
            {/* eyes */}
            <span className="absolute left-[22px] top-[30px] h-[5px] w-[5px] rounded-full bg-[#79515f]" />

            <span className="absolute right-[22px] top-[30px] h-[5px] w-[5px] rounded-full bg-[#79515f]" />

            {/* nose */}
            <span className="absolute left-1/2 top-[34px] h-[4px] w-[6px] -translate-x-1/2 rounded-full bg-[#e7b85e]" />

            {/* whiskers */}
            <span className="absolute left-[-8px] top-[29px] h-px w-7 rotate-[8deg] bg-[#ae8996]" />
            <span className="absolute left-[-8px] top-[38px] h-px w-7 rotate-[-6deg] bg-[#ae8996]" />

            <span className="absolute right-[-8px] top-[29px] h-px w-7 rotate-[-8deg] bg-[#ae8996]" />
            <span className="absolute right-[-8px] top-[38px] h-px w-7 rotate-[6deg] bg-[#ae8996]" />
          </div>

          {/* bow */}
          <div className="absolute right-[-3px] top-[8px] z-10">
            <div className="relative h-8 w-12">
              <div className="absolute left-0 top-1 h-6 w-6 rotate-[-16deg] rounded-[70%_35%_70%_35%] bg-[#dc7598]" />

              <div className="absolute right-0 top-1 h-6 w-6 rotate-[16deg] rounded-[35%_70%_35%_70%] bg-[#dc7598]" />

              <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#bd5f80]" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-[88px] -translate-x-1/2 whitespace-nowrap rounded-full border border-[#ead5dd] bg-[#fffaf8]/90 px-3 py-2 text-[7px] font-bold uppercase tracking-[0.15em] text-[#9c5d73] backdrop-blur">
          follow me ♡
        </div>
      </div>
    </motion.div>
  );
}

export default FloatingMascot;
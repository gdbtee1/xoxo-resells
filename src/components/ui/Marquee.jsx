function Marquee({ children }) {
  return (
    <div className="overflow-hidden border-y border-[#24151d] bg-[#ff9fc5] py-4">
      <div className="block-font whitespace-nowrap text-center text-sm font-black uppercase tracking-[0.16em] sm:text-base">
        {children}
      </div>
    </div>
  );
}

export default Marquee;
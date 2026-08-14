function ProductBadge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-white/60 bg-[#fffaf8]/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.17em] text-[#9d5c73] shadow-sm backdrop-blur sm:text-[9px]">
      {children}
    </span>
  );
}

export default ProductBadge;
import {
  Camera,
  Gift,
  Heart,
  Home,
  Shirt,
} from "lucide-react";

import { Link } from "react-router-dom";

function CategoryMarquee() {
  const categories = [
    {
      icon: Shirt,
      label: "closet",
      href: "/shop?category=closet",
    },
    {
      icon: Camera,
      label: "tech",
      href: "/shop?category=tech",
    },
    {
      icon: Home,
      label: "home",
      href: "/shop?category=home",
    },
    {
      icon: Gift,
      label: "collect",
      href: "/shop?category=collectibles",
    },
  ];

  return (
    <section className="bg-[#fffaf8]">
      <div className="site-container border-y border-[#eddde3]">
        <div className="no-scrollbar flex items-center gap-3 overflow-x-auto py-5 sm:justify-center sm:gap-5">
          {categories.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              to={href}
              className="group flex shrink-0 items-center gap-3 rounded-full border border-[#ebd8df] bg-[#fffdfc] px-5 py-3 transition hover:-translate-y-0.5 hover:bg-[#fff2f6]"
            >
              <Icon
                size={14}
                strokeWidth={1.4}
                className="text-[#d97d99]"
              />

              <span className="editorial-font text-base italic text-[#654653]">
                {label}
              </span>
            </Link>
          ))}

          <div className="hidden h-8 w-px bg-[#ead9df] sm:block" />

          <Link
            to="/shop"
            className="flex shrink-0 items-center gap-2 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#af687f]"
          >
            <Heart
              size={12}
              className="fill-[#f7ccd9]"
            />
            see everything
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CategoryMarquee;
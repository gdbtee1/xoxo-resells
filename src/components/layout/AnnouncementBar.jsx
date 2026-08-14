import { Heart } from "lucide-react";

function AnnouncementBar() {
  return (
    <div className="border-b border-[#efdce2] bg-[#8b5366] text-white">
      <div className="site-container flex h-8 items-center justify-center gap-2">
        <Heart
          size={10}
          strokeWidth={1.7}
          className="fill-[#f7c9d8] text-[#f7c9d8]"
        />

        <span className="text-[9px] font-semibold uppercase tracking-[0.21em]">
          new treasures added every week
        </span>

        <Heart
          size={10}
          strokeWidth={1.7}
          className="fill-[#f7c9d8] text-[#f7c9d8]"
        />
      </div>
    </div>
  );
}

export default AnnouncementBar;
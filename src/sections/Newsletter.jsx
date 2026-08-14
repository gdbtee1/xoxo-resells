import { ArrowRight, Mail } from "lucide-react";

function Newsletter() {
  return (
    <section className="bg-[#fff067] py-14 sm:py-20">
      <div className="site-container text-center">
        <Mail className="mx-auto" size={28} />

        <h2 className="block-font mt-4 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
          Get the text,
          <br />
          babe.
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-7 text-[#625b26]">
          Drops disappear fast. Get first dibs, live-sale reminders and
          curator favorites.
        </p>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto mt-7 flex max-w-xl flex-col gap-2 rounded-[1.5rem] bg-white p-2 sm:flex-row"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="min-w-0 flex-1 rounded-xl px-4 py-4 text-sm outline-none"
          />

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#24151d] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white">
            I'm in
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
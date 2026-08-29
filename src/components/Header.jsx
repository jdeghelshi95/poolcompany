import actionPlastering from "../assets/site/action_plastering.jpg";
import workerPrep from "../assets/site/worker_prep.jpg";
import sunsetConstruction from "../assets/site/sunset_construction.jpg";

export default function Header() {
  return (
    <div className="relative min-h-[720px] flex items-center bg-[#0A0C10] overflow-hidden">
      <div className="absolute inset-0">
        <img className="hero-slide s1" src={actionPlastering} alt="Crew applying pool plaster finish" />
        <img className="hero-slide s2" src={workerPrep} alt="Crew prepping a pool surface" />
        <img className="hero-slide s3" src={sunsetConstruction} alt="Crew working a pool build at dusk" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(10,12,16,0.96) 15%, rgba(10,12,16,0.72) 52%, rgba(10,12,16,0.4) 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 w-full">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-px bg-[#33C2F0]" />
          <span className="text-[#33C2F0] text-xs font-bold tracking-[0.22em] uppercase">
            Plainfield, New Jersey
          </span>
        </div>
        <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          Every pool, resurfaced by hand.
        </h1>
        <p className="text-white/70 text-lg max-w-lg mt-6 mb-9 leading-relaxed">
          Baires Pools and Plastering applies premium PebbleTec-style finishes on-site, trowel by trowel &mdash;
          residential backyards to full commercial jobs.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:9082222803"
            className="inline-flex items-center gap-2 bg-[#33C2F0] hover:bg-[#6FDBFF] text-[#0A0C10] font-semibold text-base px-8 py-4 rounded"
          >
            Get a Free Estimate
          </a>
          <a
            href="/pics"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold text-base px-8 py-4 rounded"
          >
            See Our Work
          </a>
        </div>
      </div>
    </div>
  );
}

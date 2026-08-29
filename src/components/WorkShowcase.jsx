import actionPlastering from "../assets/site/action_plastering.jpg";
import workerPrep from "../assets/site/worker_prep.jpg";
import sunsetConstruction from "../assets/site/sunset_construction.jpg";
import commercialPool from "../assets/site/commercial_pool.jpg";

export default function WorkShowcase() {
  return (
    <div id="work" className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
      <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
        <div>
          <span className="text-[#33C2F0] font-bold text-xs tracking-[0.2em] uppercase">Our Work</span>
          <h2 className="font-display font-extrabold text-white text-2xl md:text-3xl mt-3">On site, mid-job</h2>
        </div>
        <a
          href="/pics"
          className="border border-white/30 hover:border-white/60 text-white text-sm font-semibold px-5 py-3 rounded"
        >
          Full Gallery &rarr;
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-0.5">
        <div className="relative overflow-hidden aspect-[4/5]">
          <img src={actionPlastering} alt="Crew applying pool plaster finish" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute bottom-5 left-5 text-white font-bold text-base">Hands-on craftsmanship</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="relative overflow-hidden aspect-square">
            <img src={workerPrep} alt="Crew prepping a pool surface" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-bold text-sm">Surface prep</span>
          </div>
          <div className="relative overflow-hidden aspect-square">
            <img src={sunsetConstruction} alt="Pool build at dusk" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-bold text-sm">Full renovations</span>
          </div>
        </div>
        <div className="relative overflow-hidden aspect-[4/5]">
          <img src={commercialPool} alt="Commercial apartment complex pool" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute bottom-5 left-5 text-white font-bold text-base">Commercial-scale</span>
        </div>
      </div>
    </div>
  );
}

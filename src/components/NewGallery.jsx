import React from "react";
import actionPlastering from "../assets/site/action_plastering.jpg";
import workerPrep from "../assets/site/worker_prep.jpg";
import sunsetConstruction from "../assets/site/sunset_construction.jpg";
import commercialPool from "../assets/site/commercial_pool.jpg";
import projExtra1 from "../assets/site/proj_extra1.jpg";

const data = [
  { imgelink: actionPlastering, label: "Hands-on craftsmanship" },
  { imgelink: workerPrep, label: "Surface prep" },
  { imgelink: sunsetConstruction, label: "Full renovations" },
  { imgelink: commercialPool, label: "Commercial-scale" },
  { imgelink: projExtra1, label: "Residential resurfacing" },
];

const NewGallery = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = data[activeIndex];

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden border border-white/10">
        <img
          className="h-auto w-full max-w-full object-cover md:h-[520px]"
          src={active.imgelink}
          alt={active.label}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        <span className="absolute bottom-5 left-6 text-white font-bold text-lg">{active.label}</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
        {data.map(({ imgelink, label }, index) => (
          <button
            key={label}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-lg overflow-hidden aspect-square focus:outline-none ring-2 transition-colors ${
              index === activeIndex ? "ring-[#33C2F0]" : "ring-transparent hover:ring-white/30"
            }`}
          >
            <img src={imgelink} className="w-full h-full object-cover" alt={label} />
            {index !== activeIndex && <div className="absolute inset-0 bg-black/25" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewGallery;

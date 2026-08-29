import { PhoneIcon, WrenchScrewdriverIcon, PhotoIcon } from "@heroicons/react/24/outline";

const services = [
  {
    name: "Free Estimates",
    description: "Send photos or have us out to walk the site — pricing and finish options, no pressure.",
    icon: PhoneIcon,
    href: "tel:9082222803",
    cta: "Contact Us",
  },
  {
    name: "Premium Pool Finishes",
    description: "Pebble & plaster finishes built to hold color and texture season after season.",
    icon: WrenchScrewdriverIcon,
    href: "https://wetedgetechnologies.com/",
    cta: "Finish Options",
  },
  {
    name: "Completed Projects",
    description: "Residential backyards to full apartment-complex pools, across New Jersey.",
    icon: PhotoIcon,
    href: "/pics",
    cta: "See Gallery",
  },
];

export default function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
      <div className="flex items-end justify-between mb-13 flex-wrap gap-4">
        <div>
          <span className="text-[#33C2F0] font-bold text-xs tracking-[0.2em] uppercase">What We Do</span>
          <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl mt-3 tracking-tight">
            Built for the long soak
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {services.map((service, i) => (
          <div key={service.name} className="bg-[#14171D] p-9">
            <span className="font-display text-[#33C2F0] text-sm font-bold">0{i + 1}</span>
            <h3 className="text-white font-bold text-lg mt-5 mb-2.5">{service.name}</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-5">{service.description}</p>
            <a href={service.href} className="text-[#33C2F0] hover:text-[#6FDBFF] text-sm font-bold">
              {service.cta} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

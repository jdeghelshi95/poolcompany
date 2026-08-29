import teamDavid from "../assets/site/team_david.jpg";
import teamRemberto from "../assets/site/team_remberto.jpeg";

const people = [
  {
    name: "David Eghelshi",
    role: "Owner",
    imageUrl: teamDavid,
    imagePosition: "center 22%",
    phone: "tel:9087872210",
    email: "mailto:david@bairespoolsplastering.com",
  },
  {
    name: "Remberto Baires",
    role: "Owner",
    imageUrl: teamRemberto,
    phone: "tel:9087212464",
    email: "mailto:remberto@bairespoolsplastering.com",
  },
];

export default function Team() {
  return (
    <div className="border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-px bg-[#33C2F0]" />
          <span className="text-[#33C2F0] font-bold text-xs tracking-[0.2em] uppercase">Meet The Owners</span>
        </div>
        <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl mb-12 max-w-lg">
          Two owners. On every job site.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {people.map((person) => (
            <div
              key={person.name}
              className="group relative rounded-2xl overflow-hidden bg-[#14171D] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  style={person.imagePosition ? { objectPosition: person.imagePosition } : undefined}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">{person.name}</h3>
                  <p className="text-[#33C2F0] text-xs font-bold tracking-wider uppercase mt-1.5 mb-4">
                    {person.role}
                  </p>
                  <div className="flex gap-2.5">
                    <a
                      href={person.phone}
                      aria-label={`Call ${person.name}`}
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 bg-black/40 backdrop-blur text-white hover:border-[#33C2F0] hover:text-[#33C2F0]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                    <a
                      href={person.email}
                      aria-label={`Email ${person.name}`}
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 bg-black/40 backdrop-blur text-white hover:border-[#33C2F0] hover:text-[#33C2F0]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 6l-10 7L2 6" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

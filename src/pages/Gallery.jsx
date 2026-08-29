import NewGall from "../components/NewGallery.jsx";

const Gallery = () => {
  return (
    <div className="bg-[#0A0C10] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-px bg-[#33C2F0]" />
          <span className="text-[#33C2F0] font-bold text-xs tracking-[0.2em] uppercase">Our Work</span>
        </div>
        <h1 className="font-display font-extrabold text-white text-3xl md:text-4xl mb-12">
          Completed Projects
        </h1>
        <NewGall />
      </div>
    </div>
  );
};

export default Gallery;

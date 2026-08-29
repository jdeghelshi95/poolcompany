export default function CTABand() {
  return (
    <div id="contact" className="max-w-7xl mx-auto px-6 md:px-8 py-20 flex items-center justify-between flex-wrap gap-7">
      <div>
        <h2 className="font-display font-extrabold text-white text-3xl mb-2.5 max-w-md">
          Ready to start your pool project?
        </h2>
        <p className="text-white/55 text-sm">
          713 North Ave, Plainfield, NJ 07060 &nbsp;&middot;&nbsp; info@bairespool.com
        </p>
      </div>
      <a
        href="tel:9082222803"
        className="inline-flex items-center gap-2 bg-[#33C2F0] hover:bg-[#6FDBFF] text-[#0A0C10] font-semibold text-base px-8 py-4 rounded"
      >
        Call (908) 222-2803
      </a>
    </div>
  );
}

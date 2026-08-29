import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import WorkShowcase from "../components/WorkShowcase";
import Team from "../components/Team";
import CTABand from "../components/CTABand";

export default function Home() {
  return (
    <div className="bg-[#0A0C10]">
      <Header />
      <ServicesSection />
      <WorkShowcase />
      <Team />
      <CTABand />
    </div>
  );
}

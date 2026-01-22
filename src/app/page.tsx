import Header from "@/components/brochure/Header";
import About from "@/components/brochure/About";
import Consultancy from "@/components/brochure/Consultancy";
import Services from "@/components/brochure/Services";
import GeoSeo from "@/components/brochure/GeoSeo";
import Sectors from "@/components/brochure/Sectors";
import TechStack from "@/components/brochure/TechStack";
import WhyChoose from "@/components/brochure/WhyChoose";
import Approach from "@/components/brochure/Approach";
import Graphs from "@/components/brochure/Graphs";
import Footer from "@/components/brochure/Footer";
import PartnershipModels from "@/components/brochure/PartnershipModels";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white pb-20">
      <Header />
      <div className="space-y-0">
        <Consultancy />
        <PartnershipModels />
        <Graphs />
        <Approach />
        <About />
        <Services />
        <GeoSeo />
        <Sectors />
        <TechStack />
        <WhyChoose />
      </div>
      <Footer />
    </main>
  );
}

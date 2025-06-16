
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InvestorHighlights from "@/components/InvestorHighlights";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InvestorHighlights />
      <Services />
      <TrustIndicators />
      <Footer />
    </div>
  );
};

export default Index;

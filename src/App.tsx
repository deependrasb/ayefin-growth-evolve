
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessLoans from "./pages/BusinessLoans";
import PersonalLoans from "./pages/PersonalLoans";
import HomeLoans from "./pages/HomeLoans";
import InvestmentProducts from "./pages/InvestmentProducts";
import Insurance from "./pages/Insurance";
import GoldLoans from "./pages/GoldLoans";
import InvestorRelations from "./pages/InvestorRelations";
import About from "./pages/About";
import MdDesk from "./pages/MdDesk";
import OurTeam from "./pages/OurTeam";
import OurInvestors from "./pages/OurInvestors";
import Accolades from "./pages/Accolades";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-loans" element={<BusinessLoans />} />
          <Route path="/personal-loans" element={<PersonalLoans />} />
          <Route path="/home-loans" element={<HomeLoans />} />
          <Route path="/investment-products" element={<InvestmentProducts />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/gold-loans" element={<GoldLoans />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/about" element={<About />} />
          <Route path="/md-desk" element={<MdDesk />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-investors" element={<OurInvestors />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

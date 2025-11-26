import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Procedures from "./pages/Procedures";
import Face from "./pages/procedures/Face";
import Body from "./pages/procedures/Body";
import Breast from "./pages/procedures/Breast";
import Nose from "./pages/procedures/Nose";
import TummyTuck from "./pages/procedures/TummyTuck";
import AdvancedSafeBBL from "./pages/procedures/body/AdvancedSafeBBL";
import RibCageMolding from "./pages/procedures/body/RibCageMolding";
import KFaceLift from "./pages/procedures/face/KFaceLift";
import Rhinoplasty from "./pages/procedures/nose/Rhinoplasty";
import SmartTemplateRhinoplasty from "./pages/procedures/nose/SmartTemplateRhinoplasty";
import EndoChorFaceLift from "./pages/procedures/face/EndoChorFaceLift";
import KEndoscopicDeepPlane from "./pages/procedures/face/KEndoscopicDeepPlane";
import KGlide from "./pages/procedures/breast/KGlide";
import TwirlInternalBra from "./pages/procedures/breast/TwirlInternalBra";
import SmartBRA from "./pages/procedures/breast/SmartBRA";
import VibrasatPro from "./pages/procedures/breast/VibrasatPro";
import Gallery from "./pages/Gallery";
import PatientJourney from "./pages/PatientJourney";
import LearnSurgery from "./pages/LearnSurgery";
import Contact from "./pages/Contact";
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
          <Route path="/about" element={<About />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/procedures/face" element={<Face />} />
          <Route path="/procedures/body" element={<Body />} />
          <Route path="/procedures/breast" element={<Breast />} />
          <Route path="/procedures/nose" element={<Nose />} />
          <Route path="/procedures/body/tummy-tuck" element={<TummyTuck />} />
          <Route path="/procedures/body/advanced-safe-bbl" element={<AdvancedSafeBBL />} />
          <Route path="/procedures/body/rib-cage-molding" element={<RibCageMolding />} />
          <Route path="/procedures/face/k-face-lift" element={<KFaceLift />} />
          <Route path="/procedures/face/endochor-face-lift" element={<EndoChorFaceLift />} />
          <Route path="/procedures/face/k-endoscopic-deep-plane" element={<KEndoscopicDeepPlane />} />
            <Route path="/procedures/nose/rhinoplasty" element={<Rhinoplasty />} />
            <Route path="/procedures/nose/smart-template-rhinoplasty" element={<SmartTemplateRhinoplasty />} />
            <Route path="/procedures/breast/k-glide" element={<KGlide />} />
            <Route path="/procedures/breast/twirl-internal-bra" element={<TwirlInternalBra />} />
            <Route path="/procedures/breast/smart-bra" element={<SmartBRA />} />
            <Route path="/procedures/breast/vibrasat-pro" element={<VibrasatPro />} />
            <Route path="/gallery" element={<Gallery />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/learn-surgery" element={<LearnSurgery />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

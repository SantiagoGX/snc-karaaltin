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

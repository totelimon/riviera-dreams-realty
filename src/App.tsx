import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Propiedades from "./pages/Propiedades.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import Servicios from "./pages/Servicios.tsx";
import Contacto from "./pages/Contacto.tsx";
import Agendar from "./pages/Agendar.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsAppPopup from "./components/site/WhatsAppPopup";
import ScrollToTop from "./components/site/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/agendar" element={<Agendar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

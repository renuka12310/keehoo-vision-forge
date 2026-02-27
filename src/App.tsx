import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DigiDevalaya from "./pages/DigiDevalaya";
import KeehooVenture from "./pages/KeehooVenture";
import AIKruise from "./pages/AIKruise";
import StockAsset from "./pages/StockAsset";
import DigiCounselar from "./pages/DigiCounselar";
import About from "./pages/About";
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
          <Route path="/digidevalaya" element={<DigiDevalaya />} />
          <Route path="/keehoo" element={<KeehooVenture />} />
          <Route path="/ai-kruise" element={<AIKruise />} />
          <Route path="/stock-asset" element={<StockAsset />} />
          <Route path="/digicounselar" element={<DigiCounselar />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

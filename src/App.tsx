
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShareYourStory from "./pages/ShareYourStory";
import MLAs from "./pages/MLAs";
import MembersSalaries from "./pages/MembersSalaries"; // Added import for MembersSalaries
import PageTransition3D from "./components/PageTransition3D";
import { AnimatePresence } from "framer-motion";
import { AccessibilityProvider } from "./context/AccessibilityContext";

const queryClient = new QueryClient();

// Wrapper for the routes with 3D transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition3D key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/share-your-story" element={<ShareYourStory />} />
          <Route path="/mlas" element={<MLAs />} />
          <Route path="/members-salaries" element={<MembersSalaries />} /> {/* Added route for MembersSalaries */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition3D>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessibilityProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </AccessibilityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CommandPalette from "@/components/CommandPalette";

const queryClient = new QueryClient();

const routerBasename = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded focus:border focus:border-border focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <CommandPalette />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

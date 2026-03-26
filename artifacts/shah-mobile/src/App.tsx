import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import Store from "@/pages/store";
import Gadgets from "./pages/gadgets";
import Accessories from "./pages/accessories";
import SmartDevices from "./pages/smart-devices";

import About from "@/pages/about";
import Contact from "@/pages/contact";
import ProductDetail from "@/pages/product-detail";
import Admin from "@/pages/admin";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/gadgets" component={Gadgets} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/smart-devices" component={SmartDevices} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* ✅ Base ko "/" fix kar diya */}
        <WouterRouter base="/">
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
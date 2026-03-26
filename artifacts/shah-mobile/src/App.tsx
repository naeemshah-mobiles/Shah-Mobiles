import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Store from "@/pages/store";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import ProductDetail from "@/pages/product-detail";
import Admin from "@/pages/admin";
import Accessories from "@/pages/accessories";
import Gadgets from "@/pages/gadgets";
import SmartDevices from "@/pages/smart-devices";
import NotFound from "@/pages/not-found";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Ye line Google ko batayegi ke website ka naam kya hai */}
        <title>Shah Mobiles|Sayed Naeem Hussain Shah</title>
        
        {/* Search Engine Optimization (SEO) ke liye ye lines zaroori hain */}
        <meta name="description" content="Best mobile shop in your area. Syed Naeem Hussain Shah Mobiles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

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
      <Route path="/accessories" component={Accessories} />
      <Route path="/gadgets" component={Gadgets} />
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
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

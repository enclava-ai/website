import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import SelfHosted from "@/pages/products/self-hosted";
import ManagedCloud from "@/pages/products/managed-cloud";
import Chatbots from "@/pages/products/chatbots";
import Agents from "@/pages/products/agents";
import Extract from "@/pages/products/extract";
import ServicesPage from "@/pages/services";
import Deployment from "@/pages/services/deployment";
import Integration from "@/pages/services/integration";
import Automation from "@/pages/services/automation";
import BlogIndex from "@/pages/blog/index";
import BlogPost from "@/pages/blog/post";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function PageWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.plausible) {
      window.plausible('pageview');
    }
  }, []);
  return <>{children}</>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <PageWrapper><Home /></PageWrapper>} />
      <Route path="/products/self-hosted" component={() => <PageWrapper><SelfHosted /></PageWrapper>} />
      <Route path="/products/managed-cloud" component={() => <PageWrapper><ManagedCloud /></PageWrapper>} />
      <Route path="/products/chatbots" component={() => <PageWrapper><Chatbots /></PageWrapper>} />
      <Route path="/products/agents" component={() => <PageWrapper><Agents /></PageWrapper>} />
      <Route path="/products/extract" component={() => <PageWrapper><Extract /></PageWrapper>} />
      <Route path="/services" component={() => <PageWrapper><ServicesPage /></PageWrapper>} />
      <Route path="/services/deployment" component={() => <PageWrapper><Deployment /></PageWrapper>} />
      <Route path="/services/integration" component={() => <PageWrapper><Integration /></PageWrapper>} />
      <Route path="/services/automation" component={() => <PageWrapper><Automation /></PageWrapper>} />
      <Route path="/blog" component={() => <PageWrapper><BlogIndex /></PageWrapper>} />
      <Route path="/blog/:slug" component={() => <PageWrapper><BlogPost /></PageWrapper>} />
      <Route path="/privacy" component={() => <PageWrapper><Privacy /></PageWrapper>} />
      <Route path="/terms" component={() => <PageWrapper><Terms /></PageWrapper>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Students from "@/pages/Students";
import Fees from "@/pages/Fees";
import Attendance from "@/pages/Attendance";
import Events from "@/pages/Events";
import Staff from "@/pages/Staff";
import Transport from "@/pages/Transport";
import Profile from "@/pages/Profile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/students" component={Students} />
      <Route path="/fees" component={Fees} />
      <Route path="/attendance" component={Attendance} />
      <Route path="/events" component={Events} />
      <Route path="/staff" component={Staff} />
      <Route path="/transport" component={Transport} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
            <Route>
              <SidebarProvider style={style as React.CSSProperties}>
                <div className="flex h-screen w-full">
                  <AppSidebar />
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex items-center justify-between gap-2 p-4 border-b">
                      <SidebarTrigger data-testid="button-sidebar-toggle" />
                      <ThemeToggle />
                    </header>
                    <main className="flex-1 overflow-y-auto">
                      <Router />
                    </main>
                  </div>
                </div>
              </SidebarProvider>
            </Route>
          </Switch>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

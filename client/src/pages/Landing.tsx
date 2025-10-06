import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MagicCard } from "@/registry/magicui/magic-card";
import { BentoGrid, BentoCard } from "@/registry/magicui/bento-grid";
import {
  LayoutDashboard,
  Users,
  DollarSign,
  CalendarCheck,
  Calendar,
  UserCog,
  Bus,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import laptopImage from "@assets/laptop_1759655319978.png";
import studentReportImage from "@assets/studentreport-min_1759655319980.png";
import communicateImage from "@assets/communicate_1759655319977.png";
import smsGatewayImage from "@assets/smsgateway_1759655319979.png";
import supportTeamImage from "@assets/support-team_1759655319981.png";
import checklistIcon from "@assets/a4_1759655319974.png";
import analyticsIcon from "@assets/a6_1759655319976.png";
import reportCardImage from "@assets/21-min_1759655319973.png";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive student records with grades, contact info, and hostel management.",
  },
  {
    icon: DollarSign,
    title: "Fee Management",
    description: "Track tuition, hostel, events, and custom fees with automated billing.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Tracking",
    description: "Daily attendance monitoring with real-time reports and analytics.",
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Organize school events with structured record sheets and participant tracking.",
  },
  {
    icon: UserCog,
    title: "Staff Management",
    description: "Manage teaching and non-teaching staff with salary and role tracking.",
  },
  {
    icon: Bus,
    title: "Transport System",
    description: "Bus route management with driver assignments and student allocations.",
  },
];

const benefits = [
  "Real-time dashboards and analytics",
  "Automated fee collection tracking",
  "Parent-teacher communication",
  "Comprehensive reporting system",
  "Multi-user role management",
  "Mobile-friendly interface",
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="font-bold text-lg text-primary-foreground">E</span>
            </div>
            <div>
              <h2 className="font-semibold">EduFlex</h2>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-1/5 to-background dark:from-primary/5 dark:via-background dark:to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-chart-2/10 via-transparent to-transparent dark:from-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="text-sm px-4 py-1.5">
                  Modern School Management
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Manage Your School with{" "}
                  <span className="text-primary">EduFlex</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  A comprehensive solution for student management, fee tracking,
                  attendance, events, staff, and transport - all in one place.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="gap-2" data-testid="button-get-started">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" data-testid="button-learn-more">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold">1,200+</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">87</p>
                  <p className="text-sm text-muted-foreground">Staff Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src={laptopImage}
                alt="EduFlex Dashboard"
                className="w-full h-auto rounded-xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Complete School Management Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your school efficiently, from student
              records to financial tracking.
            </p>
          </div>

          <BentoGrid>
            {features.map((feature, index) => (
              <MagicCard 
                key={index} 
                className="hover-elevate" 
                data-testid={`card-feature-${index}`}
                gradientColor="#8b5cf6"
                gradientOpacity={0.3}
              >
                <div className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-chart-3/10 via-transparent to-transparent dark:from-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Powerful Analytics & Reporting
              </h2>
              <p className="text-lg text-muted-foreground">
                Get detailed insights into student performance, attendance patterns,
                fee collection, and more with our comprehensive reporting system.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <img
                    src={analyticsIcon}
                    alt="Analytics"
                    className="h-12 w-12 animate-float-delayed"
                  />
                  <h4 className="font-semibold">Real-time Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Live dashboards with key metrics
                  </p>
                </div>
                <div className="space-y-2">
                  <img
                    src={checklistIcon}
                    alt="Checklist"
                    className="h-12 w-12 animate-float"
                  />
                  <h4 className="font-semibold">Custom Reports</h4>
                  <p className="text-sm text-muted-foreground">
                    Generate detailed reports
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={studentReportImage}
                alt="Student Reports"
                className="w-full h-auto rounded-xl shadow-2xl animate-float-slow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={communicateImage}
                  alt="Communication"
                  className="w-full h-auto rounded-xl animate-float"
                />
                <img
                  src={smsGatewayImage}
                  alt="SMS Gateway"
                  className="w-full h-auto rounded-xl mt-8 animate-float-delayed"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Seamless Communication
              </h2>
              <p className="text-lg text-muted-foreground">
                Keep parents, teachers, and staff connected with integrated
                communication tools including SMS notifications and announcements.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-t from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-chart-4/10 via-transparent to-transparent dark:from-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Dedicated Support Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Our experienced support team is always ready to help you get the most
                out of EduFlex. Get assistance whenever you need it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-muted-foreground">Support Available</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold">&lt;2hrs</p>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold">99.9%</p>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <img
                src={supportTeamImage}
                alt="Support Team"
                className="w-full h-auto animate-float-slow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 border-t relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-5/5 to-background dark:from-primary/5 dark:via-background dark:to-background" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of schools already using EduFlex to streamline their
              operations.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2" data-testid="button-cta-start">
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" data-testid="button-cta-demo">
              Schedule a Demo
            </Button>
          </div>
          <div className="pt-8">
            <img
              src={reportCardImage}
              alt="Report Card"
              className="mx-auto rounded-xl shadow-lg max-w-2xl w-full animate-float-slow"
            />
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-bold text-lg text-primary-foreground">E</span>
              </div>
              <div>
                <h3 className="font-semibold">EduFlex</h3>
                <p className="text-sm text-muted-foreground">School Management System</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 EduFlex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  ChevronRight,
  Shield,
  Award,
  Clock,
  Users,
  ThumbsUp,
  Headphones,
  Heart,
  Target
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brands } from "@/data/brands";
import BrandsSection from "@/components/sections/BrandsSection";

const AboutPage = () => {
  const stats = [
    { value: "5000+", label: "Happy Customers" },
    { value: "20+ Years", label: "Experience" },
    { value: "50+", label: "Brands Served" },
    { value: "15000+", label: "Repairs Done" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Genuine Products",
      description: "We only sell 100% authentic products with manufacturer warranty.",
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with price match guarantee on all products.",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Same-day repairs and fast delivery to respect your time.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Trained technicians with years of experience in electronics.",
    },
    {
      icon: ThumbsUp,
      title: "Quality Assurance",
      description: "Rigorous quality checks on all products and repairs.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Always available to help with your queries and concerns.",
    },
  ];

  const timeline = [
  {
    year: "2000",
    title: "Founded",
    description: "Patel Electronics was started as a small electronics repair shop, serving the local community with dedication and honesty."
  },
  {
    year: "2015",
    title: "Temporary Closure",
    description: "Operations were paused for some time due to health-related reasons."
  },
  {
    year: "2020",
    title: "Reopening & Promotion",
    description: "The shop reopened with renewed energy and began active promotion to reconnect with customers."
  },
  {
    year: "2023",
    title: "New Shop, New Energy",
    description: "Moved into a new and bigger shop space with better facilities and a fresh start."
  },
  {
    year: "2026",
    title: "Digital & Social Growth",
    description: "Focused on digital presence and social media platforms to reach more customers."
  }
];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-[104px]">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">About Us</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
              About Patel Electronics
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Your trusted electronics partner since 2000. Serving with quality, trust, and excellence.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center card-shadow border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="container py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Patel Electronics was founded in the year 2000 with a vision to
                  provide reliable electronics repair services to the local community.
                </p>
                <p>
                  Over the years, we expanded into electronics sales and partnered
                  with leading brands to offer genuine products with warranty.
                </p>
                <p>
                  With more than 20 years of experience and over 15,000 repairs,
                  we continue to serve customers with dedication and trust.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 card-shadow border border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold">Customer First</h4>
                </div>
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <Target className="w-10 h-10 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold">Quality Focus</h4>
                </div>
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold">Trust Built</h4>
                </div>
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <Award className="w-10 h-10 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold">Excellence</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-2xl p-6 card-shadow border border-border inline-block">
                      <div className="text-accent font-bold text-xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-accent relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brands */}
      <BrandsSection/>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;

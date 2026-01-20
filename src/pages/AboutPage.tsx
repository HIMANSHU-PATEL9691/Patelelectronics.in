import { Link } from "react-router-dom";
import { ChevronRight, Shield, Award, Clock, Users, ThumbsUp, Headphones, Heart, Target } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brands } from "@/data/brands";

const AboutPage = () => {
  const stats = [
    { value: "5000+", label: "Happy Customers" },
    { value: "10+", label: "Years Experience" },
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
      title: "24/7 Support",
      description: "Always available to help with your queries and concerns.",
    },
  ];

  const timeline = [
    { year: "2015", title: "Founded", description: "Started as a small electronics repair shop" },
    { year: "2017", title: "Expanded", description: "Added product sales and became authorized dealer" },
    { year: "2019", title: "New Location", description: "Moved to larger showroom in Main Market" },
    { year: "2021", title: "Online Presence", description: "Launched website for wider reach" },
    { year: "2023", title: "5000+ Customers", description: "Milestone of serving 5000+ happy customers" },
    { year: "2024", title: "Growing Strong", description: "Continuing to serve with trust and quality" },
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
              Your trusted electronics partner since 2015. Serving with quality, trust, and excellence.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 text-center card-shadow border border-border">
                <div className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="container py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Patel Electronics was founded in 2015 with a simple vision: to provide quality electronics 
                  and reliable repair services to our local community. What started as a small repair shop 
                  has grown into a trusted name in electronics retail and service.
                </p>
                <p>
                  Over the years, we've built strong relationships with major brands like Samsung, LG, Sony, 
                  Apple, HP, Dell, and many more. We are authorized dealers for multiple brands, ensuring 
                  that every product you buy from us is genuine and comes with full warranty.
                </p>
                <p>
                  Our team of experienced technicians has repaired over 15,000 devices, from smartphones 
                  to washing machines. We take pride in our quick turnaround time and our commitment to 
                  using genuine spare parts.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 card-shadow border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground">Customer First</h4>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <Target className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground">Quality Focus</h4>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground">Trust Built</h4>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <Award className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground">Excellence</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-muted/50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="container py-16">
          <h2 className="text-3xl font-bold font-heading text-foreground mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-2xl p-6 card-shadow border border-border inline-block">
                      <div className="text-accent font-bold text-xl mb-2">{item.year}</div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-accent shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="bg-card border-y border-border py-12">
          <div className="container">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-8 text-center">Brands We Partner With</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {brands.map((brand) => (
                <div key={brand.name} className="opacity-60 hover:opacity-100 transition-opacity">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 w-auto object-contain dark:invert dark:brightness-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;

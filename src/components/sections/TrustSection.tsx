import { Shield, Award, Clock, Users, ThumbsUp, Headphones } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Genuine Products",
    description: "100% authentic products with manufacturer warranty",
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "Competitive prices with price match guarantee",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Quick repairs and same-day delivery available",
  },
  {
    icon: Users,
    title: "5000+ Customers",
    description: "Trusted by thousands of happy customers",
  },
  {
    icon: ThumbsUp,
    title: "10+ Years",
    description: "Over a decade of trusted service",
  },
  {
    icon: Headphones,
    title: "Local Support",
    description: "Personal attention and after-sales support",
  },
];

const TrustSection = () => {
  return (
    <section id="about" className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Why Choose Patel Electronics?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            We've been serving our community with quality electronics and trusted repairs since 2015
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <point.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold font-heading text-lg mb-2">{point.title}</h3>
              <p className="text-sm text-primary-foreground/70">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

import { Shield, Award, Clock, Users, ThumbsUp, Headphones } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Genuine Products",
    description: "100% authentic products with manufacturer warranty",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "Competitive prices with price match guarantee",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Quick repairs and same-day delivery available",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Users,
    title: "5000+ Customers",
    description: "Trusted by thousands of happy customers",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: ThumbsUp,
    title: "10+ Years",
    description: "Over a decade of trusted service",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: Headphones,
    title: "Local Support",
    description: "Personal attention and after-sales support",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

const TrustSection = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-slate-950 text-white">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 inline-block">
            Our Legacy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
            Why Choose <span className="text-primary">Patel Electronics?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Serving our community with premium quality electronics and 
            expert repair services since <span className="text-white font-semibold">2015</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-primary/50 hover:bg-slate-900 transition-all duration-500"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 rounded-2xl ${point.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <point.icon className={`w-7 h-7 ${point.color}`} />
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                {point.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
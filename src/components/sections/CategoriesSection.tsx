import { Smartphone, Tv, Monitor, Refrigerator, WashingMachine, Headphones, Wrench, Speaker } from "lucide-react";

const categories = [
  { name: "Mobile Phones", icon: Smartphone, count: "50+ Products", color: "bg-blue-500/10 text-blue-600" },
  { name: "Televisions", icon: Tv, count: "30+ Products", color: "bg-purple-500/10 text-purple-600" },
  { name: "Laptops", icon: Monitor, count: "25+ Products", color: "bg-green-500/10 text-green-600" },
  { name: "Refrigerators", icon: Refrigerator, count: "20+ Products", color: "bg-cyan-500/10 text-cyan-600" },
  { name: "Washing Machines", icon: WashingMachine, count: "15+ Products", color: "bg-orange-500/10 text-orange-600" },
  { name: "Speakers", icon: Speaker, count: "40+ Products", color: "bg-pink-500/10 text-pink-600" },
  { name: "Accessories", icon: Headphones, count: "100+ Products", color: "bg-indigo-500/10 text-indigo-600" },
  { name: "Repair Services", icon: Wrench, count: "All Brands", color: "bg-accent/10 text-accent" },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of electronics products and services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#products"
              className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold font-heading text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

import { MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Mobile Phones",
    price: "₹1,29,999",
    image: "📱",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "LG 55\" 4K Smart TV",
    brand: "LG",
    category: "Televisions",
    price: "₹54,999",
    image: "📺",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "HP Pavilion Laptop 15",
    brand: "HP",
    category: "Laptops",
    price: "₹65,990",
    image: "💻",
    badge: null,
  },
  {
    id: 4,
    name: "Samsung 253L Refrigerator",
    brand: "Samsung",
    category: "Refrigerators",
    price: "₹28,499",
    image: "🧊",
    badge: "Top Rated",
  },
  {
    id: 5,
    name: "Whirlpool 7kg Washing Machine",
    brand: "Whirlpool",
    category: "Washing Machines",
    price: "₹22,990",
    image: "🫧",
    badge: null,
  },
  {
    id: 6,
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "Accessories",
    price: "₹29,990",
    image: "🎧",
    badge: "Popular",
  },
];

const ProductsSection = () => {
  const whatsappNumber = "919876543210";

  const handleWhatsAppEnquiry = (productName: string) => {
    const message = encodeURIComponent(`Hello Patel Electronics, I am interested in ${productName}. Please share details and best price.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Top-selling products with genuine warranty. Contact us for the best deals!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative bg-muted h-48 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-1">{product.brand}</div>
                <h3 className="font-semibold font-heading text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleWhatsAppEnquiry(product.name)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="default" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

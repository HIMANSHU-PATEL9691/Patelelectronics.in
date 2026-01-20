import { useParams, Link } from "react-router-dom";
import { Phone, MessageCircle, ChevronRight, Check, Shield, Truck, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const whatsappNumber = "919876543210";
  const phoneNumber = "+919876543210";

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[104px]">
          <div className="container py-16 text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppEnquiry = () => {
    const message = encodeURIComponent(`Hello Patel Electronics, I am interested in ${product.name}. Please share details and best price.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[104px]">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-accent">Products</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="container py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div>
              <div className="bg-card rounded-2xl overflow-hidden card-shadow border border-border">
                <div className="aspect-square bg-muted relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-accent font-medium mb-2">{product.brand}</p>
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                    <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                      Save {Math.round((1 - parseInt(product.price.replace(/[^\d]/g, '')) / parseInt(product.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                    </span>
                  </>
                )}
              </div>

              {/* Availability */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                product.availability ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
              }`}>
                <div className={`w-2 h-2 rounded-full ${product.availability ? "bg-success" : "bg-destructive"}`} />
                {product.availability ? "In Stock" : "Out of Stock"}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="flex-1" onClick={handleWhatsAppEnquiry}>
                  <MessageCircle className="w-5 h-5" />
                  Enquire on WhatsApp
                </Button>
                <Button variant="call" size="xl" className="flex-1" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-5 h-5" />
                    Call to Order
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs text-muted-foreground">Genuine Product</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs text-muted-foreground">Quick Support</p>
                </div>
              </div>

              {/* Warranty */}
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                <p className="text-sm text-muted-foreground">Warranty</p>
                <p className="font-medium text-foreground">{product.warranty}</p>
              </div>
            </div>
          </div>

          {/* Specifications & Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Specifications */}
            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <h2 className="text-xl font-bold font-heading text-foreground mb-6">Specifications</h2>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <h2 className="text-xl font-bold font-heading text-foreground mb-6">Key Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-8">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 border border-border"
                  >
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-accent">{p.brand}</p>
                      <h3 className="font-semibold text-foreground line-clamp-1">{p.name}</h3>
                      <p className="text-primary font-bold mt-2">{p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetailPage;

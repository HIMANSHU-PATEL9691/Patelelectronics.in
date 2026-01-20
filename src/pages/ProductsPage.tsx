import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Filter, Grid, List, MessageCircle, Eye, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products, categories } from "@/data/products";
import { brands } from "@/data/brands";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const whatsappNumber = "919876543210";

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || 
        product.category.toLowerCase().includes(selectedCategory.replace("-", " "));
      
      const matchesBrand = selectedBrand === "all" || 
        product.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  const handleWhatsAppEnquiry = (productName: string) => {
    const message = encodeURIComponent(`Hello Patel Electronics, I am interested in ${productName}. Please share details and best price.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[104px]">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Products</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Browse our wide range of genuine electronics products. Contact us for the best deals and offers!
            </p>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border sticky top-32">
                <h3 className="font-bold font-heading text-foreground mb-4">Filters</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.slug ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Brand</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    <button
                      onClick={() => setSelectedBrand("all")}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedBrand === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      All Brands
                    </button>
                    {brands.map((brand) => (
                      <button
                        key={brand.name}
                        onClick={() => setSelectedBrand(brand.name)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedBrand === brand.name ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        }`}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                  <div className="flex border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or search query</p>
                </div>
              ) : (
                <div className={viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
                  : "space-y-4"
                }>
                  {filteredProducts.map((product) => (
                    viewMode === "grid" ? (
                      <div
                        key={product.id}
                        className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
                      >
                        <div className="relative bg-muted aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {product.badge && (
                            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <div className="p-5">
                          <div className="text-sm text-accent font-medium mb-1">{product.brand}</div>
                          <h3 className="font-semibold font-heading text-foreground mb-2 line-clamp-2 min-h-[48px]">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-primary">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1" asChild>
                              <Link to={`/product/${product.id}`}>
                                <Eye className="w-4 h-4" />
                                Details
                              </Link>
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
                    ) : (
                      <div
                        key={product.id}
                        className="flex gap-4 bg-card rounded-2xl overflow-hidden card-shadow border border-border p-4"
                      >
                        <div className="w-32 h-32 shrink-0 bg-muted rounded-xl overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-sm text-accent font-medium">{product.brand}</div>
                              <h3 className="font-semibold font-heading text-foreground">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.category}</p>
                            </div>
                            {product.badge && (
                              <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shrink-0">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-primary">{product.price}</span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" asChild>
                                <Link to={`/product/${product.id}`}>
                                  <Eye className="w-4 h-4" />
                                  Details
                                </Link>
                              </Button>
                              <Button
                                variant="whatsapp"
                                size="sm"
                                onClick={() => handleWhatsAppEnquiry(product.name)}
                              >
                                <MessageCircle className="w-4 h-4" />
                                Enquire
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;

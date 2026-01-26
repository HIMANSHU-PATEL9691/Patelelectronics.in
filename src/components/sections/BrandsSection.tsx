import { brands } from "@/data/brands";

const BrandsSection = () => {
  return (
    <section className="py-14 bg-background border-y border-border">
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-foreground">
            Trusted Brands We Deal In
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            We partner with leading and reliable electronics brands
          </p>
        </div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="
                group
                w-28 h-20 md:w-32 md:h-24
                bg-card
                border border-border
                rounded-xl
                flex flex-col items-center justify-center
                gap-2
                transition-all duration-300
                hover:shadow-md hover:border-primary/40
              "
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {/* Logo */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  max-h-10 md:max-h-12
                  w-auto
                  object-contain
                  transition-all duration-300
                  group-hover:scale-105
                "
                loading="lazy"
              />

              {/* Brand Name */}
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

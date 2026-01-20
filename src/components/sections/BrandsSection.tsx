import { brands } from "@/data/brands";

const BrandsSection = () => {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Trusted Brands We Deal In
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto object-contain dark:invert dark:brightness-200"
                loading="lazy"
              />
              <span className="text-xs font-medium text-muted-foreground">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

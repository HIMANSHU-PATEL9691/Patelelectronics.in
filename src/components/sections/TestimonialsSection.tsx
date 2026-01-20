// src/components/sections/TestimonialsSection.tsx
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Rahul S.", text: "Excellent repair service for my Samsung TV!" },
  { name: "Priya M.", text: "Found the best price for my new laptop here." }
];

export const TestimonialsSection = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <Carousel className="max-w-xl mx-auto">
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i}>
              <Card className="bg-transparent border-none text-center">
                <CardContent className="pt-6">
                  <p className="text-lg italic mb-4">"{t.text}"</p>
                  <p className="font-bold">- {t.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </section>
);
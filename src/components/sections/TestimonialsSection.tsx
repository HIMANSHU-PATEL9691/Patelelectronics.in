import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Kareli",
    rating: 5,
    text: "Excellent repair service for my Samsung LED TV. They used genuine parts and finished the work the same day. Highly recommended for any electronic issues!",
    initials: "RS",
  },
  {
    name: "Priya Mehta",
    location: "Narsinghpur",
    rating: 5,
    text: "Found the best price for my new Dell laptop here. The staff is very knowledgeable and helped me choose the right model for my work needs.",
    initials: "PM",
  },
  {
    name: "Amit Verma",
    location: "Kareli",
    rating: 5,
    text: "I've been getting my AC and Refrigerator serviced by Patel Electronics for 3 years now. Always professional, punctual, and honest with their pricing.",
    initials: "AV",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Trusted by the <span className="text-primary">Community</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See why thousands of customers trust Patel Electronics for their
            home appliances and repair needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <Card className="bg-slate-900/50 border-white/10 backdrop-blur-sm mx-1">
                    <CardContent className="p-8 md:p-12 relative">
                      <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
                      
                      <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>

                      <blockquote className="text-xl md:text-2xl text-slate-200 italic leading-relaxed mb-8">
                        "{t.text}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">
                            {t.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-white text-lg leading-none">
                            {t.name}
                          </p>
                          <p className="text-primary text-sm mt-1">
                            Verified Customer • {t.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-slate-900 border-white/10 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-slate-900 border-white/10 hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
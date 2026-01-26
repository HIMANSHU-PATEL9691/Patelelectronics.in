// src/components/sections/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export const FAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4 sm:px-6">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.slice(0, 5).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-4"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base py-4 leading-relaxed">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

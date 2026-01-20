import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, faqCategories } from "@/data/faq";
import { useState } from "react";

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const whatsappNumber = "919691365052";

  const filteredFaqs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[104px]">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">FAQ</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Filter */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border sticky top-32">
                <h3 className="font-bold font-heading text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === "all" 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    All Questions
                  </button>
                  {faqCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === cat 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border">
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                        <div>
                          <span className="text-xs text-accent font-medium block mb-1">{faq.category}</span>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Still have questions */}
              <div className="mt-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground">
                <h3 className="text-2xl font-bold font-heading mb-4">Still have questions?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Can't find the answer you're looking for? Contact us directly!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hello%20Patel%20Electronics%2C%20I%20have%20a%20question.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Ask on WhatsApp
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href="tel:+919691365052">
                      <Phone className="w-5 h-5" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;

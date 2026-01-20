export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Products
  {
    question: "Are all products genuine with warranty?",
    answer: "Yes, all products sold at Patel Electronics are 100% genuine with manufacturer warranty. We are authorized dealers for major brands like Samsung, LG, Sony, Apple, HP, Dell, and more.",
    category: "Products",
  },
  {
    question: "Do you provide product demonstration before purchase?",
    answer: "Absolutely! Our trained staff will give you a complete demonstration of any product you're interested in. We believe in helping you make an informed decision.",
    category: "Products",
  },
  {
    question: "Can I exchange my old product for a new one?",
    answer: "Yes, we offer exchange programs for select products. The exchange value depends on the condition and model of your old device. Contact us on WhatsApp for a quick evaluation.",
    category: "Products",
  },
  {
    question: "Do you offer EMI options?",
    answer: "Yes, we offer easy EMI options through major banks and finance companies. EMI starting from ₹999/month on select products. Terms and conditions apply.",
    category: "Products",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash, Debit/Credit Cards, UPI (GPay, PhonePe, Paytm), Net Banking, and EMI options. For online enquiries, we prefer to discuss in person or over call for the best deals.",
    category: "Products",
  },

  // Repair Services
  {
    question: "How long does a typical repair take?",
    answer: "Most repairs are completed within 1-4 hours depending on the issue. Simple repairs like screen protector application or basic software issues are done in 30 minutes. Major repairs may take 24-48 hours.",
    category: "Repairs",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, all our repairs come with a 90-day warranty on parts and service. If the same issue recurs within the warranty period, we'll fix it free of cost.",
    category: "Repairs",
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "Yes, we use genuine OEM parts for all repairs. For some older models where original parts are not available, we use high-quality compatible parts and inform you beforehand.",
    category: "Repairs",
  },
  {
    question: "Do you offer home service for repairs?",
    answer: "Yes, we offer home service for large appliances like refrigerators, washing machines, and AC units. For smaller devices like mobiles and laptops, we recommend visiting our store for faster service.",
    category: "Repairs",
  },
  {
    question: "How do I book a repair service?",
    answer: "You can book a repair by calling us, sending a WhatsApp message, or visiting our store directly. Describe your issue and we'll provide an estimated quote and time.",
    category: "Repairs",
  },

  // General
  {
    question: "What are your store timings?",
    answer: "We are open Monday to Saturday from 10:00 AM to 9:00 PM. We are closed on Sundays and major public holidays.",
    category: "General",
  },
  {
    question: "Where is your store located?",
    answer: "Our store is located at Shop No. 12, Main Market, Your City - 380001. We have ample parking space available nearby.",
    category: "General",
  },
  {
    question: "Can I get a price quote on WhatsApp?",
    answer: "Yes! Send us a WhatsApp message with the product name or describe your repair issue, and we'll send you a quote quickly. This is the fastest way to get pricing information.",
    category: "General",
  },
  {
    question: "Do you deliver products to my home?",
    answer: "Yes, we offer free home delivery within the city for purchases above ₹5,000. For outstation deliveries, nominal shipping charges apply.",
    category: "General",
  },
  {
    question: "How can I track my repair status?",
    answer: "When you drop off your device for repair, we provide a token number. You can check the status anytime by calling us or sending a WhatsApp message with your token number.",
    category: "General",
  },
];

export const faqCategories = ["Products", "Repairs", "General"];

export const getFaqsByCategory = (category: string) => {
  return faqs.filter((f) => f.category === category);
};

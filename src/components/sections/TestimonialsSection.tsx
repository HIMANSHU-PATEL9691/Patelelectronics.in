import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import shivamImg from "@/assets/images/shivam.png";
import adarshImg from "@/assets/images/adarsh.jpeg";
import ritikImg from "@/assets/images/ritik.jpeg";

const testimonials = [
  {
    name: "Mr. Ritik Patel",
    role: "Farmer",
    image: ritikImg,
    content:
      "Patel Electronics provided excellent service for my TV repair. The technician was professional and arrived right on time!",
    rating: 5,
  },
  {
    name: "Mr. Adarsh Soni",
    role: "Local Business Owner",
    image:  adarshImg,
    content:
      "I've been buying all our office electronics here for years. Their after-sales support is simply the best in the city.",
    rating: 5,
  },
  {
    name: "Mr. Shivam Singh Kurmi",
    role: "Tech Enthusiast",
    image:  shivamImg,
    content:
      "Great collection of the latest smartphones. The staff is very knowledgeable and helped me pick the right device.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -mr-32 -mt-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold text-sm uppercase tracking-wider"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
          >
            What Our <span className="text-orange-600">Customers</span> Say
          </motion.h2>

          <p className="text-lg text-slate-600">
            Trusted by customers for quality products and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute top-6 right-8 text-slate-100">
                <Quote size={48} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

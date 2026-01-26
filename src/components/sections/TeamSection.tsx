import React from "react";
import { motion } from "framer-motion";

// Images
import papaImg from "@/assets/images/papa.png";
import bhaiImg from "@/assets/images/bhai.png";
import VikramImg from "@/assets/images/HIMANSHU.jpg";

const teamMembers = [
  {
    name: "Mr. Kailash Patel",
    role: "Founder & Master Technician",
    image: papaImg,
    bio: "Expert in home appliance repairs with over 31 years of hands-on industry experience."
  },
  {
    name: "Mr. Upanshu Patel",
    role: "Electronics Sales Head",
    image: bhaiImg,
    bio: "Helping customers choose the right electronics with deep product knowledge and trust."
  },
  {
    name: "Himanshu Patel",
    role: "Software Engineer",
    image: VikramImg,
    bio: "Focused on modern web technologies, automation, and smart digital solutions."
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest"
          >
            Our Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6"
          >
            People Behind <span className="text-blue-600">Patel Electronics</span>
          </motion.h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A dedicated team of experienced professionals delivering trusted electronics sales and repair services.
          </p>
        </div>

        {/* Team Cards */}
        {/* Layout Fix: Added justify-center for cases where there are fewer than 3 items on a row */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              {/* Image Wrapper Fix: Changed to aspect-square and object-cover */}
              <div className="relative aspect-square overflow-hidden bg-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional: Overlay gradient to make text pop if you ever put text on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-8 text-center">
                <h4 className="text-2xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
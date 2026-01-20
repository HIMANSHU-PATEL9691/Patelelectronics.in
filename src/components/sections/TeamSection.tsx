// src/components/sections/TeamSection.tsx
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import your downloaded images from the assets folder
import ownerImg from "@/assets/images/icon.png";
import techImg from "@/assets/images/icon.png";

const team = [
  { 
    name: "Himanshu Patel", 
    role: "Founder & CEO", 
    image: ownerImg // Use the imported variable
  },
  { 
    name: "Expert Technician", 
    role: "Head of Repairs", 
    image: techImg // Use the imported variable
  }
];

export const TeamSection = () => (
  <section className="py-16 container">
    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {team.map((member) => (
        <Card key={member.name} className="text-center p-6 hover:shadow-md transition-shadow">
          <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/10">
            <AvatarImage src={member.image} alt={member.name} className="object-cover" />
            <AvatarFallback>{member.name[0]}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-muted-foreground">{member.role}</p>
        </Card>
      ))}
    </div>
  </section>
);
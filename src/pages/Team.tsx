import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import photo from "@/assets/Buddhima.jpg";
import photo01 from "@/assets/Vijayababhu.jpg";
import photo02 from "@/assets/Tharindu.jpg";
import photo03 from "@/assets/Sanjaya.jpg";
import photo04 from "@/assets/Dilshan.jpg";
import photo05 from "@/assets/Chamathka.jpg";
import photo06 from "@/assets/Gayanga.jpg";
import photo07 from "@/assets/Shahan.jpg";
import { useEffect } from "react";

const Team = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const team = [
    {
      name: "BUDDHІMA",
      role: "FOUNDER/CEO",
      image: photo,
      bio: "Buddhima is the visionary Founder & CEO of Brandora, leading the company with strong strategic direction, innovation, and a commitment to high-quality digital solutions."
    },
    {
      name: "VIJAYABAHU",
      role: "CREATIVE DIRECTOR & MARKETING MANAGER",
      image: photo01,
      bio: "Vijayabahu is the Creative Director & Marketing Manager at Brandora, leading innovative design projects while crafting impactful marketing strategies that make brands unforgettable."
    },
    {
      name: "THARINDU",
      role: "SOCIAL MEDIA MANAGER & CLIENT MANAGER",
      image: photo02,
      bio: "Tharindu is a dedicated Social Media Manager & Client Manager, expertly handling content strategies while maintaining strong client relationships to drive consistent brand growth."
    },
    {
      name: "SANJAYA",
      role: "DIGITAL MARKETING SPECIALIST & CLIENT MANAGER",
      image: photo03,
      bio: "Sanjaya is a skilled Digital Marketing Specialist & Client Manager, focused on optimizing online campaigns and ensuring client satisfaction through effective communication and results-driven strategies."
    },
    {
      name: "DILSHAN",
      role: "VIDEO EDITOR & MOTION GRAPHICS DESIGNER",
      image: photo04,
      bio: "Dilshan is a talented Video Editor & Motion Graphics Designer, bringing stories to life through captivating visuals and dynamic animations that engage and inspire audiences."
    },
    {
      name: "CHAMAТНКА",
      role: "DEVELOPER & BRAND AMBESSIDER",
      image: photo05,
      bio: "Passionate developer crafting seamless digital experiences and championing our brand values."
    },
    {
      name: "GAYANGA",
      role: "DEVELOPER",
      image: photo06,
      bio: "Building robust and scalable web solutions to drive business success."
    },
    {
      name: "MENURA DISSANAYAKE",
      role: "VIDEO EDITOR",
      image: photo07,
      bio: "Creating compelling video content that captivates and communicates brand stories effectively."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The passionate experts behind our client success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;

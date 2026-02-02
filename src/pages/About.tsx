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



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const team = [
    { name: "BUDDHІMA", role: "CEO & Founder", image: photo},
    { name: "VIJAYABAHU", role: "CREATIVE DIRECTOR & MARKETING MANAGER", image: photo01 },
    { name: "THARINDU", role: "SOCIAL MEDIA MANAGER & CLIENT MANAGER",image: photo02 },
    { name: "SANJAYA", role: "DIGITAL MARKETING SPECIALIST & CLIENT MANAGER", image: photo03 },
    { name: "DILSHAN", role: "VIDEO EDITOR & MOTION GRAPHICS DESIGNER", image: photo04 },
    { name: "CHAMAТНКА", role: "DEVELOPER & BRAND AMBESSIDER", image: photo05 },
    { name: "GAYANGA", role: "DEVELOPER", image: photo06 },
    { name: "MENURA DISSANAYAKE", role: "VIDEO EDITOR", image: photo07 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-center">
              Our Story
            </h1>
            <div className="prose prose-lg max-w-none *:text-justify *:leading-relaxed">
              <p className="text-xl text-muted-foreground mb-6">
                Brandora is a next-generation digital marketing agency dedicated to transforming brands and driving sustainable business growth. We specialize in creating powerful digital experiences that help businesses stand out, connect with the right audience, and achieve measurable results.
              </p>
              <p className="text-xl text-muted-foreground mb-6">
               At Brandora, we turn unique brand stories into impactful marketing strategies by blending creativity, data-driven insights, and innovative technology. Our services include digital marketing, branding, SEO, web design, content creation, market research, and end-to-end management support.
              </p>
              <p className="text-xl text-muted-foreground">
               With a passionate team and a global mindset, Brandora acts as your trusted digital partner, helping your brand compete, lead, and grow with confidence.
              </p>
              <p className="text-xl text-muted-foreground mt-6">
                <b>Glow up your brand with Brandora.</b>
              </p>
            
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:bg-blue-600 cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/30 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                        {member.name}
                      </h3>
                      <div className="mx-auto inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        {member.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="bg-secondary rounded-2xl p-12">
            <h2 className="font-display text-4xl font-bold mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of trends to deliver cutting-edge solutions
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold mb-4">Transparency</h3>
                <p className="text-muted-foreground">
                  Clear communication and honest reporting in everything we do
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold mb-4">Results</h3>
                <p className="text-muted-foreground">
                  We measure success by the impact we create for our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

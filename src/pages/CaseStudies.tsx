import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, X } from "lucide-react";
import { useEffect } from "react";

const CaseStudies = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const cases = [
    {
      id: 1,
      title: "E-commerce Traffic Growth",
      client: "Fashion Retailer",
      results: "+320% organic traffic in 6 months",
      description: "Comprehensive SEO strategy and content marketing overhaul that transformed organic visibility and drove sustained growth.",
      fullDescription: "We implemented a comprehensive SEO strategy combined with targeted content marketing for this fashion retailer. Our approach included technical SEO audits, keyword research, on-page optimization, and a content calendar that addressed customer pain points. Within 6 months, organic traffic increased by 320%, revenue grew by 185%, and conversion rates improved by 45%.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tags: ["SEO", "Content Marketing"],
      category: "SEO",
      metrics: { traffic: "+320%", revenue: "+185%", conversion: "+45%" },
      duration: "6 months"
    },
    {
      id: 2,
      title: "Brand Transformation",
      client: "Tech Startup",
      results: "Complete rebrand and market positioning",
      description: "Full brand identity refresh including logo, messaging, and digital presence redesign that elevated market perception.",
      fullDescription: "This tech startup needed a complete brand overhaul to better reflect their innovative product. We redesigned their logo, developed a comprehensive brand guidelines document, refreshed all marketing materials, and rebuilt their website. The new brand positioning increased brand awareness by 250%, website engagement by 180%, and qualified leads by 95%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Branding", "Web Design"],
      category: "Branding",
      metrics: { awareness: "+250%", engagement: "+180%", leads: "+95%" },
      duration: "4 months"
    },
    {
      id: 3,
      title: "Social Media Campaign",
      client: "Restaurant Chain",
      results: "5M+ impressions across platforms",
      description: "Viral social media strategy with content creation and community management that generated massive organic reach.",
      fullDescription: "We developed a viral social media strategy for a restaurant chain focusing on user-generated content, influencer partnerships, and trending audio. Our team created engaging video content, managed community interactions, and leveraged seasonal trends. The campaign achieved over 5 million impressions, grew followers by 420%, and increased engagement rates by 310%.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      tags: ["Social Media", "Content"],
      category: "Social Media",
      metrics: { reach: "5M+", followers: "+420%", engagement: "+310%" },
      duration: "3 months"
    },
    {
      id: 4,
      title: "PPC Optimization",
      client: "SaaS Company",
      results: "60% reduction in cost per acquisition",
      description: "Advanced PPC campaign optimization and Google Ads restructuring that dramatically improved ROI and efficiency.",
      fullDescription: "We restructured the SaaS company's Google Ads campaigns, implementing advanced bidding strategies, audience segmentation, and landing page optimization. Through continuous A/B testing and campaign refinement, we achieved a 60% reduction in cost per acquisition, increased ROI by 240%, and boosted conversions by 175% while maintaining the same budget.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["PPC", "Google Ads"],
      category: "PPC",
      metrics: { cpa: "-60%", roi: "+240%", conversions: "+175%" },
      duration: "2 months"
    },
    {
      id: 5,
      title: "Vipex Delivery — Social Media Management",
      client: "Vipex Delivery",
      results: "Stronger brand recognition and increased engagement on Facebook",
      description: "Personalized delivery service focused on fast, reliable, customer-friendly logistics.",
      fullDescription: "About the Client: Vipex Delivery is a Sri Lanka-based personalized delivery service focused on fast, reliable, and customer-friendly logistics solutions.\n\nChallenge: Vipex needed to strengthen its social media presence, increase brand trust, and clearly communicate its services in a competitive delivery market.\n\nOur Solution: Developed a consistent visual identity for Facebook. Created service-focused and customer-trust-driven content. Improved engagement through localized and relatable messaging. Managed posting schedules and audience interaction.\n\nResults: Stronger brand recognition on Facebook; increased engagement and inquiries through social media; clear positioning as a reliable personalized delivery partner.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      tags: ["Social Media Management"],
      category: "Social Media",
      metrics: { engagement: "↑", inquiries: "↑" },
      duration: "Ongoing"
    },
    {
      id: 6,
      title: "Farm’s Tech — Web Development & SEO",
      client: "Farm’s Tech (PVT) Ltd",
      results: "Improved online credibility and better search visibility",
      description: "Agri-technology company combining modern tech with agriculture to support smart farming.",
      fullDescription: "About the Client: Farm’s Tech is an agri-technology company combining modern technology with agriculture to support smart farming and digital innovation.\n\nChallenge: The brand required a professional website, better search visibility, and a digital presence that reflected both technology and sustainability.\n\nOur Solution: Designed and developed a modern, responsive website. Implemented on-page SEO best practices. Optimized site structure and content for search engines. Aligned branding with agri-tech and innovation themes.\n\nResults: Improved online credibility and brand professionalism; better visibility on search engines; strong foundation for long-term digital marketing growth.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&h=800&fit=crop",
      tags: ["Web Development", "SEO", "Digital Marketing"],
      category: "Web",
      metrics: { visibility: "↑", credibility: "↑" },
      duration: "3 months"
    },
    {
      id: 7,
      title: "Top 11 India — UI/UX & Brand Growth",
      client: "Top 11 India",
      results: "Improved engagement, usability and brand recognition",
      description: "Digital platform focused on engaging users through data-driven content and interactive experiences.",
      fullDescription: "About the Client: Top 11 India is a digital platform focused on engaging users through data-driven content and interactive experiences.\n\nChallenge: The brand needed a user-friendly interface, strong visual identity, and consistent designs to support growth across platforms.\n\nOur Solution: Designed clean and intuitive UI/UX layouts. Created engaging graphic assets for digital platforms. Maintained brand consistency across web and social channels. Enhanced user experience to support retention and growth.\n\nResults: Improved user engagement and usability; stronger brand recognition through consistent visuals; better conversion and interaction across platforms.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
      tags: ["UI/UX Design", "Graphic Design", "Brand Growth"],
      category: "Design",
      metrics: { engagement: "↑", conversions: "↑" },
      duration: "4 months"
    },
    {
      id: 8,
      title: "My Coffee — Brand Identity Design",
      client: "My Coffee",
      results: "Strong, memorable brand identity and emotional connection with customers",
      description: "Lifestyle coffee brand focused on warmth, comfort, and a premium café experience.",
      fullDescription: "About the Client: My Coffee is a lifestyle coffee brand focused on warmth, comfort, and a premium café experience.\n\nChallenge: The brand needed a unique identity that emotionally connects with coffee lovers while standing out in a competitive café market.\n\nOur Solution: Designed a distinctive logo and visual identity. Developed a color palette and typography that reflect warmth and elegance. Created a brand system suitable for packaging, signage, and digital use.\n\nResults: Strong, memorable brand identity; clear emotional connection with the target audience; a flexible brand system ready for future growth.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop",
      tags: ["Brand Identity Design"],
      category: "Branding",
      metrics: { recognition: "↑", emotional_connection: "↑" },
      duration: "2 months"
    },
  ];

  const categories = ["All", "SEO", "Branding", "Social Media", "PPC"];
  const filteredCases = activeCategory === "All" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  const stats = [
    { label: "Successful Projects", value: "150+" },
    { label: "Average ROI Increase", value: "245%" },
    { label: "Client Retention", value: "98%" },
    { label: "Industry Awards", value: "23" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-600/10 blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Badge className="bg-blue-600/20 text-blue-700 border-blue-300 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2 inline" />
                Real Results
              </Badge>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Our Success Stories
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across industries with data-driven strategies and innovative solutions that deliver measurable impact.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-600 py-12 px-4 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="pt-8 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {filteredCases.map((study) => (
              <Card 
                key={study.id} 
                className="overflow-hidden group hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 border-0 bg-white cursor-pointer"
                onClick={() => setSelectedStudy(study)}
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-blue-600 font-semibold group-hover:bg-slate-100">
                        {study.duration}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {study.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-blue-600/10 text-blue-700 border border-blue-200 font-medium group-hover:bg-blue-400/20 group-hover:text-white group-hover:border-blue-300 transition-all duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title & Client */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-slate-900 group-hover:text-white transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-slate-500 mb-4 font-semibold text-sm uppercase tracking-wide group-hover:text-blue-100 transition-colors duration-300">
                      {study.client}
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed text-base group-hover:text-blue-50 transition-colors duration-300">
                      {study.description}
                    </p>

                    {/* Results Highlight */}
                    <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-lg p-5 mb-6 group-hover:from-blue-400/20 group-hover:to-blue-300/20 group-hover:border-blue-300 transition-all duration-300">
                      <p className="text-lg font-bold text-blue-700 group-hover:text-white transition-colors duration-300">
                        {study.results}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-lg transition-all duration-300 group/btn group-hover:bg-white group-hover:text-blue-600"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600">
                No case studies found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-600 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to transform your business and achieve your goals.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 font-semibold text-lg px-8 py-6 rounded-lg">
            Start Your Project
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-0">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="font-display text-3xl font-bold text-slate-900">
                  {selectedStudy.title}
                </h2>
                <button 
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img 
                  src={selectedStudy.image} 
                  alt={selectedStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-6">
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wide mb-2">
                  Client
                </p>
                <p className="text-xl font-semibold text-slate-900 mb-4">
                  {selectedStudy.client}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wide mb-2">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedStudy.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      className="bg-blue-600/10 text-blue-700 border border-blue-200 font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wide mb-2">
                  Results
                </p>
                <p className="text-lg font-bold text-blue-700 mb-4">
                  {selectedStudy.results}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wide mb-3">
                  Full Details
                </p>
                <p className="text-slate-700 leading-relaxed text-base">
                  {selectedStudy.fullDescription}
                </p>
              </div>

              <Button 
                onClick={() => setSelectedStudy(null)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-lg"
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudies;

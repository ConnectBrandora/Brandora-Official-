import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import digital2025 from "@/assets/Digital Marketing Trends Businesses Should Focus on in 2025.jpg";
import content2025 from "@/assets/SEO Strategies That Drive Sales, Not Just Website Traffic.jpg"
import social2025 from "@/assets/The Psychology Behind Strong Brands and Why It Matters.jpg"
import social from "@/assets/How Social Media Algorithms Really Work in 2025.jpg"
import web from "@/assets/Web_Design_Trends_That_Improve_User_Experience_and_Conversions.jpg"
import Content from "@/assets/Content Marketing Quality vs Quantity.jpg"
import { Button } from "@/components/ui/button";

const Blog = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const posts = [
    {
      title: "Digital Marketing Trends Businesses Should Focus on in 2025",
      excerpt: "Stay ahead of the curve with these emerging SEO strategies that are reshaping search rankings.",
      image: digital2025,
      category: "SEO",
      date: "Dec 15, 2025",
      readTime: "5 min read",
      content: "We all know how fast digital marketing changes. Just when you feel comfortable with one strategy, a new tool, platform, or trend takes over. And as we move into 2025, the real challenge isn't doing everything. It's choosing what actually matters.\n\nWe're seeing a major shift toward AI-driven insights. Marketing decisions are no longer based on gut feelings. Instead of saying \"this might work,\" brands are now saying \"the data proves this works.\" From smarter ad targeting to personalized customer journeys, AI is helping businesses market with confidence.\n\nShort-form video is another big piece of the puzzle. People don't want long explanations anymore. They want stories that are quick, relatable, and visually engaging. Brands that can communicate clearly in seconds are winning attention.\n\nBut perhaps the most important shift is the return to human connection. People don't want to feel like a number in a sales funnel. They want brands that understand their needs, speak their language, and feel real.\n\n2025 isn't about more tools. It's about better decisions, stronger stories, and meaningful connections.\n\nIf you're ready to build a digital strategy that actually lasts, Brandora is here to help you move forward with clarity and confidence."
    },
    {
      title: "SEO Strategies That Drive Sales, Not Just Website Traffic",
      excerpt: "A lot of businesses chase SEO because they want more traffic. And yes, traffic looks great on reports.",
      image: content2025,
      category: "SEO",
      date: "Dec 12, 2025",
      readTime: "7 min read",
      content: "A lot of businesses chase SEO because they want more traffic. And yes, traffic looks great on reports. But here's the truth. Traffic alone doesn't grow a business. Sales do.\n\nSEO in 2025 is no longer about ranking for every possible keyword. It's about understanding why people search in the first place. Are they researching? Comparing? Ready to buy? When your content matches that intent, results follow.\n\nWe're seeing smarter SEO strategies focused on quality over quantity. Pages that load fast, answer real questions, and guide users naturally toward action are outperforming keyword-heavy pages that offer no value.\n\nLocal SEO is also more powerful than ever. When someone searches for a service nearby, they're usually ready to take action. Showing up at that moment is what turns searches into customers.\n\nThe biggest mistake businesses still make is treating SEO as a one-time task. In reality, it's an ongoing process that evolves with user behavior and search engines.\n\nWhen SEO is done right, it quietly works in the background, bringing the right people to your business at the right time.\n\nAt Brandora, we focus on SEO that supports real growth, not just impressive numbers."
    },
    {
      title: "The Psychology Behind Strong Brands and Why It Matters",
      excerpt: "Have you ever noticed how some brands instantly feel trustworthy, even before you’ve used them?",
      image: social2025,
      category: "Psychology",
      date: "Dec 10, 2025",
      readTime: "6 min read",
      content: "Have you ever noticed how some brands instantly feel trustworthy, even before you’ve used them? That’s not luck. That’s psychology at work.Strong brands understand how people think and feel. Colors, fonts, visuals, and tone all influence perception. A calm color palette can build trust. A bold font can communicate confidence. These details shape how customers experience a brand.But branding goes deeper than visuals. It’s about consistency. When a brand looks, sounds, and feels the same across every touchpoint, people remember it. And familiarity builds trust.People don’t just buy products or services. They buy feelings, experiences, and values. A strong brand makes people feel understood and confident in their choice.This is why branding isn’t just a design task. It’s a long-term investment in how your business is perceived.At Brandora, we build brands that connect emotionally, communicate clearly, and stand strong in competitive markets."
    },
    {
      title: "How Social Media Algorithms Really Work in 2025",
      excerpt: "If you’ve ever wondered why some posts take off while others disappear, you’re not alone.",
      image: social,
      category: "Social Media",
      date: "Dec 8, 2025",
      readTime: "8 min read",
      content: "If you’ve ever wondered why some posts take off while others disappear, you’re not alone. Social media can feel unpredictable. But in reality, algorithms follow patterns.In 2025, platforms care less about how often you post and more about how people interact with your content. Likes, comments, shares, saves, and watch time all tell platforms one thing. This content matters.Short videos continue to dominate because they hold attention. A strong opening, clear message, and authentic delivery can make a huge difference in reach.Consistency still matters, but not at the cost of quality. Posting daily without purpose won’t help.Posting thoughtfully and engaging with your audience will.Each platform plays by slightly different rules, but the core idea is the same. Content that feels human performs better than content that feels forced.When you understand how algorithms think, social media becomes less stressful and far more effective.Brandora helps brands create content that works with algorithms, not against them."

    },
    {
      title: "Web Design Trends That Improve User Experience and Conversions",
      excerpt: "Your website is often the first conversation someone has with your brand.",
      image: web,
      category: "Web Design",
      date: "DEC 5, 2025",
      readTime: "6 min read",
      content: "Your website is often the first conversation someone has with your brand. And just like in real life, first impressions matter.In 2025, great web design isn’t about flashy visuals. It’s about clarity. People want to find information quickly, navigate easily, and feel confident about what they’re seeing.Mobile-first design is no longer optional. Most users browse on their phones, and if a site feels slow or confusing, they leave. Simple layouts, fast loading times, and clear calls to action make a big difference.User experience directly impacts conversions. When visitors feel comfortable and guided, they’re more likely to take action.A well-designed website quietly supports your marketing, builds trust, and works for your business around the clock.At Brandora, we design websites that look good, feel right, and convert visitors into customers."
    },
    {
      title: "Content Marketing: Quality vs Quantity , What Really Works?",
      excerpt: "Everyone talks about posting more content. But here’s the real question.",
      image: Content,
      category: "Content",
      date: "Dec 3, 2025",
      readTime: "5 min read",
      Content: "Everyone talks about posting more content. But here’s the real question. Does more content always mean better results? Not necessarily.Quality content still wins. Content that educates, solves problems, or tells a meaningful story creates real engagement. People remember brands that add value, not noise.That said, consistency matters. A great post once in a while won’t build momentum. The key is finding a rhythm you can maintain without sacrificing quality.The smartest brands plan content around purpose. Some content builds awareness. Some builds trust. Some drives action. When you understand that balance, content becomes a powerful tool instead of a burden.Content marketing isn’t about doing more. It’s about doing it better.Brandora helps businesses create content strategies that are thoughtful, consistent, and results-driven."
    },
  ];

  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [loadedContent, setLoadedContent] = useState<string | null>(null);
  const [loadingContent, setLoadingContent] = useState(false);
  const contentTimerRef = useRef<number | null>(null);

  // Open a post and lazy-load its full content (simulated fetch)
  const openPost = (post: any) => {
    setSelectedPost(post);
    setLoadedContent(null);
    setLoadingContent(true);
    // simulate network delay
    if (contentTimerRef.current) window.clearTimeout(contentTimerRef.current);
    contentTimerRef.current = window.setTimeout(() => {
      setLoadedContent(post.content ?? "Full article content not available.");
      setLoadingContent(false);
    }, 600);
  };

  // cleanup timer on unmount or when closing
  useEffect(() => {
    return () => {
      if (contentTimerRef.current) window.clearTimeout(contentTimerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert perspectives on digital marketing, design, and technology
            </p>
          </div>

          {selectedPost ? (
            // Modal view: full article loaded lazily (click backdrop to close)
            <div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => {
                setSelectedPost(null);
                setLoadedContent(null);
                setLoadingContent(false);
                if (contentTimerRef.current) window.clearTimeout(contentTimerRef.current);
              }}
            >
              <Card
                className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-0"
                onClick={(e) => e.stopPropagation()}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Badge className="bg-blue-600/10 text-blue-700 mb-2">
                        {selectedPost.category}
                      </Badge>
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-1">
                        {selectedPost.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {selectedPost.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {selectedPost.readTime}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedPost(null);
                        setLoadedContent(null);
                        setLoadingContent(false);
                        if (contentTimerRef.current) window.clearTimeout(contentTimerRef.current);
                      }}
                      className="p-2 rounded-md hover:bg-slate-100"
                      aria-label="Close article"
                    >
                      <X className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>

                  <div className="aspect-video overflow-hidden rounded-lg mb-5">
                    <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="prose max-w-none text-muted-foreground mb-6">
                    <p>{selectedPost.excerpt}</p>
                    {loadingContent && <p className="text-sm text-muted-foreground/80">Loading full article...</p>}
                    {loadedContent && loadedContent.split("\n\n").map((p: string, i: number) => <p key={i}>{p}</p>)}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        setSelectedPost(null);
                        setLoadedContent(null);
                        setLoadingContent(false);
                        if (contentTimerRef.current) window.clearTimeout(contentTimerRef.current);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                    >
                      Close
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
           ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                  onClick={() => openPost(post)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openPost(post);
                  }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="bg-blue-600/10 text-blue-700 mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-blue-50 transition-colors">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        Read Full Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
           )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;

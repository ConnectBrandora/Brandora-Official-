import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-5xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 leading-relaxed">
            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using Brandora's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground">
                Brandora provides digital marketing services including but not limited to SEO, web design, social media management, advertising, branding, and content creation. The specific scope of services will be outlined in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Monthly retainer payments are due at the beginning of each month</li>
                <li>Project-based work requires a 50% deposit upfront</li>
                <li>Late payments may result in service suspension</li>
                <li>All prices are in USD unless otherwise stated</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                Upon full payment, you will own all deliverables created specifically for your project. Brandora retains the right to showcase work in our portfolio unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground">
                Both parties agree to keep confidential any proprietary or sensitive information shared during the course of our business relationship.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">6. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with 30 days written notice. Early termination may result in fees for work completed to date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Brandora shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms & Conditions, contact us at hello@brandora.com
              </p>
            </section>

            <p className="text-sm text-muted-foreground italic">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              Last updated: January 16, 2026
            </p>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Enclava's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">2. Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Enclava provides a confidential AI platform that enables secure processing of sensitive data using Trusted Execution Environments (TEEs). Our services include confidential inference APIs, knowledge base management, agent frameworks, and document processing capabilities.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">3. Account Registration</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To use our services, you must:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                    <li>Notify us immediately of any unauthorized access to your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">4. Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Use our services for any illegal or unauthorized purpose</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt the integrity or performance of our services</li>
                    <li>Reverse engineer, decompile, or disassemble any aspect of our platform</li>
                    <li>Use our services to process data you don't have the right to process</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">5. Data Ownership and Usage</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You retain all rights to your data processed through our platform. We do not claim ownership of your data and will only process it to provide our services. Your data within secure enclaves remains encrypted and inaccessible to Enclava personnel.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">6. Service Level and Availability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to maintain high availability, we do not guarantee uninterrupted access to our services. We may perform maintenance, updates, or modifications that temporarily affect service availability. Enterprise customers may have specific SLA terms in their agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">7. Fees and Payment</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By using our paid services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Pay all fees as described in your service plan</li>
                    <li>Provide accurate billing information</li>
                    <li>Pay invoices within the specified timeframe</li>
                    <li>Be responsible for all applicable taxes</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We reserve the right to suspend or terminate access for non-payment.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">8. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Enclava platform, including all software, documentation, and related materials, is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use our services. You may not copy, modify, or distribute our platform or any portion thereof.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">9. Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of using our services, except as required by law or with prior written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">10. Warranty Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">11. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, ENCLAVA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">12. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Enclava from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">13. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use our services will immediately cease.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">14. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Enclava operates, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">15. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes. Your continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">16. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="text-white mt-4">
                    Email: legal@enclava.ai
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

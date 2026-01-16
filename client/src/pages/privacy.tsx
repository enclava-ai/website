import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              Last updated: January 16, 2026
            </p>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Enclava ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our confidential AI platform and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Account information (name, email address, company details)</li>
                    <li>Payment and billing information</li>
                    <li>Usage data and analytics</li>
                    <li>Communications with our support team</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">3. Data Processing in Secure Enclaves</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data processed through Enclava's confidential computing platform is encrypted in use, at rest, and in transit. We cannot access your data within the secure enclave—this is a core feature of our confidential computing architecture.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">4. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze usage trends</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell your personal information. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>With your consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your information, including the use of Trusted Execution Environments (TEEs), encryption, and access controls. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">7. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time, subject to legal retention requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">8. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">9. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">10. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">11. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">12. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <p className="text-white mt-4">
                    Email: privacy@enclava.ai
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

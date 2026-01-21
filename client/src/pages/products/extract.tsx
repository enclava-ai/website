import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ScanText, FileJson, Lock, CheckCircle, FileText, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Extract() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 -skew-y-3 transform origin-top-left scale-110"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span>DOCUMENT INTELLIGENCE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Confidential <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Document Extract
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Extract and process data from sensitive documents—PII, corporate files, invoices—with AI
                while maintaining complete confidentiality. Predefined and custom templates for structured JSON output.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-started">
                  <Button size="lg" className="h-14 px-8 rounded-none text-base bg-green-500 text-white hover:bg-green-600 transition-all font-mono">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://docs.enclava.ai" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-none text-base border-white/10 hover:bg-white/5 hover:text-white transition-all font-mono">
                    View Documentation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Process Sensitive Documents Without Exposure
              </h2>
              <p className="text-muted-foreground text-lg">
                Upload documents containing PII, financial data, or proprietary information. Our extraction engine
                structures the data using AI—all within the secure enclave.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "PII & Sensitive Data Handling",
                  desc: "Process documents containing personal information, medical records, financial data, and corporate secrets with complete confidentiality."
                },
                {
                  icon: FileJson,
                  title: "Structured JSON Extraction",
                  desc: "Define custom templates to extract specific fields and return structured JSON data ready for your automation workflows."
                },
                {
                  icon: Zap,
                  title: "Predefined Templates",
                  desc: "Use our built-in templates for common document types—invoices, receipts, ID cards, forms—or create your own."
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 bg-card/50">
                  <item.icon className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Automate Document Processing Workflows
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Invoice & Receipt Processing",
                  description: "Automatically extract vendor information, line items, totals, and tax details from invoices and receipts for accounting systems.",
                  features: ["Vendor identification", "Line item extraction", "Total calculation validation"]
                },
                {
                  title: "Identity Document Verification",
                  description: "Process driver's licenses, passports, and ID cards to extract personal information for KYC compliance without exposing PII.",
                  features: ["Name & DOB extraction", "Document number capture", "Photo extraction"]
                },
                {
                  title: "Medical Records Processing",
                  description: "Extract patient information, diagnoses, medications, and treatment plans from medical documents while maintaining HIPAA compliance.",
                  features: ["Patient data extraction", "Diagnosis codes", "Medication lists"]
                },
                {
                  title: "Contract & Legal Document Analysis",
                  description: "Extract key terms, dates, parties, and clauses from contracts and legal documents to populate contract management systems.",
                  features: ["Party identification", "Key date extraction", "Clause detection"]
                },
                {
                  title: "Form Data Extraction",
                  description: "Process filled forms—applications, surveys, claims—and extract responses into structured data for downstream processing.",
                  features: ["Field mapping", "Checkbox detection", "Signature verification"]
                },
                {
                  title: "Corporate Document Management",
                  description: "Extract metadata and content from internal documents—memos, reports, presentations—to build searchable document repositories.",
                  features: ["Metadata extraction", "Content classification", "Full-text indexing"]
                }
              ].map((useCase, i) => (
                <div key={i} className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-green-500/20 transition-colors">
                  <h3 className="text-xl font-display font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Template System */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                  Custom Template System
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Define exactly what data you need extracted and in what format. Our AI-powered extraction adapts
                  to your specific document types and output requirements.
                </p>
                <ul className="space-y-4">
                  {[
                    "Define custom extraction schemas with JSON templates",
                    "Specify field types, validation rules, and formats",
                    "Use predefined templates or create your own",
                    "Support for complex nested data structures",
                    "Built-in validation and error handling"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mr-4 mt-0.5 font-mono text-sm">
                        {i + 1}
                      </div>
                      <span className="mt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-3xl"></div>
                <div className="relative bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
                  <div className="flex items-center px-4 py-2 border-b border-white/10 bg-white/5">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">invoice-template.json</div>
                  </div>
                  <div className="p-6 text-gray-300 overflow-x-auto">
                    <pre className="text-xs">{`{
  "template": "invoice",
  "fields": {
    "vendor": {
      "type": "object",
      "fields": {
        "name": "string",
        "address": "string",
        "tax_id": "string"
      }
    },
    "invoice_number": "string",
    "invoice_date": "date",
    "due_date": "date",
    "line_items": {
      "type": "array",
      "items": {
        "description": "string",
        "quantity": "number",
        "unit_price": "number",
        "total": "number"
      }
    },
    "subtotal": "number",
    "tax": "number",
    "total": "number"
  },
  "validation": {
    "total": "subtotal + tax"
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Built for Automation Workflows
              </h2>
              <p className="text-muted-foreground text-lg">
                Enclava Extract is designed to integrate seamlessly into your existing automation pipelines.
                Upload documents via API, get structured JSON responses, and feed them directly into your systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "REST API", desc: "Simple HTTP endpoints for document upload and processing" },
                { title: "Webhook Support", desc: "Get notified when processing completes" },
                { title: "Batch Processing", desc: "Process multiple documents in parallel" },
                { title: "Structured Output", desc: "Receive clean JSON ready for your systems" }
              ].map((feature, i) => (
                <div key={i} className="p-6 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-display font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to process confidential documents?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start extracting data from sensitive documents with AI-powered extraction that respects privacy.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/get-started">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-green-500 text-white hover:bg-green-600 transition-all font-mono">
                  Get Started
                </Button>
              </Link>
              <a href="https://docs.enclava.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-none text-base border-white/20 hover:border-green-500 hover:text-green-400 transition-all font-mono">
                  View Documentation
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

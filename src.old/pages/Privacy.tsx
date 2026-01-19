import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tocItems = [
  { id: "summary", title: "Summary of Key Points" },
  { id: "information", title: "What Information Do We Collect?" },
  { id: "processing", title: "How Do We Process Your Information?" },
  { id: "legal-bases", title: "Legal Bases for Processing" },
  { id: "sharing", title: "When and With Whom Do We Share Data?" },
  { id: "third-party", title: "Third-Party Websites" },
  { id: "apple-app-store", title: "Apple App Store and In-App Purchases" },
  { id: "apple-health", title: "Apple Health Data" },
  { id: "international", title: "International Transfers" },
  { id: "retention", title: "Data Retention" },
  { id: "security", title: "Data Security" },
  { id: "children", title: "Children's Data" },
  { id: "rights", title: "Your Privacy Rights" },
  { id: "do-not-track", title: "Do-Not-Track Signals" },
  { id: "regional", title: "Regional Rights" },
  { id: "updates", title: "Updates to This Policy" },
  { id: "contact", title: "Contact Us" },
  { id: "manage", title: "Manage Your Data" },
];

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-playfair mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: September 17, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Hidden on mobile */}
              <aside className="hidden lg:block">
                <TableOfContents items={tocItems} />
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="summary" id="summary" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Summary of Key Points
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>This Privacy Policy for Roman Co Ltd., a company incorporated under the laws of Canada and registered in Alberta, doing business as Peak Height ("Peak Height," "we," "us," or "our") explains how and why we collect, store, use, and share ("process") your information when you use our services ("Services"), such as when you:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Download and use our mobile application (Peak Height), or any other application of ours that links to this Privacy Policy</li>
                        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                      </ul>
                      <p>Questions or concerns? Reading this Privacy Policy will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. For further questions, please contact us at <a href="mailto:usepeakheight@gmail.com" className="text-primary hover:underline">usepeakheight@gmail.com</a>.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="information" id="information" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      What Information Do We Collect?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We collect personal information you provide, such as size and weight, gender, age, ethnicity, parent height, shoe size, training routines, sleep habits, and email address. We do not collect biometric data such as facial recognition. Payment data is processed by Apple or Google; we do not store card details. If enabled, we may send push notifications. Automatically collected information includes device type, operating system, IP address, crash logs, usage data, and session times.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="processing" id="processing" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      How Do We Process Your Information?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We process data to predict growth patterns, enhance app features, personalize your experience, and provide AI-powered chatbot interactions through OpenAI's API. Chatbot conversations are processed in real time and not stored on our servers. Users should avoid sharing sensitive information with the chatbot.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="legal-bases" id="legal-bases" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Legal Bases for Processing
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We only process data when we have a valid legal basis, such as consent, legal obligations, or legitimate interests like service improvement and fraud prevention. For users in Canada, the EU, UK, or other regulated regions, additional protections apply.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="sharing" id="sharing" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      When and With Whom Do We Share Data?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We may share information with service providers such as analytics and cloud storage providers, bound by data-protection agreements. We may also share data during business transfers such as mergers or acquisitions. We do not sell personal information.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="third-party" id="third-party" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Third-Party Websites
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>The App may link to third-party websites or services. We are not responsible for their privacy practices, and users should review their policies.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="apple-app-store" id="apple-app-store" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Apple App Store and In-App Purchases
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>When you download our app through the Apple App Store or make in-app purchases, Apple may collect certain information about you and your transactions. This information is subject to Apple's Privacy Policy, which is separate from our Privacy Policy. We encourage you to review Apple's Privacy Policy to understand how Apple handles your information.</p>
                      <p>We do not store or have access to your payment information, as all in-app purchases are processed by Apple through your Apple ID account. Apple handles all payment processing and billing in accordance with their terms and privacy policy.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="apple-health" id="apple-health" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Apple Health Data
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>If you choose to integrate with Apple Health, we may access health data you explicitly authorize. This data is used solely for app functionality and is not shared with third parties. You can revoke this access at any time through your device settings.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="international" id="international" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      International Transfers
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>Your information may be transferred outside your home country. For EEA and UK users, we use Standard Contractual Clauses or equivalent safeguards to ensure protection.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="retention" id="retention" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Data Retention
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We keep personal information as long as necessary. Account data is deleted within 30 days of account deletion unless required by law. Payment data is retained only for transactions and audits. Analytics data may be kept for up to 12 months.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="security" id="security" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Data Security
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We use encryption, access controls, firewalls, and monitoring to protect data. However, no method is fully secure. Users should use strong passwords and protect their devices.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="children" id="children" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Children's Data
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We do not knowingly collect information from children under 13 or under the age of consent in your jurisdiction. If we learn such data has been collected, we will delete it. Parents may contact us at <a href="mailto:usepeakheight@gmail.com" className="text-primary hover:underline">usepeakheight@gmail.com</a> for removal requests.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="rights" id="rights" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Your Privacy Rights
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing of your data, and to withdraw consent. To exercise rights, contact us at <a href="mailto:usepeakheight@gmail.com" className="text-primary hover:underline">usepeakheight@gmail.com</a>.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="do-not-track" id="do-not-track" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Do-Not-Track Signals
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We do not currently respond to browser Do-Not-Track signals. If standards change, this policy will be updated.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="regional" id="regional" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Regional Rights
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We comply with Canadian law (PIPEDA), EU and UK GDPR, and applicable US state laws such as CCPA. In other regions, we align with local privacy requirements.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="updates" id="updates" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Updates to This Policy
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>We may update this Privacy Policy periodically. The revised date will indicate when updates take effect. If changes are material, we may notify you through the app or by email.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="contact" id="contact" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Contact Us
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>If you have questions, contact us at:</p>
                      <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                        <p><strong className="text-foreground">Roman Co Ltd. (Peak Height)</strong></p>
                        <p>Email: <a href="mailto:usepeakheight@gmail.com" className="text-primary hover:underline">usepeakheight@gmail.com</a></p>
                        <p>Address: 12153 Fort Rd NW, Edmonton, AB T5B 4H2</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="manage" id="manage" className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-xl font-playfair hover:no-underline hover:text-primary">
                      Manage Your Data
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>You can review or delete your data through account settings in the App. Data is permanently deleted within 30 days of account deletion, unless required by law.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;

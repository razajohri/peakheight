import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 PeakHeight. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Dialog>
              <DialogTrigger className="transition-colors hover:text-primary font-medium">
                Privacy Policy
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair">Privacy Policy</DialogTitle>
                  <p className="text-sm text-muted-foreground">Last updated: September 17, 2025</p>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="summary" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        Summary of Key Points
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>This Privacy Policy explains how and why we collect, store, use, and share your information when you use our services.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="information" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        What Information Do We Collect?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>We collect personal information you provide, such as size, weight, gender, age, and email. Payment data is processed by Apple or Google.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="processing" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        How Do We Process Your Information?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>We process data to predict growth patterns, enhance app features, and personalize your experience.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="contact" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        Contact Us
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Roman Co Ltd. (Peak Height)</strong></p>
                        <p>Email: <a href="mailto:usepeakheight@gmail.com" className="text-primary hover:underline">usepeakheight@gmail.com</a></p>
                        <p>Address: 12153 Fort Rd NW, Edmonton, AB T5B 4H2</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="mt-4">
                    <Link to="/privacy" className="text-sm text-primary hover:underline">
                      View full Privacy Policy →
                    </Link>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="transition-colors hover:text-primary font-medium">
                Terms of Service
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair">Terms of Service</DialogTitle>
                  <p className="text-sm text-muted-foreground">Last updated: September 17, 2025</p>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="agreement" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        Agreement to Terms
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>These Terms of Service are a legally binding agreement between you and Peak Height governing your access to and use of the Peak Height mobile application.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="subscription" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        Subscription Terms
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>PeakHeight Premium Weekly:</strong> $4.99/week</p>
                        <p><strong>PeakHeight Premium Yearly:</strong> $29.99/year</p>
                        <p className="mt-2"><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period. Payment charged to iTunes Account at confirmation of purchase.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="intellectual" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        Intellectual Property Rights
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>All content within the App is owned by or licensed to Peak Height. Unauthorized use is prohibited.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="contact" className="border border-border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        Contact Information
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>Email: <a href="mailto:usepeakheight@gmail.com" className="text-primary hover:underline">usepeakheight@gmail.com</a></p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="mt-4">
                    <Link to="/terms" className="text-sm text-primary hover:underline">
                      View full Terms of Service →
                    </Link>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <a 
              href="mailto:usepeakheight@gmail.com"
              className="transition-colors hover:text-primary font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

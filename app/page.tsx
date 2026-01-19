"use client";

import { useRef } from "react";
import Link from "next/link";
import { HeroText } from "@/components/animated-text/HeroText";
import { AnimatedText } from "@/components/animated-text/AnimatedText";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Zap, Target, Camera, Users, CheckCircle2, Star, Award, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { ScrollReveal, Parallax, SectionNumber, StaggerContainer, StaggerItem, MagneticButton } from "@/components/ScrollAnimations";
import { SectionDivider } from "@/components/SectionDivider";
import { posts } from "./blog/posts";

const appTodayScreen = "/assets/app-today-screen.svg";
const appHubScreen = "/assets/app-hub-screen.svg";
const appProgressScreen = "/assets/app-progress-screen.svg";
const markProfile = "/assets/mark-profile.jpg";
const moProfile = "/assets/mo-profile.png";
const sevaProfile = "/assets/seva-profile.png";
const userAlly = "/assets/user-ally.png";
const userMark = "/assets/user-mark.jpg";
const userMo = "/assets/user-mo.png";
const userSeva = "/assets/user-seva.png";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usepeakheight.com";
const appStoreUrl = "https://apps.apple.com/us/app/peak-height/id6752793377";

const faqItems = [
  {
    q: "How long until I see results?",
    a: "Most users notice posture improvements within 2-3 weeks. Measurable height gains typically appear after 2-3 months of consistent daily routines. Results vary based on age, genetics, and commitment.",
  },
  {
    q: "Is this scientifically proven?",
    a: "Yes! Our methods are based on peer-reviewed research in orthopedics, sports science, and nutrition. We focus on maximizing natural growth through proven factors: exercise, nutrition, sleep, and posture.",
  },
  {
    q: "What age does this work for?",
    a: "Best results are for ages 14-25 during active growth phases. However, adults of any age can benefit from improved posture, spine decompression, and better habits that maximize their natural height potential.",
  },
  {
    q: "Can I really grow taller?",
    a: "While genetics play a role, most people have 1-3 inches of untapped potential through posture correction, spine decompression, and optimized growth factors. We help you reach YOUR maximum natural height.",
  },
  {
    q: "What makes Peak Height different?",
    a: "We're the only app combining all 4 growth factors in one place: exercises, nutrition, sleep, and posture. Plus, our AI tracking, community support, and streak-based motivation keep you consistent—the key to results.",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const latestPosts = posts.slice(0, 3);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PeakHeight",
      url: siteUrl,
      logo: `${siteUrl}/assets/peakheight-logo.png`,
      sameAs: [appStoreUrl],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PeakHeight",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/blog?query={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];
  
  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      <Header />
      
      <main className="flex-1">
        <script
          type="application/ld+json"
          // JSON-LD must be a string for injection.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Hero Section with Animated Text */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-border">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-5xl text-center mb-16">
              <HeroText
                mainText="Reach your Peak Height"
                subText="Height isn't just inherited, it's earned"
              />
              
              <motion.div
                className="flex flex-col items-center gap-6 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg h-14 px-8 bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <a
                      href={appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Peak Height
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground/80 text-center max-w-xs md:max-w-[200px]">
                    📱 Coming from TikTok? Hold the "Download" button and select "Open in Browser"
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center -space-x-3">
                    {[userAlly, userMark, userSeva, userMo].map((src, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 + i * 0.1, duration: 0.4 }}
                      >
                        <Avatar className="w-12 h-12 border-4 border-background">
                          <AvatarImage src={src} alt="User testimonial" />
                        </Avatar>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.4 }}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-foreground text-foreground"
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* App Screenshots with 3D effect */}
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center justify-items-center">
                <motion.div
                  className="transform md:rotate-[-8deg]"
                  whileHover={{ rotate: -4, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={appTodayScreen}
                    alt="Peak Height Today Screen"
                    width={280}
                    height={600}
                    className="rounded-[2.5rem] shadow-2xl w-full max-w-[280px] border-8 border-foreground/10"
                    loading="lazy"
                    quality={85}
                  />
                </motion.div>
                <motion.div
                  className="transform md:scale-110 z-10"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={appHubScreen}
                    alt="Peak Height Hub"
                    width={280}
                    height={600}
                    className="rounded-[2.5rem] shadow-2xl w-full max-w-[280px] border-8 border-foreground/10"
                    loading="lazy"
                    quality={85}
                  />
                </motion.div>
                <motion.div
                  className="transform md:rotate-[8deg]"
                  whileHover={{ rotate: 4, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={appProgressScreen}
                    alt="Peak Height Progress"
                    width={280}
                    height={600}
                    className="rounded-[2.5rem] shadow-2xl w-full max-w-[280px] border-8 border-foreground/10"
                    loading="lazy"
                    quality={85}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 01 - Benefits */}
        <SectionDivider number="01" title="Features" />
        <section className="py-20 md:py-32 border-b border-border relative">
          {/* Background number */}
          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 pointer-events-none z-0">
            <SectionNumber number="01" />
          </div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">
                <AnimatedText
                  text="Everything You Need to Maximize Your Height"
                  variant="reveal"
                  delay={0}
                  duration={1}
                />
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
                <AnimatedText
                  text="A complete growth system designed by experts"
                  variant="gradient"
                  delay={0.5}
                />
              </p>
            </div>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                {[
                  {
                    icon: Zap,
                    title: "Daily Growth Routines",
                    description:
                      "Personalized daily tasks: exercises, stretching, nutrition, sleep tracking with streak motivation",
                  },
                  {
                    icon: Target,
                    title: "Expert Exercise Library",
                    description:
                      "100+ scientifically-proven exercises targeting posture, spine decompression, and growth stimulation",
                  },
                  {
                    icon: Camera,
                    title: "Smart Nutrition Tracking",
                    description:
                      "AI-powered food recognition, growth-optimized meal plans, and protein/calcium-rich recipes",
                  },
                  {
                    icon: Users,
                    title: "Community Support",
                    description:
                      "Join the Tribe: share progress, get motivated, and celebrate wins with fellow height-growers",
                  },
                ].map((benefit, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg relative overflow-hidden z-20"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                      <div className="relative z-10">
                        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <benefit.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-semibold font-playfair mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 02 - How It Works */}
        <SectionDivider number="02" title="Process" />
        <section className="py-20 md:py-32 border-b border-border bg-muted/20 relative">
          {/* Background number */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none z-0">
            <SectionNumber number="02" />
          </div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">
                <AnimatedText text="How It Works" variant="wave" delay={0} />
              </h2>
              <p className="text-xl text-muted-foreground mt-6">
                Start your growth journey in 3 simple steps
              </p>
            </div>

            <StaggerContainer staggerDelay={0.15}>
              <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Set Your Goal",
                  description:
                    "Enter your current height and growth target to personalize your journey",
                },
                {
                  number: "2",
                  title: "Follow Your Routine",
                  description:
                    "Complete daily tasks: exercises, nutrition, sleep - build your streak!",
                },
                {
                  number: "3",
                  title: "Track Progress",
                  description:
                    "Watch your height increase with weekly measurements and progress photos",
                },
              ].map((step, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center group relative"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold relative overflow-hidden"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      <span className="relative z-10">{step.number}</span>
                    </motion.div>
                    <h3 className="text-2xl font-semibold font-playfair mb-3">
                      <AnimatedText
                        text={step.title}
                        variant="split"
                        delay={0}
                        duration={0.6}
                      />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
              </div>
            </StaggerContainer>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 03 - Social Proof */}
        <SectionDivider number="03" title="Testimonials" />
        <section className="py-20 md:py-32 border-b border-border relative">
          {/* Background number */}
          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 pointer-events-none z-0">
            <SectionNumber number="03" />
          </div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">
                <AnimatedText
                  text="Trusted by Thousands Growing Taller"
                  variant="reveal"
                  delay={0}
                  duration={1}
                />
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2 mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 fill-foreground text-foreground"
                  />
                ))}
              </div>
              <p className="text-xl text-muted-foreground">4.8/5 stars from real users</p>
            </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    name: "Mark M.",
                    image: markProfile,
                    review:
                      '"The daily reminders are a game changer. Makes it so much easier to stay consistent with exercise"',
                  },
                  {
                    name: "Mo D.",
                    image: moProfile,
                    review: '"Didn\'t think an app could motivate me like this."',
                  },
                  {
                    name: "Seva J.",
                    image: sevaProfile,
                    review: '"Really impressed with how smooth the app is."',
                  },
                ].map((testimonial, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden group"
                      whileHover={{ y: -8, borderColor: "hsl(var(--primary))", scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      <div className="relative z-10">
                        <Avatar className="w-16 h-16 mb-4 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        </Avatar>
                        <div className="flex items-center gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <motion.div
                              key={star}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: index * 0.15 + star * 0.05, duration: 0.3 }}
                            >
                              <Star
                                className="w-4 h-4 fill-foreground text-foreground"
                              />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {testimonial.review}
                        </p>
                        <p className="font-semibold">— {testimonial.name}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">
                    Users report 1-3 inches growth in 6 months
                  </strong>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 04 - Science */}
        <SectionDivider number="04" title="Science" />
        <section className="py-20 md:py-32 border-b border-border bg-muted/20 relative">
          {/* Background number */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none z-0">
            <SectionNumber number="04" />
          </div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360, scale: 1.1 }}
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
                <AnimatedText
                  text="Built on Real Science, Not False Promises"
                  variant="glitch"
                  delay={0}
                />
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Evidence-based approach combining orthopedic research and growth
                optimization
              </p>

              <StaggerContainer>
                <div className="grid gap-6 md:grid-cols-4 mb-12">
                  {[
                    { icon: TrendingUp, title: "Exercise", desc: "Targeted movements" },
                    { icon: Camera, title: "Nutrition", desc: "Growth-optimized" },
                    { icon: Zap, title: "Sleep", desc: "Recovery tracking" },
                    { icon: Target, title: "Posture", desc: "Alignment focus" },
                  ].map((item, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="p-6 rounded-xl bg-card border border-border group relative overflow-hidden"
                        whileHover={{ scale: 1.08, y: -5, borderColor: "hsl(var(--primary))" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={false}
                        />
                        <motion.div
                          className="relative z-10"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <item.icon className="w-8 h-8 mx-auto mb-3" />
                        </motion.div>
                        <div className="relative z-10">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 05 - Blog */}
        <SectionDivider number="05" title="Blog" />
        <section className="py-20 md:py-32 border-b border-border relative">
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">
                  <AnimatedText
                    text="Height Growth Guides and Tips"
                    variant="reveal"
                    delay={0}
                    duration={1}
                  />
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
                  Explore practical advice on posture, exercises, nutrition, and sleep.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {latestPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
                  >
                    <p className="text-xs text-muted-foreground mb-2">
                      {post.date} • {post.readTime}
                    </p>
                    <h3 className="text-xl font-semibold font-playfair mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
                  View all blog articles →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-12 text-center">
                <AnimatedText
                  text="Frequently Asked Questions"
                  variant="shimmer"
                  delay={0}
                />
              </h2>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.details
                    key={index}
                    className="group p-6 rounded-xl border border-border bg-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                      {faq.q}
                      <span className="group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


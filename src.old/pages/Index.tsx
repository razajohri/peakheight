import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Zap, Target, Camera, Users, CheckCircle2, Smartphone, TrendingUp, Award, Star } from "lucide-react";
import appTodayScreen from "@/assets/app-today-screen.png";
import appHubScreen from "@/assets/app-hub-screen.png";
import appProgressScreen from "@/assets/app-progress-screen.png";
import markProfile from "@/assets/mark-profile.jpg";
import moProfile from "@/assets/mo-profile.png";
import sevaProfile from "@/assets/seva-profile.png";
import userMark from "@/assets/user-mark.jpg";
import userMo from "@/assets/user-mo.png";
import userSeva from "@/assets/user-seva.png";
import userAlly from "@/assets/user-ally.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with App Screenshots */}
        <section className="relative py-12 md:py-16 overflow-hidden border-b border-border bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent blur-3xl" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl text-center animate-fade-in mb-16">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-playfair mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight pb-2">
                Reach your Peak Height
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Height isn't just inherited, it's earned
              </p>
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <Button asChild size="lg" className="text-lg h-14 px-8 bg-foreground text-background hover:bg-foreground/90 shadow-lg">
                    <a href="https://apps.apple.com/us/app/peak-height/id6752793377" target="_blank" rel="noopener noreferrer">
                      Download Peak Height
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground/80 text-center max-w-xs md:max-w-[200px]">
                    📱 Coming from TikTok? Hold the "Download" button and select "Open in Browser"
                  </p>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center -space-x-3">
                    <Avatar className="w-12 h-12 border-4 border-background">
                      <AvatarImage src={userAlly} alt="User testimonial" />
                    </Avatar>
                    <Avatar className="w-12 h-12 border-4 border-background">
                      <AvatarImage src={userMark} alt="User testimonial" />
                    </Avatar>
                    <Avatar className="w-12 h-12 border-4 border-background">
                      <AvatarImage src={userSeva} alt="User testimonial" />
                    </Avatar>
                    <Avatar className="w-12 h-12 border-4 border-background">
                      <AvatarImage src={userMo} alt="User testimonial" />
                    </Avatar>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-foreground" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-3 gap-4 md:gap-8 items-center justify-items-center">
                <div className="transform md:rotate-[-8deg] md:hover:rotate-[-4deg] transition-transform duration-300 md:hover:scale-105">
                  <img 
                    src={appTodayScreen} 
                    alt="Peak Height Today Screen - Track daily streaks and growth tasks"
                    className="rounded-[2.5rem] shadow-2xl w-full max-w-[280px] border-8 border-foreground/10"
                  />
                </div>
                <div className="transform md:scale-110 md:hover:scale-115 transition-transform duration-300 z-10">
                  <img 
                    src={appHubScreen} 
                    alt="Peak Height Hub - Browse exercises by skill level and body area"
                    className="rounded-[2.5rem] shadow-2xl w-full max-w-[280px] border-8 border-foreground/10"
                  />
                </div>
                <div className="transform md:rotate-[8deg] md:hover:rotate-[4deg] transition-transform duration-300 md:hover:scale-105">
                  <img 
                    src={appProgressScreen} 
                    alt="Peak Height Progress - Monitor growth factors and height journey"
                    className="rounded-[2.5rem] shadow-2xl w-full max-w-[280px] border-8 border-foreground/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                Everything You Need to Maximize Your Height
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A complete growth system designed by experts
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Daily Growth Routines</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Personalized daily tasks: exercises, stretching, nutrition, sleep tracking with streak motivation
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Expert Exercise Library</h3>
                <p className="text-muted-foreground leading-relaxed">
                  100+ scientifically-proven exercises targeting posture, spine decompression, and growth stimulation
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Camera className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Smart Nutrition Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI-powered food recognition, growth-optimized meal plans, and protein/calcium-rich recipes
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Community Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join the Tribe: share progress, get motivated, and celebrate wins with fellow height-growers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Start your growth journey in 3 simple steps
              </p>
            </div>
            
            <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Set Your Goal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enter your current height and growth target to personalize your journey
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Follow Your Routine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete daily tasks: exercises, nutrition, sleep - build your streak!
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-semibold font-playfair mb-3">Track Progress</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Watch your height increase with weekly measurements and progress photos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                Trusted by Thousands Growing Taller
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-foreground" />
                ))}
              </div>
              <p className="text-xl text-muted-foreground">
                4.8/5 stars from real users
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl border border-border bg-card">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarImage src={markProfile} alt="Mark M." />
                </Avatar>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "The daily reminders are a game changer. Makes it so much easier to stay consistent with exercise"
                </p>
                <p className="font-semibold">— Mark M.</p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarImage src={moProfile} alt="Mo D." />
                </Avatar>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Didn't think an app could motivate me like this."
                </p>
                <p className="font-semibold">— Mo D.</p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarImage src={sevaProfile} alt="Seva J." />
                </Avatar>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Really impressed with how smooth the app is."
                </p>
                <p className="font-semibold">— Seva J.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Users report 1-3 inches growth in 6 months</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Science-Backed Section */}
        <section className="py-20 md:py-32 border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
                Built on Real Science, Not False Promises
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Evidence-based approach combining orthopedic research and growth optimization
              </p>
              
              <div className="grid gap-6 md:grid-cols-4 mb-12">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Exercise</h3>
                  <p className="text-sm text-muted-foreground">Targeted movements</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Camera className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Nutrition</h3>
                  <p className="text-sm text-muted-foreground">Growth-optimized</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Zap className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Sleep</h3>
                  <p className="text-sm text-muted-foreground">Recovery tracking</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Target className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Posture</h3>
                  <p className="text-sm text-muted-foreground">Alignment focus</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-20 md:py-32 border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    How long until I see results?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Most users notice posture improvements within 2-3 weeks. Measurable height gains typically appear after 2-3 months of consistent daily routines. Results vary based on age, genetics, and commitment.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    Is this scientifically proven?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Yes! Our methods are based on peer-reviewed research in orthopedics, sports science, and nutrition. We focus on maximizing natural growth through proven factors: exercise, nutrition, sleep, and posture.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    What age does this work for?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Best results are for ages 14-25 during active growth phases. However, adults of any age can benefit from improved posture, spine decompression, and better habits that maximize their natural height potential.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    Can I really grow taller?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    While genetics play a role, most people have 1-3 inches of untapped potential through posture correction, spine decompression, and optimized growth factors. We help you reach YOUR maximum natural height.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-border bg-card">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    What makes Peak Height different?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We're the only app combining all 4 growth factors in one place: exercises, nutrition, sleep, and posture. Plus, our AI tracking, community support, and streak-based motivation keep you consistent—the key to results.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/peakheight-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pt-[env(safe-area-inset-top)]">
      <div className="container flex min-h-16 items-center justify-between px-4 md:px-6 py-2">
        <Link to="/" className="flex items-center space-x-2 transition-colors hover:opacity-80">
          <img src={logo} alt="Peak Height Logo" className="h-8 w-8" />
          <span className="text-xl font-bold font-playfair">Peak Height</span>
        </Link>
        <div className="flex flex-col items-end gap-1.5">
          <div className="bg-primary/10 border border-primary/20 rounded-md px-2.5 py-1.5 text-center">
            <p className="text-[10px] font-bold text-primary leading-tight">📱 TikTok Users</p>
            <p className="text-[9px] text-foreground font-medium leading-tight">Hold button ↓ then "Open in Browser"</p>
          </div>
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <a href="https://apps.apple.com/us/app/peak-height/id6752793377" target="_blank" rel="noopener noreferrer">
              Download App
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

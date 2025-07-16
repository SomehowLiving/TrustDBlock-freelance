
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="TrustDBlock Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="font-bold text-xl hidden md:inline-block">TrustDBlock</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild size="sm">
              <Link to="/connect">Connect Wallet</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/signup">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background border-t p-6 flex flex-col gap-6 animate-fade-in">
          <Link 
            to="/" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/marketplace" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/connect">Connect Wallet</Link>
            </Button>
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/signup">Get Started</Link>
            </Button>
            <div className="flex justify-center mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

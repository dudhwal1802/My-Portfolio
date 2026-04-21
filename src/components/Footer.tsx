import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = 'April 21, 2026';

  return (
    <footer className="py-8 md:py-10 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Left Section - Info */}
          <div className="text-center md:text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Last updated</p>
            <p className="text-sm font-semibold text-foreground">{lastUpdated}</p>
          </div>

          {/* Center Section - Credit */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>© {currentYear} Chandrabhan</span>
            <span className="text-primary">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-primary fill-current" />
            </span>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/dudhwal1802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/50 backdrop-blur-md border border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/chandrabhan1802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/50 backdrop-blur-md border border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact.chandrabhan@gmail.com"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/50 backdrop-blur-md border border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground/80">
            Designed for professional impact • React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

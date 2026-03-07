import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { scrollToHash } from '@/lib/scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = 'March 7, 2026';

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Chandrabhan. All rights reserved.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full md:w-auto">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash('#home', { durationMs: 350 });
                  window.history.pushState(null, '', '#home');
                }}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </a>

              <a
                href="https://github.com/dudhwal1802"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/chandrabhan1802"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact.chandrabhan@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center border-t border-border pt-4">
            <p className="text-sm text-muted-foreground">
              Last updated on <span className="text-foreground font-medium">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

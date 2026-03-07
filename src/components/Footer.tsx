import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = 'March 7, 2026';

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-border/60 pt-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Last updated on <span className="text-foreground font-medium">{lastUpdated}</span>
            </p>

            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Chandrabhan. All rights reserved.
            </p>

            <div className="flex items-center justify-center md:justify-end gap-2">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

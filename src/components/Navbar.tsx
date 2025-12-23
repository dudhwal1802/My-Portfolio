import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of navLinks) {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleSectionSpy);
    handleSectionSpy();

    return () => window.removeEventListener('scroll', handleSectionSpy);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-card/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
      aria-label="Primary"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          >
            Chandrabhan<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                (() => {
                  const id = link.href.replace('#', '');
                  const isActive = activeSection === id;
                  return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-medium transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
                  );
                })()
              ))}
            </div>
            <Button variant="hero" size="default" asChild>
              <a href={`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`} download>
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border bg-card/95 backdrop-blur-md">
            {navLinks.map((link) => (
              (() => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`font-medium transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </a>
                );
              })()
            ))}
            <div className="flex gap-3 pt-4">
              <Button variant="hero" size="default" className="flex-1" asChild>
                <a href={`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`} download>
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

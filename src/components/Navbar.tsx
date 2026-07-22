import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToHash } from '@/lib/scroll';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#publications', label: 'Publications' },
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

  const handleNavClick = (hash: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    scrollToHash(hash, { durationMs: 350 });
    window.history.pushState(null, '', hash);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_16px_40px_rgba(124,58,237,0.10)] border-b border-primary/10'
          : 'bg-transparent'
      }`}
      aria-label="Primary"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between h-16 md:h-20 ${scrolled || isOpen ? 'md:px-4' : ''}`}>
          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick('#home')}
            className="group flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(124,58,237,0.18)] transition-transform group-hover:scale-105">
              C
            </span>
            <span className="leading-none">
              Chandrabhan<span className="text-primary">.</span>
              <span className="hidden sm:block text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground mt-1">
                Research Analyst
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-white/55 backdrop-blur-md px-3 py-2 shadow-sm">
              {navLinks.map((link) => (
                (() => {
                  const id = link.href.replace('#', '');
                  const isActive = activeSection === id;
                  return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </a>
                  );
                })()
              ))}
            </div>
            <Button variant="hero" size="default" className="shadow-[0_16px_36px_rgba(124,58,237,0.18)]" asChild>
              <a href={`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`} download>
                <Download className="w-4 h-4 text-primary-foreground" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-primary hover:bg-white/70 hover:backdrop-blur-md hover:border hover:border-primary/20 transition-all rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-sm"
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
          <div className="mt-3 flex flex-col gap-3 rounded-3xl border border-primary/10 bg-white/80 backdrop-blur-2xl p-4 shadow-[0_16px_36px_rgba(124,58,237,0.10)]">
            {navLinks.map((link) => (
              (() => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </a>
                );
              })()
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="hero" size="default" className="flex-1" asChild>
                <a href={`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`} download>
                  <Download className="w-4 h-4 text-primary-foreground" />
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

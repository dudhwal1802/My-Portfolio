import { Github, Linkedin, Mail, Download, MessageCircle, Briefcase, BarChart3, GraduationCap, FolderKanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';
import AnimatedBackground from '@/components/AnimatedBackground';
import { scrollToHash } from '@/lib/scroll';

const quickStats = [
  {
    label: 'Current Role',
    value: 'Data Analyst Intern',
    icon: Briefcase,
  },
  {
    label: 'Core Focus',
    value: 'Analytics & Reporting',
    icon: BarChart3,
  },
  {
    label: 'Projects',
    value: '3 Featured Builds',
    icon: FolderKanban,
  },
  {
    label: 'Academic Track',
    value: 'MCA Ongoing',
    icon: GraduationCap,
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-up">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/90 backdrop-blur-sm text-accent-foreground text-sm font-medium interactive-card-soft">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to Work
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium interactive-card-soft">
                <Briefcase className="w-4 h-4" />
                Data Analyst Intern at Uptoskills
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">Chandrabhan</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4">
              MCA Student | Data Analyst Intern | Data-Driven Problem Solver
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              I build practical digital solutions and work with data to uncover patterns, improve clarity, and support better decisions. Based in Rajasthan, India.
            </p>

            <p className="text-base text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              My portfolio combines analytics-focused thinking, web project execution, and continuous learning in areas like reporting, machine learning, and responsive product building.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href={`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`} download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash('#experience', { durationMs: 350 });
                    window.history.pushState(null, '', '#experience');
                  }}
                >
                  <Briefcase className="w-5 h-5" />
                  View Experience
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash('#contact', { durationMs: 350 });
                    window.history.pushState(null, '', '#contact');
                  }}
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href="https://wa.me/919660880910?text=Hello%20Chandrabhan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex gap-3">
                <Button variant="social" size="icon" asChild>
                  <a
                    href="https://github.com/dudhwal1802"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="social" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/chandrabhan1802"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="social" size="icon" asChild>
                  <a
                    href="mailto:contact.chandrabhan@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:auto-rows-fr gap-4 mt-10">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border section-card-surface p-5 text-left shadow-card h-full min-h-[140px] flex flex-col interactive-card-soft"
                >
                  <div className="inline-flex rounded-xl bg-accent p-2.5 mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground leading-snug mt-auto">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-scale-in stagger-2">
            <div className="relative animate-float-soft">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full gradient-primary opacity-20 blur-2xl animate-pulse-slow" />
              <div className="absolute -inset-1 rounded-full gradient-primary opacity-30" />
              
              <img
                src={profilePhoto}
                alt="Chandrabhan - MCA Student & Developer"
                width={384}
                height={384}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-card shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

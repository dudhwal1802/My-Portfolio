import { Github, Linkedin, Mail, Download, MessageCircle, Briefcase, BarChart3, GraduationCap, FolderKanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';
import AnimatedBackground from '@/components/AnimatedBackground';
import { scrollToHash } from '@/lib/scroll';

const quickStats = [
  {
    label: 'Current Role',
    value: 'Research Analyst',
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
    value: 'MCA 75.80%',
    icon: GraduationCap,
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero pt-24 lg:pt-28 overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-up">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-primary text-sm font-medium interactive-card-soft border border-primary/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Currently Working at Arcgate Technologies
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-primary/30 text-primary text-sm font-medium interactive-card-soft hover:bg-white/80 hover:border-primary/50 transition-all">
                <Briefcase className="w-4 h-4 text-primary" />
                Research Analyst | Arcgate Technologies, Udaipur
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">Chandrabhan</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4">
              MCA Graduate | Research Analyst | Data-Driven Problem Solver
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              I build practical digital solutions and work with research, reporting, and data to uncover patterns, improve clarity, and support better decisions. Based in Rajasthan, India.
            </p>

            <p className="text-base text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              My portfolio combines research analysis, analytics-focused thinking, web project execution, and continuous learning in areas like reporting, machine learning, and responsive product building.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href={`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`} download>
                  <Download className="w-5 h-5 text-primary-foreground" />
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
                  <Briefcase className="w-5 h-5 text-primary" />
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
                  <Mail className="w-5 h-5 text-primary" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href="https://wa.me/919660880910?text=Hello%20Chandrabhan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
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
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                </Button>
                <Button variant="social" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/chandrabhan1802"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                </Button>
                <Button variant="social" size="icon" asChild>
                  <a
                    href="mailto:contact.chandrabhan@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:auto-rows-fr gap-4 mt-12">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-primary/20 section-card-surface p-5 text-left shadow-sm hover:shadow-card transition-all duration-300 h-full min-h-[130px] flex flex-col interactive-card-soft bg-white/50 backdrop-blur-md hover:border-primary/40 hover:bg-white/70"
                >
                  <div className="inline-flex rounded-lg bg-primary/15 p-2.5 mb-4 w-fit">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium tracking-wide">{item.label}</p>
                  <p className="font-semibold text-foreground leading-snug mt-auto text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-scale-in stagger-2">
            <div className="relative mx-auto lg:mx-0 animate-float-soft">
              <div className="absolute inset-0 -translate-x-2 translate-y-4 rounded-[2rem] bg-primary/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-primary/15 bg-white/60 backdrop-blur-md p-4 shadow-[0_22px_50px_rgba(124,58,237,0.12)]">
                <div className="absolute -right-3 top-6 z-10 rounded-full bg-white/80 backdrop-blur-md px-4 py-2 text-xs font-semibold text-primary border border-primary/20 shadow-sm">
                  Research Analyst
                </div>
                <img
                  src={profilePhoto}
                  alt="Chandrabhan - MCA Graduate & Developer"
                  width={384}
                  height={384}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] rounded-[1.5rem] object-cover border border-white/60 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

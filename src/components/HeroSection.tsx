import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';
import Typewriter from '@/components/Typewriter';
import AnimatedBackground from '@/components/AnimatedBackground';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Work
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">Chandrabhan</span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 h-12">
              I'm into <Typewriter words={['Data Science', 'Web Development', 'Python', 'Machine Learning']} />
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              MCA student passionate about exploring new technologies and building impactful solutions. Based in Rajasthan, India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href={`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`} download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Get in Touch
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
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-scale-in stagger-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full gradient-primary opacity-20 blur-2xl animate-pulse-slow" />
              <div className="absolute -inset-1 rounded-full gradient-primary opacity-30" />
              
              <img
                src={profilePhoto}
                alt="Chandrabhan - MCA Student & Developer"
                width={384}
                height={384}
                loading="eager"
                decoding="async"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-card shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5 hidden lg:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

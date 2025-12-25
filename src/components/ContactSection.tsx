import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import type { SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M12 2a9.5 9.5 0 0 0-8.17 14.33L3 22l5.86-1.76A9.5 9.5 0 1 0 12 2Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 8.9c.3-.6.6-.6 1-.6h.7c.3 0 .4 0 .6.4l.7 1.7c.1.2.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .6.5 1 1.8 2.2 2.8 2.7.2.1.4.1.6-.1l.7-.6c.2-.2.5-.2.7-.1l1.7.7c.4.2.4.3.4.6v.7c0 .4 0 .7-.6 1-.7.4-2.1.6-4.5-.6-2.4-1.1-4-3.6-4.5-4.5-1.2-2.4-1-3.8-.6-4.5Z"
      fill="currentColor"
    />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact.chandrabhan@gmail.com',
    href: 'mailto:contact.chandrabhan@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9660880910',
    href: 'tel:+919660880910',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+91 9660880910',
    href: 'https://wa.me/919660880910?text=Hello%20Chandrabhan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hanumangarh, Rajasthan, India',
    href: 'https://maps.google.com/?q=Hanumangarh,Rajasthan',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/dudhwal1802',
    username: '@dudhwal1802',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chandrabhan1802/',
    username: 'chandrabhan1802',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a friendly chat
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-accent group-hover:bg-primary transition-colors">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect with Me</h3>
                
                {socialLinks.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent group-hover:bg-primary transition-colors">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{item.username}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}

                {/* Call to Action */}
                <div className="p-6 rounded-2xl gradient-primary text-primary-foreground mt-8">
                  <h4 className="text-lg font-semibold mb-2">Let's Work Together!</h4>
                  <p className="text-primary-foreground/80 mb-4 text-sm">
                    Looking for an enthusiastic developer or data science intern? I'm ready to contribute and learn.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="mailto:contact.chandrabhan@gmail.com">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

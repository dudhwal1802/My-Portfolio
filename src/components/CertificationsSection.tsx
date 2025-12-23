import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const certifications = [
  {
    title: 'Hands-on Approach to AI for Real World Applications',
    issuer: 'TCS',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/15X4xInXgEzXEOUmoz7oPek0-dnUPJvmf/view',
    color: 'from-primary to-primary/70',
  },
  {
    title: 'Linux Training',
    issuer: 'Spoken Tutorial, IIT Bombay',
    date: 'March 2025',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7315012392248078336/',
    color: 'from-primary/90 to-primary/60',
  },
  {
    title: 'Excel Skills for Business',
    issuer: 'JP Morgan',
    date: 'July 2023',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._wDfbTJdrA2jjNMsuG_1690516422508_completion_certificate.pdf',
    color: 'from-primary/80 to-primary/50',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development through recognized certifications
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 100}>
              <div className="group relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Certificate Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cert.color} mb-5`}>
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-muted-foreground mb-3">{cert.issuer}</p>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                {/* View Certificate Button */}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </Button>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

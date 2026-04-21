import { BookOpen, ExternalLink, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const publications = [
  {
    title: 'Security Challenges and Solution in Kubernetes Cluster Management',
    journal: 'International Journal of Innovative Research and Technology (IJIRT)',
    date: 'April 2026',
    authors: 'Neeraj Sharma, Chandrabhan, Tanay Sinha, Gopal Khorwal',
    role: 'Co-Author (2nd)',
    volume: '12',
    issue: '11',
    pages: '2049-2056',
    paperID: '195981',
    focus: 'Kubernetes Security',
    keywords: ['Kubernetes Security', 'Container Orchestration', 'RBAC', 'DevSecOps', 'Cloud-Native Security'],
    link: 'https://ijirt.org/article?manuscript=195981',
    color: 'bg-blue-600',
  },
];

const researchAreas = ['Kubernetes', 'Cloud Security', 'DevSecOps', 'Container Orchestration', 'Research'];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="section-divider-large" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Research <span className="text-gradient">Publications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Peer-reviewed research contributions in cloud-native infrastructure and security
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {researchAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:border-primary/50 hover:bg-primary/15 transition-all"
              >
                {area}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-7 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <ScrollReveal key={pub.paperID} delay={index * 100}>
              <div className="group relative h-full p-8 md:p-10 rounded-xl section-card-surface border border-border/60 hover:border-primary/40 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col interactive-card-soft">
                {/* Publication Icon */}
                <div className={`inline-flex p-3.5 rounded-lg ${pub.color} mb-5 w-fit`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>

                {/* Publication Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>

                {/* Focus Area Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary border border-primary/30">
                    {pub.focus}
                  </span>
                </div>

                {/* Journal Info */}
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Journal</p>
                    <p className="text-foreground">{pub.journal}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Volume</p>
                      <p className="text-foreground font-medium">{pub.volume}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Issue</p>
                      <p className="text-foreground font-medium">{pub.issue}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Pages</p>
                      <p className="text-foreground font-medium">{pub.pages}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Paper ID</p>
                      <p className="text-foreground font-medium">{pub.paperID}</p>
                    </div>
                  </div>
                </div>

                {/* Authors */}
                <div className="mb-4">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Authors</p>
                      <p className="text-sm text-foreground">{pub.authors}</p>
                      <p className="text-xs text-primary font-medium mt-1">({pub.role})</p>
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{pub.date}</span>
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Keywords</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword) => (
                      <span key={keyword} className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-xs text-primary border border-primary/20">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Paper Button */}
                <Button className="w-full mt-auto" asChild>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Research Paper
                  </a>
                </Button>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

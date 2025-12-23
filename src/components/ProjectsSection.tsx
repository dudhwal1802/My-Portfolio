import { Globe, Code2, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a fully responsive personal portfolio website using HTML, CSS, and JavaScript.',
    highlights: [
      'Highlights technical skills, projects, and academic achievements with a clean, professional interface',
      'Optimized for fast loading speed and cross-device compatibility',
      'Demonstrated strong front-end development skills and attention to user experience',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing my work and the technologies I've worked with
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full gradient-primary text-primary-foreground">
                      Featured
                    </span>
                  </div>
                )}

                <div className="p-8 md:p-10">
                  {/* Project Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-accent mb-6">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground"
                      >
                        <Code2 className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* More Projects Coming */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More exciting projects are in the works. Stay tuned!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;

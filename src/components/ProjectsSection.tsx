import { Globe, Code2, CheckCircle, Github } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

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
    repoUrl: 'https://github.com/dudhwal1802/My-Portfolio',
    featured: true,
  },
  {
    title: 'Satguru Packers & Movers — Business Website',
    description:
      'Built a fast, responsive single-page business website for a moving company with a modern UI and consistent branding.',
    highlights: [
      'Implemented mobile-first UX with a fixed bottom Call/WhatsApp CTA bar (safe-area handling) and non-overlapping floating action buttons',
      'Added SEO + local SEO: meta tags, OpenGraph/Twitter cards, and schema.org JSON-LD (MovingCompany) for better search visibility',
      'Improved accessibility with proper button types/labels, keyboard support for interactive elements, and reduced-motion support',
      'Prepared GitHub Pages deployment (base path support with React Router) and CI workflow for build + deploy',
    ],
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://dudhwal1802.github.io/satguru-packers-movers/',
    repoUrl: 'https://github.com/dudhwal1802/satguru-packers-movers',
    featured: true,
  },
  {
    title: 'Fake News Detection Web App (ML + NLP)',
    description:
      'Built an end-to-end Fake News Detection project using Python, Machine Learning, and Natural Language Processing, deployed as a Streamlit web app.',
    highlights: [
      'Trained and compared Naive Bayes and Logistic Regression models using TF‑IDF text features',
      'Evaluated models with accuracy, precision, recall, and F1 to select the best-performing approach',
      'Streamlit app lets users paste a headline/article and instantly predicts Fake vs Real with confidence and model details',
      'Note: Educational project only — predictions should not be used for real-world decision making',
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NLP',
      'TF‑IDF',
      'Naive Bayes',
      'Logistic Regression',
      'Streamlit',
    ],
    liveUrl: 'https://fake-news-detect-by-cb.streamlit.app/',
    repoUrl: 'https://github.com/dudhwal1802/fake-news',
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

                  {/* Actions */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    {project.liveUrl && (
                      <Button className="justify-center" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live site: ${project.title}`}
                        >
                          <Globe className="w-4 h-4" />
                          Live Site
                        </a>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button variant="social" className="justify-center" asChild>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open code repository: ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                          View Code Repo
                        </a>
                      </Button>
                    )}
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

import { Globe, Code2, CheckCircle, Github, Target, Wrench, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Personal Portfolio Website',
    category: 'Web Portfolio',
    description:
      'Built a modern, fully responsive portfolio using Vite + React + TypeScript + Tailwind CSS (shadcn/ui), with prompt engineering to iterate quickly on layout and content.',
    problem: 'Needed a professional personal website to present skills, projects, education, and career direction in one place.',
    approach: 'Designed a responsive React-based portfolio with clear section structure, polished UI, and fast content iteration.',
    outcome: 'Created a recruiter-friendly portfolio experience that clearly communicates strengths and current growth areas.',
    highlights: [
      'Highlights technical skills, projects, and academic achievements with a clean, professional interface',
      'Optimized for fast loading speed and cross-device compatibility',
      'Created with AI-assisted prompt engineering to speed up UI/content iterations while keeping code quality and UX consistent',
    ],
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'React Router', 'Prompt Engineering'],
    repoUrl: 'https://github.com/dudhwal1802/My-Portfolio',
    featured: true,
  },
  {
    title: 'Satguru Packers & Movers — Business Website',
    category: 'Business Website',
    description:
      'Built a fast, responsive single-page business website for a moving company with a modern UI and consistent branding.',
    problem: 'The business needed a strong online presence with mobile-first UX, trust-building design, and better discoverability.',
    approach: 'Developed a responsive site with clear CTAs, branding consistency, SEO improvements, and accessibility-focused interactions.',
    outcome: 'Delivered a production-ready business site designed to support customer discovery, inquiry, and local search visibility.',
    highlights: [
      'Used prompt engineering to iterate faster on content, section structure, and SEO copy while keeping branding consistent',
      'Implemented mobile-first UX with a fixed bottom Call/WhatsApp CTA bar (safe-area handling) and non-overlapping floating action buttons',
      'Added SEO + local SEO: meta tags, OpenGraph/Twitter cards, and schema.org JSON-LD (MovingCompany) for better search visibility',
      'Improved accessibility with proper button types/labels, keyboard support for interactive elements, and reduced-motion support',
      'Prepared GitHub Pages deployment (base path support with React Router) and CI workflow for build + deploy',
    ],
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Prompt Engineering'],
    liveUrl: 'https://dudhwal1802.github.io/satguru-packers-movers/',
    repoUrl: 'https://github.com/dudhwal1802/satguru-packers-movers',
    featured: true,
  },
  {
    title: 'Fake News Detection Web App (ML + NLP)',
    category: 'ML / NLP Project',
    description:
      'Built an end-to-end Fake News Detection project using Python, Machine Learning, and Natural Language Processing, deployed as a Streamlit web app.',
    problem: 'Wanted to apply machine learning and NLP concepts in a practical project that users could test directly.',
    approach: 'Trained and compared classification models using TF‑IDF text features, then wrapped the best workflow in a Streamlit app.',
    outcome: 'Produced an interactive ML demo that makes text classification concepts easy to explore and understand.',
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
    <section id="projects" className="py-20 md:py-32 lg:py-40 bg-card/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="section-divider-large" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Showcasing my work and the technologies I've worked with
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto space-y-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-2xl section-card-surface border border-border hover:border-primary/30 transition-all duration-500 interactive-card">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow-md">
                      Featured
                    </span>
                  </div>
                )}

                <div className="p-8 md:p-10">
                  {/* Project Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-primary mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-white/50 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary border border-primary/25">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 md:auto-rows-fr gap-4 mb-8">
                    <div className="rounded-2xl border border-primary/20 bg-white/50 backdrop-blur-md p-4 h-full min-h-[180px] flex flex-col interactive-card-soft hover:bg-white/70 hover:border-primary/40 transition-all duration-300">
                      <div className="inline-flex rounded-lg bg-primary p-2 mb-3">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{project.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-primary/20 bg-white/50 backdrop-blur-md p-4 h-full min-h-[180px] flex flex-col interactive-card-soft hover:bg-white/70 hover:border-primary/40 transition-all duration-300">
                      <div className="inline-flex rounded-lg bg-primary p-2 mb-3">
                        <Wrench className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Approach</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{project.approach}</p>
                    </div>
                    <div className="rounded-2xl border border-primary/20 bg-white/50 backdrop-blur-md p-4 h-full min-h-[180px] flex flex-col interactive-card-soft hover:bg-white/70 hover:border-primary/40 transition-all duration-300">
                      <div className="inline-flex rounded-lg bg-primary p-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{project.outcome}</p>
                    </div>
                  </div>

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
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white"
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

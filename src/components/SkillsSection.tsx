import { Code, Database, Wrench, Layout, Users, FileSpreadsheet, LineChart, Presentation, ScanSearch } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['TypeScript', 'JavaScript', 'Python'],
    color: 'bg-primary',
  },
  {
    title: 'Data Analysis & ML',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TF‑IDF', 'Naive Bayes', 'Logistic Regression'],
    color: 'bg-primary',
  },
  {
    title: 'Web Development',
    icon: Wrench,
    skills: ['React', 'React Router', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Streamlit'],
    color: 'bg-primary',
  },
  {
    title: 'Tooling & Workflow',
    icon: Layout,
    skills: [
      'Excel',
      'Git & GitHub',
      'GitHub Actions (CI)',
      'GitHub Pages',
      'Prompt Engineering',
      'Streamlit',
      'SEO',
      'Accessibility (a11y)',
      'VS Code',
      'Jupyter Notebook',
    ],
    color: 'from-primary to-accent',
  },
];

const softSkills = [
  'Problem Solving',
  'Clear Communication',
  'Attention to Detail (SEO & Accessibility)',
  'Team Collaboration',
];

const analyticsTools = ['Excel', 'Python', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Streamlit'];

const analyticsWorkflow = [
  {
    title: 'Data Cleaning',
    description: 'Preparing raw datasets for reliable analysis by improving consistency and structure.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Exploratory Analysis',
    description: 'Studying patterns, trends, and key indicators to understand the story behind the data.',
    icon: ScanSearch,
  },
  {
    title: 'Reporting & Dashboards',
    description: 'Presenting findings in simple and useful formats for quick understanding and action.',
    icon: Presentation,
  },
  {
    title: 'Insights',
    description: 'Converting analysis into observations that can guide smarter decisions.',
    icon: LineChart,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal className="duration-500">
          <div className="text-center mb-16 md:mb-20">
            <div className="section-divider-large" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Skills I apply across data analytics, web development, and ML/NLP projects—from cleaning data and finding insights to shipping responsive digital experiences.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="duration-500">
          <div className="max-w-5xl mx-auto mb-14 rounded-2xl border border-border/60 section-card-surface p-8 md:p-10 shadow-elevated interactive-card-soft hover:shadow-lifted hover:border-primary/40 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Analytics Tools Snapshot</h3>
              <p className="text-muted-foreground text-base">Core tools and platforms that support my current data analytics learning and project workflow.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {analyticsTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-primary/25 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary hover:border-primary/50 hover:bg-white/70 transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-fr gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 60} className="duration-500">
              <div className="group p-7 rounded-xl border border-primary/20 bg-white/50 backdrop-blur-md hover:border-primary/40 hover:bg-white/70 hover:shadow-elevated transition-all duration-300 h-full min-h-[260px] flex flex-col interactive-card-soft">
                <div className={`inline-flex p-3.5 rounded-lg ${category.color} mb-5 w-fit`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-5">{category.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto content-start">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-white/50 backdrop-blur-sm text-primary border border-primary/25 hover:bg-white/70 hover:border-primary/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120} className="duration-500">
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Analytics Workflow</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple view of how I approach data work—from preparing information to communicating useful findings.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 sm:auto-rows-fr gap-6">
              {analyticsWorkflow.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border section-card-surface p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full min-h-[220px] flex flex-col interactive-card-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground mt-auto">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Soft Skills */}
        <ScrollReveal delay={200} className="duration-500">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 text-sm font-medium rounded-full border-2 border-primary/20 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;

import { BarChart3, Briefcase, FileSpreadsheet, LineChart, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const experience = {
  company: 'Uptoskills',
  role: 'Data Analyst Intern',
  period: 'Jan 2026 – Current',
  summary:
    'Gaining hands-on experience with structured datasets, analysis workflows, and insight-driven reporting while strengthening practical data analytics skills.',
  highlights: [
    'Clean and organize raw datasets to improve analysis quality and reporting accuracy.',
    'Prepare summary reports and dashboard-ready insights that make patterns easier to understand.',
    'Track trends, KPIs, and performance indicators to support data-driven thinking.',
  ],
};

const focusAreas = [
  {
    title: 'Data Cleaning',
    description: 'Transforming raw and inconsistent data into reliable, analysis-ready datasets.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Reporting',
    description: 'Organizing findings into clear summaries and dashboard-friendly outputs.',
    icon: BarChart3,
  },
  {
    title: 'Insight Generation',
    description: 'Finding trends and patterns that can support smarter business decisions.',
    icon: LineChart,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-16">
            <div className="section-divider" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A focused internship journey in data analytics, centered on turning raw information into structured and actionable insights.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-8 lg:gap-10 items-stretch">
          <ScrollReveal direction="left">
            <div className="rounded-3xl border border-border section-card-surface p-6 md:p-8 shadow-card-hover h-full interactive-card">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Currently Working
                </span>
                <span className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
                  Data Analytics Focus
                </span>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20">
                <div className="absolute left-0 top-1 h-4 w-4 -translate-x-[9px] rounded-full border-4 border-card bg-primary" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">{experience.company}</p>
                      <h3 className="text-2xl font-bold text-foreground">{experience.role}</h3>
                    </div>
                    <span className="w-fit rounded-full bg-background px-4 py-2 text-sm font-medium text-muted-foreground border border-border">
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{experience.summary}</p>

                  <div className="space-y-3">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-border section-card-surface p-4 interactive-card-soft">
                        <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid gap-4 auto-rows-fr h-full">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-border section-card-surface p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-card h-full min-h-[164px] flex flex-col interactive-card-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex rounded-xl bg-accent p-3">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mt-auto">{area.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
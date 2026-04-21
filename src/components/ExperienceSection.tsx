import { BarChart3, Briefcase, FileSpreadsheet, LineChart, Sparkles, Download, CheckCircle2, Code2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const experience = {
  company: 'Uptoskills',
  role: 'Data Analyst Intern',
  period: 'Jan 2026 – Apr 2026',
  duration: '3 months',
  summary:
    'Successfully completed 3-month internship focused on data analytics, where I developed expertise in dataset management, analytical reporting, and business intelligence while delivering measurable impact across multiple projects.',
  highlights: [
    'Clean and organize raw datasets to improve analysis quality and reporting accuracy.',
    'Prepare summary reports and dashboard-ready insights that make patterns easier to understand.',
    'Track trends, KPIs, and performance indicators to support data-driven thinking.',
  ],
  achievements: [
    { metric: '50+', description: 'Datasets Analyzed' },
    { metric: '100%', description: 'Report Accuracy' },
    { metric: '20+', description: 'Dashboards Created' },
  ],
  tools: ['Python', 'Excel', 'SQL', 'Tableau', 'Google Sheets', 'Data Visualization'],
  documents: [
    {
      title: 'Internship Certificate',
      url: 'https://drive.google.com/file/d/1KnJkC6yqcJsMxat9-mPDovcTgGJStwKI/view?usp=drive_link',
      badge: 'Verified',
    },
    {
      title: 'Experience Letter',
      url: 'https://drive.google.com/file/d/1mngaeILi-zAtSg8kXJcLucUPTajHltgz/view?usp=drive_link',
      badge: 'Official',
    },
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
    <section id="experience" className="py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="section-divider-large" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              A focused internship journey in data analytics, centered on turning raw information into structured and actionable insights.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-10 lg:gap-12 items-stretch">
          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-border/60 section-card-surface p-8 md:p-10 shadow-elevated h-full interactive-card hover:shadow-lifted hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md px-4 py-2 text-sm font-medium text-primary border border-primary/30">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Completed
                </span>
                <span className="inline-flex items-center rounded-full bg-white/60 backdrop-blur-md px-4 py-2 text-sm font-medium text-primary border border-primary/30">
                  Data Analytics Focus
                </span>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20">
                <div className="absolute left-0 top-1 h-4 w-4 -translate-x-[9px] rounded-full border-4 border-card bg-primary" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">{experience.company}</p>
                      <h3 className="text-2xl font-bold text-foreground">{experience.role}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="w-fit rounded-full bg-background px-4 py-2 text-sm font-medium text-muted-foreground border border-border">
                        {experience.period}
                      </span>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {experience.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{experience.summary}</p>

                  <div className="grid grid-cols-3 gap-3 py-4 px-4 rounded-xl bg-primary/5 border border-primary/10">
                    {experience.achievements.map((achievement) => (
                      <div key={achievement.metric} className="text-center">
                        <p className="text-lg md:text-xl font-bold text-primary">{achievement.metric}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-border section-card-surface p-4 interactive-card-soft">
                        <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-primary" />
                      Tools & Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center rounded-full bg-white/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-primary border border-primary/25 hover:bg-white/70 hover:border-primary/40 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Credentials
                    </p>
                    <div className="flex flex-col gap-2">
                      {experience.documents.map((doc) => (
                        <a
                          key={doc.title}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative inline-flex items-center gap-3 rounded-xl border border-primary/20 bg-white/50 backdrop-blur-md p-4 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:bg-white/70"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Download className="h-4 w-4 text-primary" />
                              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{doc.title}</span>
                              <span className="inline-flex items-center rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary border border-primary/30">
                                {doc.badge}
                              </span>
                            </div>
                          </div>
                          <Briefcase className="h-4 w-4 text-muted-foreground group-hover:text-green-600 transition-colors" />
                        </a>
                      ))}
                    </div>
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
                  <div className="mb-4 inline-flex rounded-xl bg-primary p-3">
                    <area.icon className="h-5 w-5 text-white" />
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
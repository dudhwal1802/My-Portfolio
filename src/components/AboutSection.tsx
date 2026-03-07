import { useState } from 'react';
import { GraduationCap, MapPin, Languages, Heart, Briefcase, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jaipur National University, Jaipur',
    period: 'July 2024 – On Going',
    status: 'Currently Pursuing',
  },
  {
    degree: 'Post Graduate Diploma in Computer Applications (PGDCA)',
    institution: 'Jaipur National University, Jaipur',
    period: 'August 2023 - June 2024',
    grade: '75%',
  },
  {
    degree: 'Bachelor of Arts (B.A.)',
    institution: 'Shri Khushal Das University, Hanumangarh',
    period: 'July 2020 - June 2023',
    grade: '69.39%',
  },
];

const academicSnapshot = [
  {
    label: 'Current Program',
    value: 'MCA Ongoing',
  },
  {
    label: 'PGDCA Score',
    value: '75%',
  },
  {
    label: 'B.A. Score',
    value: '69.39%',
  },
];

const AboutSection = () => {
  const [activeEducation, setActiveEducation] = useState<number | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-16">
            <div className="section-divider" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated MCA student building a profile at the intersection of data analytics, practical problem solving, and modern technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {/* About Text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border section-card-surface p-6 md:p-8 shadow-card interactive-card-soft">
                <div className="flex items-center gap-3 mb-5">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">About Me & Professional Summary</h3>
                </div>

                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Chandrabhan, a Master of Computer Applications student at Jaipur National University.
                    With a strong foundation in computer applications and a keen interest in data science and web development,
                    I'm constantly exploring new technologies to enhance my skills.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in technology began with my PGDCA where I discovered my passion for programming and data analysis.
                    I enjoy building responsive web applications and working with data to derive meaningful insights.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently, as a Data Analyst Intern at Uptoskills, I am sharpening my analytical thinking by working on data cleaning,
                    reporting, and insight generation. I enjoy translating complex datasets into simple stories that support smarter
                    decisions and reveal meaningful business trends.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I am focused on building a strong foundation in data analytics through real-world practice, project work, and continuous learning.
                    My goal is to combine analytical thinking, reporting clarity, and technical execution to create solutions that are both useful and easy to understand.
                  </p>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-2 sm:auto-rows-fr gap-4 mt-8">
                <div className="flex items-start gap-4 p-4 rounded-xl section-card-surface border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full min-h-[104px] interactive-card-soft">
                  <div className="p-2 rounded-lg bg-accent shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">Hanumangarh, Rajasthan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl section-card-surface border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full min-h-[104px] interactive-card-soft">
                  <div className="p-2 rounded-lg bg-accent shrink-0">
                    <Languages className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Languages</h4>
                    <p className="text-sm text-muted-foreground">English & Hindi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl section-card-surface border border-border sm:col-span-2 hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full min-h-[104px] interactive-card-soft">
                  <div className="p-2 rounded-lg bg-accent shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Interests</h4>
                    <p className="text-sm text-muted-foreground">Data Science, Web Development, Exploring New Technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl section-card-surface border border-border sm:col-span-2 hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full min-h-[104px] interactive-card-soft">
                  <div className="p-2 rounded-lg bg-accent shrink-0">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Data Analytics Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Data cleaning, dashboard reporting, trend analysis, KPI tracking, and transforming raw data into actionable insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl section-card-surface border border-border sm:col-span-2 hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full min-h-[104px] interactive-card-soft">
                  <div className="p-2 rounded-lg bg-accent shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Current Role</h4>
                    <p className="text-sm text-muted-foreground">Data Analyst Intern at Uptoskills since Jan 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Education Timeline */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6 h-full">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-6 sm:pl-8 pb-6 border-l-2 transition-colors duration-300 last:pb-0 ${
                      activeEducation === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-0 w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-x-[8px] sm:-translate-x-[9px] rounded-full border-4 border-card transition-all duration-300 ${
                        activeEducation === index ? 'bg-primary scale-110 shadow-glow' : 'bg-border'
                      }`}
                    />
                    
                    <button
                      type="button"
                      onClick={() => setActiveEducation(index)}
                      className={`w-full text-left section-card-surface rounded-xl p-4 sm:p-5 border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card interactive-card-soft ${
                        activeEducation === index
                          ? 'border-primary shadow-card-hover ring-1 ring-primary/20'
                          : 'border-border hover:border-primary/30 hover:shadow-card'
                      }`}
                      aria-pressed={activeEducation === index}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                        <h4 className={`font-semibold transition-colors duration-300 ${activeEducation === index ? 'text-primary' : 'text-foreground'}`}>
                          {edu.degree}
                        </h4>
                        {edu.grade && (
                          <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap w-fit transition-colors duration-300 ${
                            activeEducation === index ? 'bg-primary text-primary-foreground' : 'bg-accent text-primary'
                          }`}>
                            {edu.grade}
                          </span>
                        )}
                        {edu.status && (
                          <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap w-fit transition-colors duration-300 ${
                            activeEducation === index ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                          }`}>
                            {edu.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                    </button>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-border section-card-surface p-6 shadow-card interactive-card-soft">
                <div className="flex items-center gap-3 mb-5">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Academic Snapshot</h4>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {academicSnapshot.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border section-card-surface p-4 text-center interactive-card-soft min-h-[112px] flex flex-col justify-center"
                    >
                      <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                      <p className="text-base font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

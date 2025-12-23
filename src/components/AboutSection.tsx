import { GraduationCap, MapPin, Languages, Heart } from 'lucide-react';
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

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated MCA student with a passion for technology and continuous learning
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About Text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed">
                  I'm Chandrabhan, a Master of Computer Applications student at Jaipur National University. 
                  With a strong foundation in computer applications and a keen interest in data science and web development, 
                  I'm constantly exploring new technologies to enhance my skills.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in technology began with my PGDCA where I discovered my passion for programming and data analysis. 
                  I enjoy building responsive web applications and working with data to derive meaningful insights.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="p-2 rounded-lg bg-accent">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">Hanumangarh, Rajasthan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="p-2 rounded-lg bg-accent">
                    <Languages className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Languages</h4>
                    <p className="text-sm text-muted-foreground">English & Hindi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border sm:col-span-2 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="p-2 rounded-lg bg-accent">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Interests</h4>
                    <p className="text-sm text-muted-foreground">Data Science, Web Development, Exploring New Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Education Timeline */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-border last:pb-0 last:border-l-primary"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-card" />
                    
                    <div className="bg-background rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        {edu.grade && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-primary whitespace-nowrap">
                            {edu.grade}
                          </span>
                        )}
                        {edu.status && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary whitespace-nowrap">
                            {edu.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

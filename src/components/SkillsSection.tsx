import { Code, Database, Wrench, Layout, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'SQL', 'HTML/CSS'],
    color: 'from-primary to-primary/70',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Database,
    skills: ['Pandas', 'Numpy', 'Scikit-Learn'],
    color: 'from-primary/90 to-primary/60',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Excel', 'PowerPoint', 'MySQL'],
    color: 'from-primary/80 to-primary/50',
  },
  {
    title: 'Platforms',
    icon: Layout,
    skills: ['VS Code', 'Jupyter Notebook', 'PyCharm'],
    color: 'from-primary/70 to-primary/40',
  },
];

const softSkills = [
  'Strong Communication Skills',
  'Leadership and Event Coordination',
  'Time Management',
  'Team Collaboration',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal className="duration-500">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A combination of technical expertise and soft skills that I bring to every project
            </p>
          </div>
        </ScrollReveal>

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 60} className="duration-500">
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

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
                  className="px-5 py-2.5 text-sm font-medium rounded-full border-2 border-primary/20 text-foreground hover:border-primary hover:bg-accent transition-all duration-300"
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

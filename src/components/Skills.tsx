import { 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Smartphone, 
  GitBranch,
  Cloud,
  Boxes
} from "lucide-react";
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation();
  const skillCategories = [
    {
      category: t('skills.categories.frontend.title'),
      icon: Code2,
      color: "text-primary",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      category: t('skills.categories.backend.title'),
      icon: Server,
      color: "text-secondary",
      skills: ["Node.js", "Express", "Python", "REST APIs"],
    },
    {
      category: t('skills.categories.database.title'),
      icon: Database,
      color: "text-primary",
      skills: ["PostgreSQL"],
    },
    {
      category: t('skills.categories.devops.title'),
      icon: Cloud,
      color: "text-secondary",
      skills: ["Docker", "Vercel", "GitHub Actions", "CI/CD"],
    },
    {
      category: t('skills.categories.design.title'),
      icon: Palette,
      color: "text-primary",
      skills: ["Figma", "UI/UX", "Responsive Design", "Accessibility"],
    },
    {
      category: t('skills.categories.tools.title'),
      icon: GitBranch,
      color: "text-secondary",
      skills: ["Git", "VS Code", "Postman", "Slack"],
    },
    {
      category: t('skills.categories.architecture.title'),
      icon: Boxes,
      color: "text-secondary",
      skills: ["Clean Code", "Design Patterns", "Testing", "Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('skills.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('skills.description')}
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                
                {/* Skills list */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill}
                      className="text-muted-foreground flex items-center gap-2 group-hover:text-foreground transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Additional info */}
          <div className="mt-16 text-center animate-fade-in-up">
            <p className="text-muted-foreground text-lg">
              {t('skills.detail')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

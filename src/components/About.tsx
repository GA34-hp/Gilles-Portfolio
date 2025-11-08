import { t } from "i18next";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Code2,
      title: t('about.categories.code.CleanCode'),
      description: t('about.categories.code.description'),
    },
    {
      icon: Palette,
      title: t('about.categories.Palette.title'),
      description: t('about.categories.Palette.description'),
    },
    {
      icon: Rocket,
      title: t('about.categories.Rocket.title'),
      description: t('about.categories.Rocket.description'),
    },
    {
      icon: Users,
      title: t('about.categories.Users.title'),
      description: t('about.categories.Users.description'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {/* About <span className="text-primary">Me</span> */}
              {t('about.title')}
              
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          {/* Bio */}
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-card">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
               {t('about.body1')}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about.body2')}
              </p>
            </div>
          </div>
          
          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

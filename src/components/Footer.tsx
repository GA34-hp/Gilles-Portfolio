import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/GA34-hp",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gilles-alain-dodji-waffo-096924355/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:gillesalainwaffo@gmail.com",
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              {t('footer.description')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { sendEmail } from '@/services/emailService';


const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        toast({
          title: t('contact.titleMessage'),
          description: t('contact.successMessage'),
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gillesalainwaffo@gmail.com",
      href: "mailto:gillesalainwaffo@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+237 677427140 /+237 655676871",
      href: "tel:+237677427140",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Yaoundé, Cameroon",
      href: null,
    },
  ];

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
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {/* Get In <span className="text-primary">Touch</span> */}
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  {t('contact.contactInformation')}
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors duration-300 font-medium break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">{t('contact.connectWithMe')}</p>
                  <div className="flex gap-4">
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
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.name')} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t('contact.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.email')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.subject')}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder={t('contact.subjectPlaceholder')}
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t('contact.messagePlaceholder')}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      {t('contact.sendButton')}
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

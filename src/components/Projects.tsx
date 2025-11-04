import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Real estate Platform",
      description: "A  modern platform that connects individuals and real estate professionals.",
      image: "M4.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      github: "https://github.com/SWISS-ECO-CONCEPT",
      demo: "https://lamaison-frontend-swiss-eco-concept.vercel.app/",
    },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
    //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    //   tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "Interactive weather application with location-based forecasts, detailed metrics, and beautiful visualizations.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    //   tags: ["React", "API Integration", "Charts.js", "CSS"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
    // {
    //   title: "Portfolio CMS",
    //   description: "Content management system for creatives to showcase their work with customizable themes and layouts.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    //   tags: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and problem-solving approaches
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Project content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

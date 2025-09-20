import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "PharmaPlan",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "/pharmaplan-project.png",
      technologies: ["React", "Figma", "Sass CSS", "Vite", "Typescript"],
      liveUrl: "https://pharmaplan.vercel.app/",
      githubUrl: "https://github.com/Bas77/PharmaPlan",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Infrastructure as Code solution for automated deployment and scaling of microservices on AWS.",
      image: "/cloud-infrastructure-diagram.png",
      technologies: ["Terraform", "AWS", "Kubernetes", "Python", "CI/CD"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for visualizing business metrics with real-time data processing and custom reporting.",
      image: "/analytics-dashboard.png",
      technologies: ["React", "D3.js", "Python", "Redis", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

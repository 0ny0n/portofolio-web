import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led migration to cloud-native architecture",
        "Mentored 5 junior developers",
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects from conception to deployment. Collaborated with design and product teams to deliver high-quality solutions.",
      achievements: [
        "Built 8 production applications from scratch",
        "Implemented automated testing reducing bugs by 60%",
        "Established CI/CD pipelines",
      ],
      technologies: ["React", "Python", "MongoDB", "GCP", "Kubernetes"],
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      location: "Remote",
      period: "2019 - 2020",
      description:
        "Started career building responsive websites and learning modern development practices. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Delivered 15+ client websites",
        "Learned full-stack development",
        "Contributed to open-source projects",
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "Git"],
    },
  ]

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made at each organization.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-accent">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

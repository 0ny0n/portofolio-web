"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiFigma,
  SiSass,
  SiVite,
  SiTypescript,
  SiGamemaker,
} from "react-icons/si"; // Add more icons as needed

type Project = {
  title: string;
  description: string;
  images: string[]; // Changed from 'image' to 'images' array
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

function ProjectCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (project.images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [project.images.length, isHovered]);

  // Map tech to icons (expand as needed)
  const techIcons = {
    React: SiReact,
    Figma: SiFigma,
    "Sass CSS": SiSass,
    Vite: SiVite,
    Typescript: SiTypescript,
    GameMaker: SiGamemaker,
    // Add for other techs like GameMaker, etc.
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative aspect-video overflow-hidden"
        whileHover={{ scale: 1.05 }} // Scale the entire carousel container
        transition={{ duration: 0.3 }}
      >
        {project.images.map((img, index) => (
          <motion.img
            key={index}
            src={img || "/placeholder.svg"}
            alt={`${project.title} - Image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1.05 : 1, // Scale only the current image
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => {
            const Icon = techIcons[tech as keyof typeof techIcons];
            return (
              <Badge
                key={techIndex}
                variant="outline"
                className="text-xs flex items-center gap-1"
              >
                {Icon && <Icon size={12} />}
                {tech}
              </Badge>
            );
          })}
        </div>

        <div className="flex gap-2 pt-2">
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestProjects() {
  const projects: Project[] = [
    {
      title: "PharmaPlan",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      images: [
        "/pharmaplan-project.png",
        "/pharmaplan-project-2.png",
        "/pharmaplan-project-3.png",
      ], // Replace with your images
      technologies: ["React", "Figma", "Sass CSS", "Vite", "Typescript"],
      liveUrl: "https://pharmaplan.vercel.app/",
      githubUrl: "https://github.com/Bas77/PharmaPlan",
    },
    {
      title: "Awakened Things",
      description:
        "A satirical campus adventure where university stress literally comes to life as enemies in a humorous top-down RPG.",
      images: [
        "/awakenedthings-title.png",
        "/awakenedthings-preview1.png",
        "/awakenedthings-preview2.png",
        "/awakenedthings-preview3.png",
      ], // Replace with your images
      technologies: ["GameMaker"],
      liveUrl:
        "https://gx.games/games/pqlj39/awakened-things/tracks/e885157b-1414-4d12-906e-7bdd3a190a2d/",
      githubUrl: "https://github.com/0ny0n/hellosunib",
    },
    {
      title: "Cloud Infrastructure Automation",
      description:
        "Infrastructure as Code solution for automated deployment and scaling of microservices on AWS.",
      images: [
        "/cloud-infrastructure-diagram.png",
        "/cloud-2.png",
        "/cloud-3.png",
      ], // Replace with your images
      technologies: ["Terraform", "AWS", "Kubernetes", "Python", "CI/CD"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for visualizing business metrics with real-time data processing and custom reporting.",
      images: [
        "/analytics-dashboard.png",
        "/analytics-2.png",
        "/analytics-3.png",
      ], // Replace with your images
      technologies: ["GameMaker"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my technical skills and
            problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

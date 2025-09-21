"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

export function Skills() {
  const technologies = [
    { name: "C", icon: "mdi:alpha-c-circle", color: "#A8B9CC" },
    { name: "Python", icon: "mdi:language-python", color: "#3776AB" },
    { name: "HTML", icon: "mdi:language-html5", color: "#E34F26" },
    { name: "CSS", icon: "mdi:language-css3", color: "#1572B6" },
    { name: "JavaScript", icon: "mdi:language-javascript", color: "#F7DF1E" },
    { name: "React", icon: "mdi:react", color: "#61DAFB" },
    { name: "TypeScript", icon: "mdi:language-typescript", color: "#3178C6" },
    { name: "Java", icon: "mdi:language-java", color: "#007396" },
    { name: "Node.js", icon: "mdi:nodejs", color: "#339933" },
  ];

  const tools = [
    { name: "Figma", icon: "/figma-logo.svg", type: "svg" },
    { name: "Visual Code Studio", icon: "mdi:microsoft-visual-studio-code" },
    { name: "Axure RP 9", icon: "/axure-rp9.svg", type: "svg" },
    {
      name: "GameMaker",
      icon: "/gamemaker-logo.svg",
      type: "svg",
      color: "#ffffff",
    },
    { name: "Cursor AI", icon: "/cursor-ai.svg", type: "svg" },
  ];

  const createInfiniteArray = (arr: any[], multiplier = 8) => {
    return Array(multiplier).fill(arr).flat();
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning.
          </p>
        </motion.div>

        {/* Technologies Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="hover-lift max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Custom wrapper instead of Badge */}
                    <div
                      className="flex items-center gap-3 px-4 py-3 
                                    border border-gray-300 rounded-lg 
                                    bg-secondary shadow-sm"
                    >
                      <Icon
                        icon={tech.icon}
                        className="w-7 h-7"
                        style={{ color: tech.color }}
                      />
                      <span className="text-base font-medium">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/*Tools Card*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="hover-lift max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Custom wrapper instead of Badge */}
                    <div
                      className="flex items-center gap-3 px-4 py-3 
                                    border border-gray-300 rounded-lg 
                                    bg-secondary shadow-sm"
                    >
                      {tool.type === "img" ? (
                        <img
                          src={tool.icon}
                          alt={`${tool.name} logo`}
                          className="w-7 h-7 object-contain"
                        />
                      ) : tool.type === "svg" ? (
                        <img
                          src={tool.icon}
                          alt={`${tool.name} logo`}
                          className="w-7 h-7 object-contain"
                        />
                      ) : (
                        <Icon
                          icon={tool.icon}
                          className="w-7 h-7"
                          style={{ color: "#9ca4fbff" }} // Default color; adjust as needed
                        />
                      )}
                      <span className="text-base font-medium">{tool.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Infinite Scrolling Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="scrolling-tech-container">
            <div className="scroll-left-seamless">
              {createInfiniteArray(technologies).map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 
                            border border-gray-300 rounded-md 
                            mx-1"
                >
                  <Icon
                    icon={tech.icon}
                    className="w-5 h-5"
                    style={{ color: tech.color }}
                  />
                  <span className="text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import InteractiveBackground from "./interactiveBackground"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-background relative overflow-hidden">
      {/* Interactive background */}
      <InteractiveBackground mode="rain" followCursor={true} starColor="#ffffff" />

      <div className="container mx-auto max-w-7xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-none tracking-tight"
          >
            Hi, I'm <span className="text-rgb-gradient font-extrabold">Owen Siau</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground mb-8 font-light leading-tight"
          >
            Undergraduate Computer Science Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light"
          >
            Exploring Computer Science at Bina Nusantara University, passionate about UI/UX, web
            development, and creating games.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="cursor-pointer w-full sm:w-auto text-lg px-10 py-4 bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground transition-all duration-300 hover-lift"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/owen-siau-CV.pdf"
                link.download = "OwenSiau-CV.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              variant="outline"
              size="lg"
              className="cursor-pointer w-full sm:w-auto text-lg px-10 py-4 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover-lift bg-transparent"
            >
              <Download className="mr-3 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-8 mb-16"
        >
          <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="lg" asChild className="social-icon-hover p-4">
              <a href="https://github.com/0ny0n" target="_blank" rel="noopener noreferrer">
                <Github className="h-7 w-7 text-muted-foreground hover:text-purple-600 transition-colors duration-300" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="lg" asChild className="social-icon-hover p-4">
              <a
                href="https://www.linkedin.com/in/owen-siau-2a4464289/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-7 w-7 text-muted-foreground hover:text-purple-600 transition-colors duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Button variant="ghost" size="sm" onClick={scrollToAbout} className="dropdown-hover">
              <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-purple-600 transition-colors duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

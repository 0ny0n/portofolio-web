"use client"; // Add this line at the top to mark it as a client component

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            I am a fifth-semester Computer Science student at Bina Nusantara
            University, focusing on Interactive Multimedia Streaming with strong
            interests in Web Development, Game Development, and UI/UX Design.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 py-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold text-foreground mb-4 text-center"
              >
                My Journey
              </motion.h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey in Computer Science began with a curiosity for how
                  interactive systems and digital platforms are built. Over
                  time, this curiosity developed into hands-on experience
                  through coursework, personal projects, and collaborative
                  assignments.
                </p>

                <p>
                  I have explored a wide range of topics, from designing
                  user-centered interfaces to developing interactive games and
                  web applications, with a particular interest in bridging
                  creativity and technical problem-solving. Each project has
                  strengthened my ability to write clean, maintainable code
                  while also considering usability and aesthetics.
                </p>

                <p>
                  Looking ahead, I aim to continue expanding my expertise in
                  UI/UX design, web technologies, and game creation, with the
                  goal of contributing to impactful projects that combine
                  innovation, functionality, and user delight.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-6 border-t border-border"
              >
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Currently Listening
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Music fuels my coding sessions—here's my go-to playlist for
                  late-night debugging and creative flow.
                </p>
                <div className="spotify-embed-wrapper">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/4tLu9S9U7zEypLRGGJhdYA?theme=0" // Replace with your Spotify embed URL
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg shadow-sm"
                  ></iframe>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

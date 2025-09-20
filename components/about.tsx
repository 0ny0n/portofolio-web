import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a fifth-semester Computer Science student at Bina Nusantara University, focusing on Interactive Multimedia Streaming with strong interests in Web Development, Game Development, and UI/UX Design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey in Computer Science began with a curiosity for how interactive systems and digital
                  platforms are built. Over time, this curiosity developed into hands-on experience through coursework,
                  personal projects, and collaborative assignments.
                </p>

                <p>
                  I have explored a wide range of topics, from designing user-centered interfaces to developing
                  interactive games and web applications, with a particular interest in bridging creativity and
                  technical problem-solving. Each project has strengthened my ability to write clean, maintainable code
                  while also considering usability and aesthetics.
                </p>

                <p>
                  Looking ahead, I aim to continue expanding my expertise in UI/UX design, web technologies, and game
                  creation, with the goal of contributing to impactful projects that combine innovation, functionality,
                  and user delight.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

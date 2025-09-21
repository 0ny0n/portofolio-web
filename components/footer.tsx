import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/0ny0n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/owen-siau-2a4464289/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Separator className="w-full max-w-xs" />

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Onyon Cutter. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> using
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

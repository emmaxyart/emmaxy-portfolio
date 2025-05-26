"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Download } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./components/theme-toggle"
import { AnimatedSection } from "./components/animated-section"
import { AnimatedText } from "./components/animated-text"
import { ProjectCard } from "./components/project-card"
import { ContactForm } from "./components/contact-form"
import { EducationSection } from "./components/education-section"
import { ProblemSolving } from "./components/problem-solving"
import { SkillProgress } from "./components/skill-progress"
import { WhatsAppIcon } from "./components/whatsapp-icon"

export default function Portfolio() {
  const projects = [
    {
      title: "Savora-Cipe",
      description:
        "A recipe discovery platform with a modern UI that helps users find and explore delicious recipes from around the world.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
      repoUrl: "https://github.com/emmaxyart/Savora-Cipe",
      demoUrl: "https://savora-cipe.vercel.app/",
      imageUrl: "/images/sav.PNG",
    },
    {
      title: "Riddle-Quest",
      description:
        "An engaging brain-teaser game where players solve time-based riddles across different difficulty levels.",
      tech: ["TypeScript", "React.js", "Game Development"],
      repoUrl: "https://github.com/emmaxyart/Riddle-Quest",
      demoUrl: "https://emmaxyy-riddle-game.vercel.app/",
      imageUrl: "/images/riddle-quest.png",
    },
    {
      title: "EN-hance",
      description:
        "An advanced image enhancement platform that transforms ordinary photos into stunning, professional-quality images.",
      tech: ["TypeScript", "Next.js", "Image Processing"],
      repoUrl: "https://github.com/emmaxyart/EN-hance",
      demoUrl: "https://en-hance-tm4t.vercel.app",
      imageUrl: "/images/en-hance.png",
    },
    {
      title: "Emmflix",
      description: "A streaming application with modern UI for browsing and watching video content.",
      tech: ["React.js", "CSS", "API Integration"],
      repoUrl: "https://github.com/emmaxyart/emmyflix",
      demoUrl: "https://emmyflix.vercel.app",
      imageUrl: "/placeholder.svg?height=300&width=500&text=Emmflix",
    },
    {
      title: "To-Do List",
      description: "A clean, intuitive task management application to organize daily activities.",
      tech: ["JavaScript", "HTML", "CSS"],
      repoUrl: "https://github.com/emmaxyart/To-do-list",
      demoUrl: "https://to-do-list-brown-ten.vercel.app",
      imageUrl: "/images/to-do.jpg",
    },
    {
      title: "Profile-Card",
      description: "A profile card component displaying current time in UTC, with profile image and social links.",
      tech: ["CSS", "HTML", "JavaScript"],
      repoUrl: "https://github.com/emmaxyart/Profile-Card",
      demoUrl: "https://emmanuel-profile-card.vercel.app/",
      imageUrl: "/images/profile-card.png",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b backdrop-blur-sm bg-background/80 sticky top-0 z-10"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold"
          >
            Edobor Emmanuel
          </motion.div>
          <motion.nav
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Link href="https://github.com/emmaxyart" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/emmanuel-edobor-4b8ba6339/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
          </motion.nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh] px-4 sm:px-6">
            <div className="space-y-6 text-center md:text-left">
              <div>
                <AnimatedText text="Hello, I'm" className="text-muted-foreground mb-2 text-lg sm:text-xl" delay={0.3} />
                <AnimatedText text="Edobor Emmanuel" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" delay={0.5} />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg sm:text-xl text-muted-foreground"
              >
                I'm a Frontend Developer specializing in creating engaging, user-friendly web experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
              >
                <Link href="/resume" target="_blank">
                  <Button variant="default" className="gap-2">
                    <Download className="h-4 w-4" />
                    View Resume
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-muted">
                <Image src="/images/profilepic.jpg" alt="Edobor Emmanuel" fill className="object-cover" priority />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* About Me Section */}
          <AnimatedSection className="mt-24" delay={0.1}>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-lg">
                  I'm Edobor Emmanuel Ucheka, a results-driven Frontend Developer with a strong foundation in modern web
                  technologies and a deep commitment to building scalable, accessible, and high-performance user
                  interfaces.
                </p>
                <p className="text-lg">
                  With hands-on experience in React.js, Next.js, and TypeScript, I specialize in developing responsive,
                  component-based web applications with a focus on maintainability and performance. I have a keen eye
                  for UI/UX best practices and a passion for transforming design systems into pixel-perfect interfaces
                  using Tailwind CSS, CSS Modules, and other modern styling approaches.
                </p>
                <p className="text-lg">
                  I'm proficient in managing application state, handling API integrations, and optimizing frontend
                  performance. I also have experience working with version control (Git/GitHub), and deploying
                  applications on platforms like Vercel and Netlify.
                </p>
                <p className="text-lg">
                  I'm continuously learning and staying up to date with the latest frontend trends, tools, and
                  frameworks. My goal is to contribute to teams that value clean code, collaboration, and delivering
                  real value to users.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">🔧 Technical Skills</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <span className="font-medium">Languages:</span> HTML5, CSS3, JavaScript (ES6+), TypeScript
                    </li>
                    <li>
                      <span className="font-medium">Frameworks & Libraries:</span> React.js, Next.js, Tailwind CSS,
                      Bootstrap, Framer Motion, Shadcn UI
                    </li>
                    <li>
                      <span className="font-medium">State Management:</span> React Hooks, Context API
                    </li>
                    <li>
                      <span className="font-medium">Tooling & Deployment:</span> Git, GitHub, Vercel, Netlify, VS Code,
                      Figma
                    </li>
                    <li>
                      <span className="font-medium">Practices:</span> Responsive Design, Accessibility (WCAG), SEO
                      Optimization, API Integration, Modular Code Architecture
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="space-y-4">
                  <SkillProgress skill="React.js" percentage={80} color="bg-blue-500" />
                  <SkillProgress skill="Next.js" percentage={85} color="bg-black dark:bg-white" />
                  <SkillProgress skill="JavaScript" percentage={95} color="bg-yellow-400" />
                  <SkillProgress skill="TypeScript" percentage={80} color="bg-blue-600" />
                  <SkillProgress skill="HTML & CSS" percentage={95} color="bg-orange-500" />
                  <SkillProgress skill="Tailwind CSS" percentage={90} color="bg-cyan-500" />
                  <SkillProgress skill="Bootstrap" percentage={85} color="bg-purple-600" />
                  <SkillProgress skill="Git & GitHub" percentage={88} color="bg-gray-700 dark:bg-gray-400" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Problem Solving Section - Now Skills Section */}
          <AnimatedSection className="mt-24" delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <ProblemSolving />
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection className="mt-24" delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Education & Certifications</h2>
            <EducationSection />
          </AnimatedSection>

          {/* Projects Section */}
          <AnimatedSection className="mt-24" delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  index={index}
                  repoUrl={project.repoUrl}
                  demoUrl={project.demoUrl}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection className="mt-24" delay={0.3}>
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <ContactForm />
          </AnimatedSection>

          {/* Hire Me Section */}
          <AnimatedSection className="mt-24 text-center" delay={0.3}>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://www.linkedin.com/in/emmanuel-edobor-4b8ba6339/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2" size="lg">
                    <Linkedin className="h-5 w-5" />
                    Get Me Hired
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://wa.me/2349037441641" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2" size="lg" variant="outline">
                    <span className="text-green-500">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    WhatsApp
                  </Button>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="border-t py-6"
      >
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Edobor Emmanuel. All rights reserved.
        </div>
      </motion.footer>
    </div>
  )
}

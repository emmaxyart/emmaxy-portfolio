"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  index: number
  repoUrl?: string
  demoUrl?: string
  imageUrl?: string
}

export function ProjectCard({
  title,
  description,
  tech,
  index,
  repoUrl = "#",
  demoUrl,
  imageUrl = `/placeholder.svg?height=300&width=500&text=Project+${index + 1}`,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group flex flex-col h-full overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-all"
    >
      <div className="aspect-video w-full relative bg-muted overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full"
            >
              <Github className="h-5 w-5 text-white" />
            </motion.div>
          </Link>
          {demoUrl && (
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <ExternalLink className="h-5 w-5 text-white" />
              </motion.div>
            </Link>
          )}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground mt-2 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span key={item} className="px-2 py-1 bg-muted text-xs rounded-md">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-2 px-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Github className="h-4 w-4" />
              View Code
            </motion.button>
          </Link>
          {demoUrl && (
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-2 px-3 bg-primary text-primary-foreground rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Play className="h-4 w-4" />
                View Demo
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

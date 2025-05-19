"use client"

import { motion } from "framer-motion"
import { LightbulbIcon, Code, GitBranch, Puzzle } from "lucide-react"

export function ProblemSolving() {
  const skills = [
    {
      title: "Analytical Thinking",
      description: "Breaking down complex problems into manageable components to develop effective solutions.",
      icon: <LightbulbIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Debugging Expertise",
      description: "Efficiently identifying and resolving code issues through systematic troubleshooting approaches.",
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Version Control Mastery",
      description: "Managing code changes and collaborating effectively using Git and GitHub.",
      icon: <GitBranch className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Creative Solutions",
      description: "Developing innovative approaches to technical challenges while maintaining code quality.",
      icon: <Puzzle className="h-6 w-6 text-purple-500" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-5 rounded-lg border bg-card hover:shadow-md transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-muted rounded-full">{skill.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{skill.title}</h3>
              <p className="mt-2 text-muted-foreground">{skill.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

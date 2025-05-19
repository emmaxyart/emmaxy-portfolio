"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  year: string
  description: string
  type: "degree" | "certification"
}

export function EducationSection() {
  const educationItems: EducationItem[] = [
    {
      degree: "Frontend Development Certified",
      institution: "Softlyft Technologies",
      year: "",
      description: "Focused on Frontend Web development and Responsible web Design.",
      type: "degree",
    },
    {
      degree: "HNG Internship",
      institution: "Tech Bootcamp Academy",
      year: "2024",
      description:
        "Intensive 12-week program covering modern web development technologies including React, Node.js, and database management.",
      type: "certification",
    },
    {
      degree: "Advanced React & Next.js Certification",
      institution: "Frontend Masters",
      year: "2023",
      description: "Comprehensive course on building scalable applications with React and Next.js.",
      type: "certification",
    },
  ]

  return (
    <div className="space-y-6">
      {educationItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-all"
        >
          <div className="mt-1">
            {item.type === "degree" ? (
              <div className="p-2 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            ) : (
              <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900/30">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{item.degree}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <span>{item.institution}</span>
              {item.year && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.year}
                  </span>
                </>
              )}
            </div>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

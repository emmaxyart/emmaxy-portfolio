"use client"

import { motion } from "framer-motion"

interface SkillProgressProps {
  skill: string
  percentage: number
  color: string
}

export function SkillProgress({ skill, percentage, color }: SkillProgressProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  )
}

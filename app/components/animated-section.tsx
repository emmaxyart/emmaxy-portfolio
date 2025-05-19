"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0.2 }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

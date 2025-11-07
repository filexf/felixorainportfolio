"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"

interface RevealProps {
  children: React.ReactNode
  y?: number
  duration?: number
  delay?: number
}

export default function Reveal({ children, y = 75, duration = 0.8, delay = 0.4 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function SlideUpWhenVisible({
  children,
  threshold,
}: {
  children: React.ReactNode
  threshold?: number | number[]
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: threshold ? threshold : 0 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}>
      {children}
    </motion.div>
  )
}

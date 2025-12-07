'use client'
import { useLayoutEffect, useEffect } from 'react'

const HomeScrollFix = () => {
  // Immediate scroll on component mount (before paint)
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // Backup scroll after hydration and any async operations
  useEffect(() => {
    // Immediate
    window.scrollTo(0, 0)

    // After a microtask (catches most async renders)
    Promise.resolve().then(() => {
      window.scrollTo(0, 0)
    })

    // After next animation frame (catches layout shifts)
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })

    // Final fallback with small delay (catches late async operations like AOS)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return null
}

export default HomeScrollFix

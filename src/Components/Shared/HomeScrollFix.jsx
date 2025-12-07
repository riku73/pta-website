'use client'
import { useLayoutEffect, useEffect, useState } from 'react'

const HomeScrollFix = () => {
  const [mounted, setMounted] = useState(false)

  // Force scroll to 0 immediately and repeatedly until stable
  useLayoutEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Immediate scroll
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo(0, 0)

    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Aggressive scroll reset - multiple attempts at different timings
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
    }

    // Immediate
    scrollToTop()

    // After microtask
    Promise.resolve().then(scrollToTop)

    // After animation frames (catches Marquee init)
    requestAnimationFrame(() => {
      scrollToTop()
      requestAnimationFrame(scrollToTop)
    })

    // Multiple delayed attempts to catch late layout shifts
    const timeouts = [0, 50, 100, 200, 300, 500].map(delay =>
      setTimeout(scrollToTop, delay)
    )

    return () => timeouts.forEach(clearTimeout)
  }, [mounted])

  return null
}

export default HomeScrollFix

'use client'
import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const HomeScrollFix = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const navigationCount = useRef(0)

  // Disable browser scroll restoration once
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // Scroll to top on EVERY navigation (including same-route)
  useEffect(() => {
    navigationCount.current += 1

    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Immediate scroll
    scrollToTop()

    // After microtask
    Promise.resolve().then(scrollToTop)

    // After animation frame
    requestAnimationFrame(scrollToTop)

    // Delayed fallback
    const timeout = setTimeout(scrollToTop, 50)

    return () => clearTimeout(timeout)
  }, [pathname, searchParams]) // Re-run on any route change

  return null
}

export default HomeScrollFix

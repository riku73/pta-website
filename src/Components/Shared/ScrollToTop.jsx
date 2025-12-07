'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef } from 'react'

const ScrollToTop = () => {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  // Disable browser's native scroll restoration immediately
  if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  // Scroll to top on initial mount
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // Scroll to top on route change
  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  // Backup: also scroll on load event
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [pathname])

  return null
}

export default ScrollToTop

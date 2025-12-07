'use client'
import { useEffect, useRef, useState } from 'react'

const FadeIn = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const delayClass = delay ? `fade-in-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}

export default FadeIn

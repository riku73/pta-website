'use client'
import React from 'react'
import RanderHeader from './RanderHeader'
import Banner from '@/Components/Banner'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname === "/" ? (
        <div
          className="relative overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')`
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10">
            <RanderHeader />
            <Banner />
          </div>
        </div>
      ) : (
        <RanderHeader />
      )}
    </>
  )
}

export default Header
import React from "react"
import Image from "next/image"

interface LogoProps {
  className?: string
  width?: number
  height?: number
  foreground?: string
}

export function WrapVectorLogo({
  className = "w-auto h-7 sm:h-8",
  width = 120,
  height = 60,
}: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/images/agency-logo.png"
        alt="WrapVector Logo"
        width={width}
        height={height}
        className="w-full h-full object-contain filter brightness-100"
        priority
      />
    </div>
  )
}

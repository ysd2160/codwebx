import React, { useState, useEffect, Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

interface TechBackgroundProps {
  splineUrl?: string
}

export const TechBackground: React.FC<TechBackgroundProps> = ({
  splineUrl = 'https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode',
}) => {
  const [hasError, setHasError] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)

    const motionHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    motionQuery.addEventListener('change', motionHandler)

    // Check mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      motionQuery.removeEventListener('change', motionHandler)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // If mobile or reduced-motion or error, use the high-performance geometric technology canvas
  const shouldUseFallback = prefersReducedMotion || isMobile || hasError

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {!shouldUseFallback ? (
        <Suspense fallback={<GeometricTechArt />}>
          <div className="w-full h-full opacity-60 mix-blend-screen pointer-events-auto">
            <Spline
              scene={splineUrl}
              onError={() => setHasError(true)}
              className="w-full h-full"
            />
          </div>
        </Suspense>
      ) : (
        <GeometricTechArt />
      )}

      {/* Layer 2: Subtle fine architectural grid lines */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Layer 3: Vivid Soft Green Glow Orbs */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-[hsl(119_99%_46%/0.12)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-[350px] h-[350px] bg-[hsl(119_99%_46%/0.08)] rounded-full blur-[100px] pointer-events-none" />

      {/* Layer 4: Deep Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-[hsl(0_0%_7%/0.55)] to-[hsl(0_0%_7%/0.85)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(0_0%_7%)_90%)] pointer-events-none" />
    </div>
  )
}

/**
 * High-performance, pure SVG & CSS technology artwork
 * Featuring layered translucent geometric wireframes, glowing nodes, and clean green highlights
 */
const GeometricTechArt: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <svg
        className="absolute top-0 right-0 w-full h-full opacity-40"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(119 99% 46%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(119 99% 46%)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="wireGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* 3D Isometric Technological Cube Matrix */}
        <g transform="translate(680, 80)">
          {/* Outer perspective cage */}
          <polygon
            points="380,80 620,180 380,280 140,180"
            stroke="url(#wireGrad)"
            strokeWidth="1.2"
            fill="rgba(22, 234, 26, 0.02)"
          />
          <polygon
            points="140,180 380,280 380,560 140,460"
            stroke="url(#wireGrad)"
            strokeWidth="1.2"
            fill="rgba(255, 255, 255, 0.01)"
          />
          <polygon
            points="380,280 620,180 620,460 380,560"
            stroke="url(#wireGrad)"
            strokeWidth="1.2"
            fill="rgba(22, 234, 26, 0.03)"
          />

          {/* Inner floating crystal node */}
          <polygon
            points="380,180 500,230 380,280 260,230"
            stroke="url(#greenGrad)"
            strokeWidth="1.8"
            fill="rgba(22, 234, 26, 0.06)"
          />
          <polygon
            points="260,230 380,280 380,420 260,370"
            stroke="url(#greenGrad)"
            strokeWidth="1.8"
            fill="rgba(22, 234, 26, 0.04)"
          />
          <polygon
            points="380,280 500,230 500,370 380,420"
            stroke="url(#greenGrad)"
            strokeWidth="1.8"
            fill="rgba(22, 234, 26, 0.08)"
          />

          {/* Perspective grid projection rays */}
          <line x1="380" y1="280" x2="380" y2="700" stroke="url(#greenGrad)" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="140" y1="460" x2="-80" y2="600" stroke="url(#wireGrad)" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="620" y1="460" x2="840" y2="600" stroke="url(#wireGrad)" strokeWidth="1" strokeDasharray="4 6" />

          {/* Glowing Green Corner Nodes */}
          <circle cx="380" cy="280" r="4" fill="hsl(119 99% 46%)" />
          <circle cx="500" cy="230" r="3" fill="hsl(119 99% 46%)" opacity="0.8" />
          <circle cx="260" cy="230" r="3" fill="hsl(119 99% 46%)" opacity="0.8" />
          <circle cx="380" cy="420" r="4" fill="hsl(119 99% 46%)" />
        </g>
      </svg>
    </div>
  )
}

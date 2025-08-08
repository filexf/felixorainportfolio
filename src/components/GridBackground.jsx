'use client'

// Transparency level presets
export const transparencyLevels = {
  high: {
    lineOpacity: 0.03,
    dotOpacity: 0.05,
    waveOpacity: 0.02,
    gradientOpacity: 0.05,
  },
  medium: {
    lineOpacity: 0.08,
    dotOpacity: 0.15,
    waveOpacity: 0.05,
    gradientOpacity: 0.1,
  },
  low: {
    lineOpacity: 0.2,
    dotOpacity: 0.4,
    waveOpacity: 0.15,
    gradientOpacity: 0.2,
  },
}

export function GridBackground({
  className = '',
  lineColor = '#CBD5E1',
  dotColor = '#94A3B8',
  lineOpacity,
  dotOpacity,
  lineSize = 1,
  dotSize = 2,
  gridSize = 40,
  transparencyLevel = 'medium',
}) {
  const finalLineOpacity = lineOpacity ?? transparencyLevels[transparencyLevel].lineOpacity
  const finalDotOpacity = dotOpacity ?? transparencyLevels[transparencyLevel].dotOpacity

  const lineOpacityHex = Math.round(finalLineOpacity * 255)
    .toString(16)
    .padStart(2, '0')
  const dotOpacityHex = Math.round(finalDotOpacity * 255)
    .toString(16)
    .padStart(2, '0')

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor}${lineOpacityHex} ${lineSize}px, transparent ${lineSize}px),
            linear-gradient(to bottom, ${lineColor}${lineOpacityHex} ${lineSize}px, transparent ${lineSize}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `radial-gradient(${dotColor}${dotOpacityHex} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: `calc(${gridSize / 2}px) calc(${gridSize / 2}px)`,
        }}
      />
    </div>
  )
}

export function DotPattern({
  className = '',
  dotColor = '#94A3B8',
  dotOpacity = 0.15,
  dotSize = 1,
  gridSize = 20,
}) {
  const dotOpacityHex = Math.round(dotOpacity * 255)
    .toString(16)
    .padStart(2, '0')

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `radial-gradient(${dotColor}${dotOpacityHex} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
    </div>
  )
}

export function WavePattern({
  className = '',
  waveColor = '#3B82F6',
  waveOpacity = 0.05,
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ opacity: waveOpacity }}
      >
        <path
          fill={waveColor}
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export function GradientGrid({
  className = '',
  startColor = 'rgba(59, 130, 246, 0.1)',
  endColor = 'rgba(16, 185, 129, 0.1)',
  gridSize = 40,
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${startColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${endColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
    </div>
  )
}

'use client'

import { DotPattern, GradientGrid, WavePattern } from './GridBackground'

export function SectionWithBackground({
  children,
  variant = 'dots',
  className = '',
}) {
  return (
    <div className={`relative overflow-hidden py-16 ${className}`}>
      {variant === 'dots' && <DotPattern dotColor="#94A3B8" dotOpacity={0.3} gridSize={25} />}
      {variant === 'grid' && (
        <GradientGrid
          startColor="rgba(59, 130, 246, 0.1)"
          endColor="rgba(16, 185, 129, 0.1)"
          gridSize={40}
        />
      )}
      {variant === 'wave' && <WavePattern waveColor="#3B82F6" waveOpacity={0.05} />}

      <div className="relative z-10">{children}</div>
    </div>
  )
}

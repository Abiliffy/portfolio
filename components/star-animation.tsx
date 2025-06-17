"use client"

export function StarAnimation({ stars }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-star-fade"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            transform: `rotate(${star.rotation}deg)`,
            opacity: star.opacity,
          }}
        >
          <StarShape size={star.size} color={star.color} />
        </div>
      ))}
    </div>
  )
}

function StarShape({ size, color }) {
  // Choose randomly between different star shapes
  const starType = Math.floor(Math.random() * 3)

  if (starType === 0) {
    // Five-pointed star
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    )
  } else if (starType === 1) {
    // Sparkle star
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12,2A1,1 0 0,1 13,3V5.05C16.95,5.55 20,8.92 20,13A8,8 0 0,1 12,21A8,8 0 0,1 4,13C4,8.92 7.05,5.55 11,5.05V3A1,1 0 0,1 12,2M12,7A6,6 0 0,0 6,13A6,6 0 0,0 12,19A6,6 0 0,0 18,13A6,6 0 0,0 12,7Z" />
      </svg>
    )
  } else {
    // Simple star
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      />
    )
  }
}

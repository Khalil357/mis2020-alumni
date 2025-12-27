// src/components/ui/Card.tsx
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClass = hover ? 'hover:shadow-card-hover' : ''
  
  return (
    <div className={`bg-white rounded-xl shadow-card border border-gray-200 transition-shadow duration-200 ${paddingClasses[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
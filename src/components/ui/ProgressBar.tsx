// src/components/ui/ProgressBar.tsx
interface ProgressBarProps {
  value: number
  max: number
  label?: string
  showPercentage?: boolean
  color?: 'primary' | 'green' | 'gold'
}

export function ProgressBar({ value, max, label, showPercentage = true, color = 'primary' }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
  const colorClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600',
    green: 'bg-gradient-to-r from-green-500 to-green-600',
    gold: 'bg-gradient-to-r from-gold-500 to-gold-600'
  }
  
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <span className="font-semibold text-primary-700">{percentage.toFixed(1)}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ease-out ${colorClasses[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{value.toLocaleString()} TZS</span>
        <span>{max.toLocaleString()} TZS</span>
      </div>
    </div>
  )
}
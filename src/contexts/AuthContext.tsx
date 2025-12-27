// src/contexts/AuthContext.tsx - FIXED VERSION
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface User {
  id: string
  phone: string
  fullName: string
  graduationYear: number
  role: 'member' | 'leader' | 'admin'
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (phone: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (phone: string, password: string) => {
    setIsLoading(true)
    
    // Validate inputs
    if (!phone || phone.length < 9) {
      setIsLoading(false)
      throw new Error('Please enter a valid phone number')
    }

    if (!password || password.length < 6) {
      setIsLoading(false)
      throw new Error('Password must be at least 6 characters')
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real app, this would be an API call to your backend
    // For now, we'll mock successful login for any valid-looking credentials
    
    // Mock user data - in real app, this comes from backend
    const mockUser: User = {
      id: '1',
      phone: phone,
      fullName: 'Ahmed Hassan', // Would come from database
      graduationYear: 2020, // Would come from database
      role: 'member' // Would come from database
    }
    
    // Store in localStorage for persistence (simplified)
    localStorage.setItem('mivumoni_user', JSON.stringify(mockUser))
    
    setUser(mockUser)
    setIsLoading(false)
  }

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('mivumoni_user')
    setUser(null)
  }

  // Check if user exists in localStorage on mount
  // (This would be useEffect in real app, but keeping simple for now)

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
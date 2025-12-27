// src/components/layout/Header.tsx - RESPONSIVE VERSION
import { Menu, X, Bell, User } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="responsive-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <button 
              className="lg:hidden mr-3"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm arabic-text">م</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-primary-900">
                  Mivumoni Alumni 2020
                </h1>
                <p className="text-xs text-gray-500">Charity Portal</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-semibold text-primary-900">Mivumoni 2020</h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4">
            <a href="/" className="nav-link nav-link-active">
              Dashboard
            </a>
            <a href="/projects" className="nav-link">
              Projects
            </a>
            <a href="/contributions" className="nav-link">
              My Contributions
            </a>
            <a href="/profile" className="nav-link">
              Profile
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Ahmed H.</p>
                <p className="text-xs text-gray-500">Member</p>
              </div>
            </div>
            
            <div className="sm:hidden">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md bg-primary-50 text-primary-700 font-medium">
                Dashboard
              </a>
              <a href="/projects" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                Projects
              </a>
              <a href="/contributions" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                My Contributions
              </a>
              <a href="/profile" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                Profile
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a href="/settings" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                  Settings
                </a>
                <a href="/logout" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                  Logout
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
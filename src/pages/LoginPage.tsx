// src/pages/LoginPage.tsx - FIXED VERSION
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Phone, Lock, Eye, EyeOff, Users, Heart } from 'lucide-react'
import logo from '../assets/logo.png'  // Import your logo

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate login
    setTimeout(() => {
      setLoading(false)
      navigate('/')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-green-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Left Side - Brand & Info (Hidden on mobile, shown on desktop) */}
        <div className="hidden lg:flex flex-1 flex-col items-center justify-center p-8">
          <div className="max-w-md">
            {/* Logo and Branding */}
            <div className="flex flex-col items-center mb-8">
              {/* Your Logo */}
              <div className="mb-6">
                <img 
                  src={logo} 
                  alt="Mivumoni Islamic Seminary Logo" 
                  className="w-32 h-32 object-contain rounded-xl shadow-lg"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none'
                    const fallback = document.getElementById('logo-fallback')
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                {/* Fallback logo if image doesn't load */}
                <div 
                  id="logo-fallback" 
                  className="w-32 h-32 bg-primary-600 rounded-xl items-center justify-center shadow-lg hidden"
                >
                  <span className="text-4xl font-bold text-white arabic-text">م</span>
                </div>
              </div>
              
              {/* Brand Text */}
              <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
                  Mivumoni Alumni 2020
                </h1>
                <h2 className="text-2xl text-gradient font-semibold">
                  Charity Portal
                </h2>
              </div>
            </div>

            <div className="h-px bg-linear-to-r from-transparent via-primary-300 to-transparent my-6"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
              A transparent platform for alumni to collectively support charitable causes, 
              help community members, and make a meaningful impact with every contribution.
            </p>

            {/* Features List */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Blind Contributions</h3>
                  <p className="text-sm text-gray-600">Donate without social pressure or amount comparison</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">100% Transparency</h3>
                  <p className="text-sm text-gray-600">Every transaction tracked with digital receipts and audit trail</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-primary-700">150+</div>
                <div className="text-sm text-gray-600">Alumni</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-primary-700">₦ 2.5M</div>
                <div className="text-sm text-gray-600">Raised</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-primary-700">12</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-120">
          {/* Mobile Header (Only shown on mobile) */}
          <div className="lg:hidden text-center mb-8">
            {/* Mobile Logo */}
            <div className="flex flex-col items-center mb-6">
              <div className="mb-4">
                <img 
                  src={logo} 
                  alt="Mivumoni Logo" 
                  className="w-24 h-24 object-contain rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = document.getElementById('mobile-logo-fallback')
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                {/* Fallback for mobile */}
                <div 
                  id="mobile-logo-fallback" 
                  className="w-24 h-24 bg-primary-600 rounded-xl items-center justify-center hidden"
                >
                  <span className="text-3xl font-bold text-white arabic-text">م</span>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-primary-900">
                Mivumoni Alumni 2020
              </h1>
              <h2 className="text-xl text-gradient font-semibold mt-2">
                Charity Portal
              </h2>
            </div>
          </div>

          {/* Login Card */}
          <Card className="shadow-xl border-0">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-500 mt-2">Sign in to your account</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Phone Input */}
              <div className="space-y-2">
                <label className="label-primary flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 font-medium">+255</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                    placeholder="712 345 678"
                    className="input-primary pl-16 text-lg"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Enter your 9-digit Tanzanian phone number
                </p>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="label-primary flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input-primary pr-10 text-lg"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">
                    Minimum 6 characters
                  </p>
                  <a href="#" className="text-xs text-primary-600 hover:text-primary-800 font-medium">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Remember Me & Terms */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
                
                <a href="#" className="text-xs text-primary-600 hover:text-primary-800 font-medium">
                  Terms & Conditions
                </a>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                loading={loading}
                fullWidth
                size="lg"
                className="shadow-md hover:shadow-lg transition-shadow text-lg"
              >
                Sign In to Portal
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Don't have an account?</span>
                </div>
              </div>

              {/* Register Link */}
              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    // Navigate to register page
                  }}
                >
                  <Users className="w-4 h-4" />
                  Request to join alumni portal
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  Contact alumni leaders for invitation
                </p>
              </div>
            </form>
          </Card>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img 
                src={logo} 
                alt="Mivumoni Logo" 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Mivumoni Islamic Seminary Alumni 2020
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Secure • Transparent • Community-Driven
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
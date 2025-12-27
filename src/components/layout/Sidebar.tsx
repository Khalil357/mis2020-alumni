// src/components/layout/Sidebar.tsx
import { 
  Home, 
  FolderKanban, 
  DollarSign, 
  Users, 
  BarChart3, 
  Settings,
  LogOut,
  Heart
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  const { logout, user } = useAuth()

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', path: '/' },
    { icon: <FolderKanban className="w-5 h-5" />, label: 'Projects', path: '/projects' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Contributions', path: '/contributions' },
    { icon: <Heart className="w-5 h-5" />, label: 'Aid Requests', path: '/aid' },
    { icon: <Users className="w-5 h-5" />, label: 'Members', path: '/members' },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Reports', path: '/reports' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/settings' },
  ]

  return (
    <aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col border-r border-gray-200 bg-white">
      {/* User Profile */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-primary-700">
              {user?.fullName?.charAt(0) || 'A'}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 truncate">{user?.fullName || 'Member'}</h3>
            <p className="text-sm text-gray-500">Alumni 2020 • {user?.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Stats</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Active Projects</span>
                <span className="font-medium">5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-primary-600 h-1.5 rounded-full w-3/4"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Your Contributions</span>
                <span className="font-medium">₦ 245,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-green-600 h-1.5 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
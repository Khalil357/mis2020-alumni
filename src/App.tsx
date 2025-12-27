// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import ProfilePage from './pages/ProfilePage'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

function App() {
  // For now, we'll use a simple auth check
  // Later we'll replace with proper auth context
  const isAuthenticated = false // Change to true to test authenticated routes

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {isAuthenticated && <Header />}
        
        <main className="flex-1">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Routes */}
            <Route path="/" element={
              isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />
            } />
            
            <Route path="/projects" element={
              isAuthenticated ? <ProjectsPage /> : <Navigate to="/login" />
            } />
            
            <Route path="/profile" element={
              isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />
            } />
            
            {/* Catch all */}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
          </Routes>
        </main>
        
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  )
}

export default App
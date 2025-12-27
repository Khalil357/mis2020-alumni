// src/components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-primary-600 rounded-sm flex items-center justify-center mr-2">
                <span className="text-white text-xs arabic-text">م</span>
              </div>
              <span className="text-sm text-gray-600">
                Mivumoni Alumni 2020 Charity Portal
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} - Built with ❤️ for our community
          </div>
        </div>
      </div>
    </footer>
  )
}
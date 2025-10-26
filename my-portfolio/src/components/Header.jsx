import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import Navigation from './Navigation'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className={`header ${theme}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo/Brand */}
          <div className="header-logo">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="header-logo-link"
            >
              Saloni Redij
            </a>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Theme Toggle */}
          <div className="header-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
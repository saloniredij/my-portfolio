import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import Navigation from './Navigation'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className={`header ${theme}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Navigation (desktop) */}
          <Navigation />

          {/*theme toggle */}
          <div className="header-controls">
            <div className="header-theme-toggle">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
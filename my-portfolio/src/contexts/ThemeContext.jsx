import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark') // Default to dark theme

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme)
    } else {
      // Default to dark if no saved preference or invalid value
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement // Apply to HTML element, not body

    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    // Apply the current theme to HTML element
    root.classList.add(theme)

    // Save theme preference
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
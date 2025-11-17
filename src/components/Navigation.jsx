import { useState, useEffect, useRef } from 'react'
import NavLink from './NavLink'
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'
import { navigationItems } from '../data/navigation'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update active box position when active section changes
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`)
      const activeBox = navRef.current.querySelector('.active-box')
      
      if (activeLink && activeBox) {
        const linkRect = activeLink.getBoundingClientRect()
        const navRect = navRef.current.getBoundingClientRect()
        
        const left = linkRect.left - navRect.left
        const top = linkRect.top - navRect.top
        
        activeBox.style.left = `${left}px`
        activeBox.style.top = `${top}px`
        activeBox.style.width = `${linkRect.width}px`
        activeBox.style.height = `${linkRect.height}px`
      }
    }
  }, [activeSection])

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button - appears on left on mobile */}
      <MobileMenuButton 
        isOpen={isMobileMenuOpen} 
        onClick={toggleMobileMenu} 
      />

      {/* Desktop Navigation */}
      <nav className="header-nav" ref={navRef}>
        {/* Single sliding active box */}
        <div className="active-box"></div>
        
        {navigationItems.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            onClick={handleSectionChange}
          />
        ))}
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  )
}

export default Navigation
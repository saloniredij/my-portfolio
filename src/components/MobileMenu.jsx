import { useState } from 'react'
import NavLink from './NavLink'
import { navigationItems } from '../data/navigation'

const MobileMenu = ({ activeSection, onSectionChange, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Mobile menu panel */}
      <div className={`mobile-menu-panel ${isOpen ? 'open' : ''}`} role="dialog" aria-hidden={!isOpen}>
        <nav className="mobile-menu-nav">
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={(id) => {
                onSectionChange(id)
                onClose()
              }}
            />
          ))}
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
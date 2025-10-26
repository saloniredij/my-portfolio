import { useState } from 'react'
import NavLink from './NavLink'
import { navigationItems } from '../data/navigation'

const MobileMenu = ({ activeSection, onSectionChange, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Mobile menu */}
      <div className={`
        fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700
        transform transition-transform duration-200 ease-in-out z-50 md:hidden
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <nav className="px-4 py-4 space-y-2">
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
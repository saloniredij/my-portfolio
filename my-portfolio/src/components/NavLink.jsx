import { useState } from 'react'

const NavLink = ({ item, isActive, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onClick(item.id)
    
    // Smooth scroll to section with offset for header
    const element = document.getElementById(item.id)
    if (element) {
      const headerHeight = 64 // 4rem = 64px
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <a
      href={item.href}
      onClick={handleClick}
      data-section={item.id}
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {item.label}
    </a>
  )
}

export default NavLink
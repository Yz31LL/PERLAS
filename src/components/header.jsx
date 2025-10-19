import React from 'react'
import '../styles/App.css'

const buttons = [
  { label: 'Units', color: '#2ca02c' },
  { label: 'Manage', color: '#2ca02c' },
  { label: 'Road Support', color: '#ff8c00' },
  { label: 'Toggle Layer', color: '#ff8c00' },
  { label: 'Disaster Mode', color: '#ff3b30' },
  { label: 'Admin Tools', color: '#7b1fa2' },
]

export default function Header() {
  return (
    <header className="app-header" class="padding-bottom: 50px">
      <nav className="header-nav">
        {buttons.map((b) => (
          <button   
            key={b.label}
            className="header-btn"
            style={{ background: b.color }}
            type="button"
            aria-label={b.label}
          >
            {b.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

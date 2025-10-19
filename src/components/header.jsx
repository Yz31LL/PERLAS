import React from 'react';
import '../styles/App.css';

const buttons = [
  { label: 'Units', color: '#2ca02c' },
  { label: 'Manage', color: '#2ca02c' },
  { label: 'Road Support', color: '#ff8c00' },
  { label: 'Toggle Layer', color: '#ff8c00' },
  { label: 'Disaster Mode', color: '#ff3b30' },
  { label: 'Admin Tools', color: '#7b1fa2' },
];

export default function Header() {
  return (
    <header
      className="app-header"
      style={{
        backgroundColor: 'transparent', // ✨ removes white background
        padding: '10px 20px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // keeps header above map
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <nav
        className="header-nav"
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {buttons.map((b) => (
          <button
            key={b.label}
            className="header-btn"
            style={{
              background: b.color,
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 14px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
            type="button"
            aria-label={b.label}
          >
            {b.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

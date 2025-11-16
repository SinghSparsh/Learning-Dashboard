import React from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"; 
import "./Header.css";

export default function Header({ toggleSidebar, isSidebarOpen, toggleTheme, currentTheme }) {
  
  const ThemeIcon = currentTheme === 'dark' ? FiSun : FiMoon;

  return (
    <header className="header">
      <button className="menu-button" onClick={toggleSidebar}>
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <h1>Activity Hub</h1>
      
      <button 
        className="theme-toggle-button" 
        onClick={toggleTheme}
        aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <ThemeIcon size={24} />
      </button>
    </header>
  );
}
import React from "react";
import { FiX } from "react-icons/fi";
import "./SideBar.css";


export default function Sidebar({ filters, setFilter, status, setStatus, time, setTime, isSidebarOpen, toggleSidebar }) {
  
  const resetStatus = () => {
    setStatus(null);
    toggleSidebar();
  };

  const resetTime = () => {
    setTime(null);
    toggleSidebar();
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        
   
      <div className="filter-group">
        <strong>Status</strong>
        <button className={status === 'In Progress' ? "active" : ""} onClick={() => {setStatus("In Progress"); toggleSidebar();}}>In Progress</button>
        <button className={status === 'Not Started' ? "active" : ""} onClick={() => {setStatus("Not Started"); toggleSidebar();}}>Not Started</button>
        <button className={status === 'Completed' ? "active" : ""} onClick={() => {setStatus("Completed"); toggleSidebar();}}>Completed</button>
        
        <button className="reset-button" onClick={resetStatus}>Reset</button>
      </div>

      <div className="filter-group">
        <strong>Time to Complete</strong>
        <button className={time === 'Quick' ? "active" : ""} onClick={() => {setTime("Quick"); toggleSidebar();}}>Quick (&lt; 30 min)</button>
        <button className={time === 'Medium' ? "active" : ""} onClick={() => {setTime("Medium"); toggleSidebar();}}>Medium (30–90 min)</button>
        <button className={time === 'Long' ? "active" : ""} onClick={() => {setTime("Long"); toggleSidebar();}}>Long (&gt; 90 min)</button>
        
        <button className="reset-button" onClick={resetTime}>Reset</button>
      </div>
    </aside>
  );
}
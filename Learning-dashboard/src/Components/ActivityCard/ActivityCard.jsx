import React from "react";
import "./ActivityCard.css";
import { FiClock } from "react-icons/fi";
import { FaPlayCircle, FaArrowRight, FaRedoAlt } from "react-icons/fa";


export default function ActivityCard({ activity }) {
  let badgeClass = "";
  let badgeText = "";


  if (activity.status === "In Progress") {
    badgeClass = "status-in-progress";
    badgeText = "In Progress";
  } else if (activity.status === "Completed") {
    badgeClass = "status-completed";
    badgeText = "Completed";
  } else if (activity.status === "Not Started") {
    badgeClass = "status-not-started";
    badgeText = "Not Started";
  }


  return (
    <div className={`activity-card`}>
      
      <div className={`activity-status-badge ${badgeClass}`}>
        {activity.status === "In Progress" && activity.progress
          ? `${badgeText} (${activity.progress}%)`
          : badgeText
        }
      </div>
      
      <div className="activity-meta">
        <span className="category">{activity.category}</span>
      </div>
      
      <h3>{activity.title}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end' }}>
        <div className="activity-details">
          <span className="activity-time">
            <FiClock /> {activity.time}
          </span>
          <span className={`type ${activity.type.toLowerCase()}`}>{activity.type}</span>
        </div>


        <div className="activity-action">
          {activity.status === "In Progress" && activity.progress && (
            <div className="activity-progress-bar">
              <div className="progress-fill" style={{width: `${activity.progress}%`}} />
            </div>
          )}


          {activity.status === "In Progress" && (
            <button>
              <FaPlayCircle /> Continue
            </button>
          )}
          {activity.status === "Not Started" && (
            <button>
              <FaArrowRight /> Start Now
            </button>
          )}
          {activity.status === "Completed" && (
            <button>
              <FaRedoAlt /> Review
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
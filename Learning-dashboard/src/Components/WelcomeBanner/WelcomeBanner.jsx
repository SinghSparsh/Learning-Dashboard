import React from 'react';
import { FiSmile, FiPlayCircle, FiCheckCircle, FiAlignJustify } from 'react-icons/fi';
import './WelcomeBanner.css';

export default function WelcomeBanner({ 
  userName = 'User', 
  inProgress = 2, 
  forReview = 2, 
  remaining = 4 
}) {
  return (
    <div className="welcome-banner">
     <div className="banner-header-row">
    <div className="banner-text">
        <h2 className="banner-greeting">Hello, {userName}!</h2>
        <p className="banner-tagline">
            Let's focus on your next steps toward certification.
        </p>
    </div>
    <FiSmile size={50} className="smiley-icon" />
</div>

        <div className="status-cards-container">
       <div className="status-card">
    <div className="count-icon-group">
        <FiPlayCircle size={30} /> 
        <span className="status-count">{inProgress}</span>
    </div>
    <span className="status-label">In Progress</span>
</div>
          <div className="status-card">
           <div className="count-icon-group">
    <FiCheckCircle size={30} />
    <span className="status-count">{forReview}</span>
</div>
            <span className="status-label">For Review</span>
          </div>
          <div className="status-card">
          <div className="count-icon-group">
    <FiAlignJustify size={30} />
    <span className="status-count">{remaining}</span>
</div>
            <span className="status-label">Remaining</span>
          </div>
        </div>
      </div>
    
  );
}
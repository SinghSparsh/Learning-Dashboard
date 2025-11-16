import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";
import SearchBar from "./Components/SearchBar/SearchBar";
import ActivityList from "./Components/ActivityList/ActivityList";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";

const ACTIVITY_DATA = [
  {
    id: 1,
    category: "DL Basics",
    status: "In Progress",
    progress: 60,
    title: "Introduction to PyTorch Fundamentals",
    time: "45 min",
    type: "Class"
  },
  {
    id: 2,
    category: "Advanced Computer Vision",
    status: "In Progress",
    progress: 30,
    title: "Convolutional Neural Networks (CNNs) Assessment",
    time: "20 min",
    type: "Assessment"
  },
  {
    id: 3,
    category: "GCP Specialization",
    status: "Not Started",
    title: "Deploying a Serverless App on Google Cloud",
    time: "1 hr 30 min",
    type: "Class"
  },
  {
    id: 4,
    category: "Foundations of Data Science",
    status: "Not Started",
    title: "Data Preprocessing Assignment",
    time: "45 min",
    type: "Assessment"
  },
  {
    id: 5,
    category: "DevOps",
    status: "Completed",
    title: "Kubernetes Cluster Management Essentials",
    time: "1 hr",
    type: "Class"
  },
  {
    id: 6,
    category: "Advanced ML Techniques",
    status: "Completed",
    title: "Reinforcement Learning Project Setup",
    time: "3 hr",
    type: "Assessment"
  }
];


export default function App() {
  const [filter, setFilter] = useState("All");
  const [status, setStatus] = useState(null);
  const [theme, setTheme] = useState("dark"); 
  const [time, setTime] = useState(null);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

const toggleTheme = () => {
    setTheme(current => (current === "light" ? "dark" : "light"));
  };
  let filtered = ACTIVITY_DATA.filter(a => {
    let matchType = filter === "All" || a.type === filter;
    let matchStatus = !status || a.status === status;
    let matchTime = true;
  
    if (time === "Quick") matchTime = a.time.includes("min") && parseInt(a.time) < 30;
    else if (time === "Medium") matchTime = (
      (a.time.includes("min") && parseInt(a.time) >= 30 && parseInt(a.time) <= 90)
      || (a.time.includes("hr") && parseInt(a.time) === 1 && a.time.includes("30 min"))
    );
    else if (time === "Long") matchTime = (
      (a.time.includes("hr") && parseInt(a.time) > 1)
      || (a.time.includes("hr") && a.time.includes("30 min"))
    );


    let matchQuery = !query || a.title.toLowerCase().includes(query.toLowerCase());
    return matchType && matchStatus && matchTime && matchQuery;
  });

  return (
    <div className={`app ${theme}`}>
      <Header toggleSidebar={toggleSidebar}
      toggleTheme={toggleTheme} 
        currentTheme={theme}
         isSidebarOpen={isSidebarOpen} />
      <div className="main-container">
        <Sidebar
          filters={filter}
          setFilter={setFilter}
          status={status}
          setStatus={setStatus}
          time={time}
          setTime={setTime}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="content">
          <WelcomeBanner userName="Alex" inProgress={2} forReview={2} remaining={4} /> 

        <h2 className="activity-stream-title">Activity Stream</h2> 
        <div className="activity-type-tabs">
<button className={filter === 'All' ? "active" : ""} onClick={() => setFilter("All")}>All</button>
    <button className={filter === 'Class' ? "active" : ""} onClick={() => setFilter("Class")}>Class</button>
    <button className={filter === 'Assessment' ? "active" : ""} onClick={() => setFilter("Assessment")}>Assessment</button>
</div>
          <SearchBar query={query} setQuery={setQuery} />
          <ActivityList activities={filtered} />
        </div>
      </div>
    </div>
  );
}
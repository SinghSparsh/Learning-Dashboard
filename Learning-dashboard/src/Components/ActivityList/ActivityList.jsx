import React from "react";
import "./ActivityList.css";
import ActivityCard from "../ActivityCard/ActivityCard";

export default function ActivityList({ activities }) {
  return (
    <div className="activity-list">
      {activities.map(activity => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

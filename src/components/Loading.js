// src/components/Loading/Loading.js
import React from "react";
import "./Loading.css"; // Import the CSS for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;

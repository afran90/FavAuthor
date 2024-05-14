import React, { useState } from "react";
import "./Toast.css"; // Import CSS for styling

const Toast = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle toast close
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`toast ${isVisible ? "show" : ""}`}>
      <div className="toast-message">{message}</div>
      <div className="progress-bar"></div>
    </div>
  );
};

export default Toast;

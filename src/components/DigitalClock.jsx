import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  // Update every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Extract hours, minutes, and seconds with leading zeros
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const labels = ["Hours", "Minutes", "Seconds"];
  const values = [hours, minutes, seconds];

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>

      {labels.map((label, index) => (
        <p key={index}>
          {label}: {values[index]}
        </p>
      ))}
    </div>
  );
}

export default DigitalClock; 
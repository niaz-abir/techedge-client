"use client";
import { TimerIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const initialTimeInSeconds = 48 * 60 * 60; // 48 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / (3600 * 24));
    const remainingSeconds = timeInSeconds % (3600 * 24);
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    if (days > 0) {
      return `${days}d:${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div>
      <div>
        <p className=" text-[20px] flex gap-2 items-center bg-sky-700 p-3">
          {" "}
          <TimerIcon />
          Time Remaining: {formatTime(timeLeft)}
        </p>
      </div>
    </div>
  );
};

export default Timer;

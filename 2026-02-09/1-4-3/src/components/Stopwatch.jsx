import { useState, useRef, useEffect } from "react";

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const format = (times) => {
    const minutes = Math.floor((times / 60000) % 60);
    const seconds = Math.floor((times / 1000) % 60);
    const milliSeconds = Math.floor((times / 10) % 100);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliSeconds).padStart(2, "0")}`;
  };

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return (
    <div className="container">
      <h1>{format(time)}</h1>
      <div className="btn">
        <button className="start" onClick={start}>
          Start
        </button>
        <button className="stop" onClick={stop}>
          Stop
        </button>
      </div>
      <div className="reset">
        <button className="reset-btn" onClick={reset}>
          Reset Timer
        </button>
      </div>
    </div>
  );
}

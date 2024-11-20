import "./App.css";
import { useEffect, useState } from "react";
function Clock() {
  const time = new Date();
  const [hour, setHour] = useState(0);
  const [mintute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setHour(time.getHours() % 12);
      setMinute(time.getMinutes());
      setSecond(time.getSeconds());
    }, 1000);
  }, [second]);
  return (
    <div className="clockApp">
      <h1>Current Time</h1>
      <div className="clock">
        <span>{hour} : </span>
        <span>{mintute} : </span>
        <span>{second} </span>
      </div>
    </div>
  );
}
export default Clock;

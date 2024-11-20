import "./App.css";
import { useEffect, useState } from "react";
function CountDownTimer() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [plainText, setPlainText] = useState(false);
  const [pause, setPause] = useState(false);

  const hoursHandler = (event) => {
    setHour(event.target.value);
  };
  const minutesHandler = (event) => {
    setMinute(event.target.value);
  };
  const secondsHandler = (event) => {
    setSecond(event.target.value);
  };
  const submitHandler = () => {
    setPlainText(true);
  };
  useEffect(() => {
    if (pause) {
      return;
    }
    const interval = setTimeout(() => {
      if (second != 0) {
        setSecond(second - 1);
      } else if (minute != 0) {
        setMinute(minute - 1);
        setSecond(59);
      } else if (hour != 0) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(60);
      } else {
        if (plainText) {
          alert("Times up");
          setPlainText(false);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [plainText, second, pause]);

  const handlePause = () => {
    setPause(true);
  };
  const submitHandlerAfterPause = () => {
    setPause(false);
  };
  const resetHandler = () => {
    setPause(false);
    setPlainText(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
  };
  return (
    <div>
      <h1>Countdown Timer</h1>
      <div className="countdown">
        {plainText ? (
          <div>
            <h1>
              {hour} : {minute} : {second}{" "}
              {pause ? (
                <button onClick={submitHandlerAfterPause}>Start</button>
              ) : (
                <button onClick={handlePause}>Pause</button>
              )}
              <button onClick={resetHandler}>Reset</button>
            </h1>
          </div>
        ) : (
          <div className="countdownfields">
            <input
              type="number"
              placeHolder={"HH"}
              onChange={hoursHandler}
              min={0}
              max={24}
            />
            :
            <input
              type="number"
              placeHolder={"MM"}
              onChange={minutesHandler}
              min={0}
              max={60}
            />
            :
            <input
              type="number"
              placeHolder={"SS"}
              onChange={secondsHandler}
              min={0}
              max={60}
            />
            <button onClick={submitHandler}>Start</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default CountDownTimer;

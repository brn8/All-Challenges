import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [allCounter, setAllCounter] = useState([]);
  const [allRedo, setAllRedo] = useState([]);
  const undoHandler = () => {
    if (allCounter.length > 0) {
      const lastElement = allCounter.pop();
      setAllRedo([...allRedo, lastElement]);
      setAllCounter(
        allCounter.filter(
          (cur) =>
            cur.currentCount !== lastElement.currentCount &&
            cur.previousCount !== lastElement.previousCount
        )
      );

      setCounter(lastElement.previousCount);
    }
  };
  const redoHandler = () => {
    if (allRedo.length > 0) {
      const lastElement = allRedo.pop();
      setAllCounter([...allCounter, lastElement]);
      setCounter(lastElement.currentCount);
      setAllRedo([]);
    }
  };
  const decrementHundred = () => {
    const currentCount = counter - 100;
    const previousCount = currentCount + 100;
    setCounter(counter - 100);
    console.log(counter);
    setAllCounter([
      ...allCounter,
      {
        value: 100,
        currentCount: currentCount,
        previousCount: previousCount,
        sign: "-",
      },
    ]);
    setAllRedo([]);
  };
  const decrementTen = () => {
    const currentCount = counter - 10;
    const previousCount = currentCount + 10;
    setCounter(counter - 10);
    setAllCounter([
      ...allCounter,
      {
        value: 10,
        currentCount: currentCount,
        previousCount: previousCount,
        sign: "-",
      },
    ]);
    setAllRedo([]);
  };
  const decrementOne = () => {
    const currentCount = counter - 1;
    const previousCount = currentCount + 1;
    setCounter(counter - 1);
    setAllCounter([
      ...allCounter,
      {
        value: 1,
        currentCount: currentCount,
        previousCount: previousCount,
        sign: "-",
      },
    ]);
    setAllRedo([]);
  };
  const incrementOne = () => {
    const currentCount = counter + 1;
    const previousCount = currentCount - 1;
    setCounter(counter + 1);
    setAllCounter([
      ...allCounter,
      {
        value: 1,
        currentCount: currentCount,
        previousCount: previousCount,
        sign: "+",
      },
    ]);
    setAllRedo([]);
  };
  const incrementTen = () => {
    const currentCount = counter + 10;
    const previousCount = currentCount - 10;
    setCounter(counter + 10);
    setAllCounter([
      ...allCounter,
      {
        value: 10,
        currentCount: currentCount,
        previousCount: previousCount,
        sign: "+",
      },
    ]);
    setAllRedo([]);
  };
  const incrementHundred = () => {
    const currentCount = counter + 100;
    const previousCount = currentCount - 100;
    setCounter(counter + 100);
    setAllCounter([
      ...allCounter,
      {
        value: 100,
        currentCount: currentCount,
        previousCount: previousCount,
        sign: "+",
      },
    ]);
    setAllRedo([]);
  };

  return (
    <div className="App">
      <h1>Undoable counter</h1>
      <div className="undoRedo">
        <button onClick={undoHandler} disabled={allCounter.length === 0}>
          Undo
        </button>
        <button onClick={redoHandler} disabled={allRedo.length === 0}>
          Redo
        </button>
      </div>
      <div className="incrementDecrement">
        <button onClick={decrementHundred}>-100</button>
        <button onClick={decrementTen}>-10</button>
        <button onClick={decrementOne}>-1</button>
        <span>{counter}</span>
        <button onClick={incrementOne}>1</button>
        <button onClick={incrementTen}>10</button>
        <button onClick={incrementHundred}>100</button>
      </div>
      <div>
        <h2>History</h2>
        <div className="history">
          {allCounter.map((cur, index) => (
            <p
              key={index}
            >{`${cur.sign}${cur.value}   (${cur.previousCount} -> ${cur.currentCount})`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

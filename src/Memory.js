import "./App.css";
import { useEffect, useState } from "react";

function Memory() {
  const [arr, setArr] = useState([]);
  const [openCardValue, setOpenCardValue] = useState([]);
  const [totalMatch, setTotalMatch] = useState(0);
  const [randomNum, setRandomNum] = useState(true);
  const visible = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ];
  const [check, setCheck] = useState(visible);

  useEffect(() => {
    if (randomNum) {
      const randomNumbers = [];
      for (let i = 0; i < 8; i++) {
        let temp = Math.ceil(Math.random() * 30);
        randomNumbers.push(temp);
        randomNumbers.push(temp);
      }
      randomNumbers.sort(() => Math.random() - 0.5);
      setArr([
        [
          randomNumbers[0],
          randomNumbers[1],
          randomNumbers[2],
          randomNumbers[3],
        ],
        [
          randomNumbers[4],
          randomNumbers[5],
          randomNumbers[6],
          randomNumbers[7],
        ],
        [
          randomNumbers[8],
          randomNumbers[9],
          randomNumbers[10],
          randomNumbers[11],
        ],
        [
          randomNumbers[12],
          randomNumbers[13],
          randomNumbers[14],
          randomNumbers[15],
        ],
      ]);
      setRandomNum(false);
      setTotalMatch(0);
      setCheck([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ]);
      setOpenCardValue([]);
    }
    if (openCardValue.length === 2) {
      if (
        arr[openCardValue[0][0]][openCardValue[0][1]] ===
        arr[openCardValue[1][0]][openCardValue[1][1]]
      ) {
        setTotalMatch(totalMatch + 1);
        setTimeout(() => {
          setCheck([
            ...check,
            (check[openCardValue[1][0]][openCardValue[1][1]] = null),
          ]);
          setCheck([
            ...check,
            (check[openCardValue[0][0]][openCardValue[0][1]] = null),
          ]);
          setOpenCardValue([]);
        }, 1000);
      } else {
        setTimeout(() => {
          setCheck([
            ...check,
            (check[openCardValue[1][0]][openCardValue[1][1]] = false),
          ]);
          setCheck([
            ...check,
            (check[openCardValue[0][0]][openCardValue[0][1]] = false),
          ]);
          setOpenCardValue([]);
        }, 1000);
      }
    }
  }, [openCardValue, randomNum]);
  const handler = (index, index2) => {
    if (openCardValue.length <= 1 && check[index][index2] != true) {
      setCheck([...check, (check[index][index2] = true)]);
      setOpenCardValue([...openCardValue, [index, index2]]);
    }
  };
  const handlerPlayAgain = () => {
    setRandomNum(true);
  };
  return (
    <div className="memoryApp">
      <h1>Memory Game</h1>
      <div className="board">
        {totalMatch === 8 ? (
          <button onClick={handlerPlayAgain}>Play Again</button>
        ) : (
          arr.map((insideArr, outerIndex) => (
            <div>
              {insideArr.map((arrs, innerIndex) => (
                <button
                  onClick={() => handler(outerIndex, innerIndex)}
                  disabled={
                    check[outerIndex][innerIndex] === null ? true : false
                  }
                  style={{
                    border:
                      check[outerIndex][innerIndex] === null ||
                      check[outerIndex][innerIndex] === false
                        ? "none"
                        : "",
                  }}
                >
                  {!check[outerIndex][innerIndex] &&
                  check[outerIndex][innerIndex] !== null ? (
                    <img
                      src="https://i.pinimg.com/236x/6d/c5/9a/6dc59a5a74257007e0b79e19a3720ccd.jpg"
                      style={{ width: "70px" }}
                    />
                  ) : (
                    check[outerIndex][innerIndex] && arr[outerIndex][innerIndex]
                  )}
                </button>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Memory;

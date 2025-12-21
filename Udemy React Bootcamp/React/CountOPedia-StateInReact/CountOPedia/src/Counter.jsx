import { useEffect, useState } from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

//NESTED STATE Updates are discouraged in REACT Framework

function Counter() {
  const [count, setCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  function handleIncrement() {
    const newValue = count + 1;
    setCount(newValue);
  }

  function handleDecrement() {
    const newValue = count - 1;
    setCount(newValue);
  }

  useEffect(() => {
    //Side Effects Code Here
    if (count <= -5) setGameStatus("You Lost");
    else if (count >= 5) setGameStatus("You Won");
    else setGameStatus("");
  }, [count]);

  function handleRandomPlay() {
    const playmode = Math.round(Math.random());
    if (playmode == 0) handleIncrement();
    else handleDecrement();
  }

  function handleReset() {
    setCount(0);
  }

  function handleLog() {
    console.log(count);
  }

  return (
    <div className="container">
      <div className="row text-white text-center">
        <h1>Game Score : {count}</h1>
        <p>You Win at +5 and Lose at -5</p>
        <p>Last Play</p>
        {gameStatus.length > 0 && <h3>Game Status : {gameStatus}</h3>}
        <div className="col-6 col-md-2 offset-md-3">
          <img
            src={attack}
            alt="Attack Image Not Found"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            onClick={handleIncrement}
            className="p-4 rounded"
          ></img>
        </div>
        <div className="col-6 col-md-2 offset-md-3">
          <img
            src={defend}
            alt="Defend Image Not Found"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            onClick={handleDecrement}
            className="p-4 rounded"
          ></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-success m-2 w=100"
            onClick={handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button className="btn btn-danger m-2 w=100" onClick={handleReset}>
            Reset
          </button>
          <br />
          <button className="btn btn-warning m-2 w=100" onClick={handleLog}>
            Log
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;

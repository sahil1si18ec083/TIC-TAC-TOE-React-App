import "./styles.css";
import TicTacToe from "./Components/TicTacToe";
import Result from "./Components/Result";
import { useState } from "react";
import { rows, columns, lines } from "./Constants";
export default function App() {
  const nullArray = new Array(rows * columns).fill(null);
  const tickTacToeArray = [];
  nullArray.forEach((ticTacToeItem, index) => {
    tickTacToeArray.push({ id: index, value: ticTacToeItem });
  });
  const [result, showResult] = useState(false);
  const [draw, setDraw] = useState(false);

  const [tickTacToeState, setTickTacToeState] = useState(tickTacToeArray);
  const [turn, setTurn] = useState({
    crosses: true,
    noughts: false
  });

  const [winner, setWinner] = useState(null);
  return (
    <div className="App">
      <TicTacToe
        showResult={showResult}
        tickTacToeState={tickTacToeState}
        setTickTacToeState={setTickTacToeState}
        setTurn={setTurn}
        turn={turn}
        setWinner={setWinner}
        draw={draw}
        setDraw={setDraw}
      />
      {result && (
        <Result
          winner={winner}
          showResult={showResult}
          setTickTacToeState={setTickTacToeState}
          setTurn={setTurn}
          setWinner={setWinner}
          tickTacToeArray={tickTacToeArray}
          draw={draw}
          setDraw={setDraw}
        />
      )}
    </div>
  );
}

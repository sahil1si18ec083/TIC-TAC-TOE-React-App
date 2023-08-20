import Square from "./Square";
const Result = ({
  winner,
  showResult,
  setTickTacToeState,
  setTurn,
  setWinner,
  tickTacToeArray,
  draw,
  setDraw
}) => {
  const fnNewGameClickHandler = () => {
    showResult(false);
    setTurn({
      crosses: true,
      noughts: false
    });
    setWinner(null);
    setTickTacToeState(tickTacToeArray);
    setDraw(false);
  };
  return (
    <>
      <div className={"winner"}>
        <div className="text">
          {!draw ? <h2>Win !! :)</h2> : <h2>Draw !! :)</h2>}

          <div className={"win"}>
            {winner !== null && <Square value={winner} squareId={null} />}
          </div>
          <div className={"tic-tac-toe "}>
            <button onClick={() => fnNewGameClickHandler()}> New Game </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Result;

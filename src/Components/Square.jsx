const Square = ({
  value,
  setTickTacToeState,
  setTurn,
  turn,
  squareId,
  tickTacToeState
}) => {
  let classNameValue = "";
  if ((value === "X" || value === "O") && squareId === undefined) {
    classNameValue = "turn ";
  }
  if (value === "X" && squareId !== undefined) {
    classNameValue = "cross-marked ";
  }
  if (value === "O" && squareId !== undefined) {
    classNameValue = "noughts-marked ";
  }
  const handleSquareClick = (value) => {
    if (tickTacToeState === undefined) {
      // if click on the turns X AND O
      return;
    }

    const tickTacToeStateCopy = [...tickTacToeState];

    if (turn.crosses && value === null) {
      tickTacToeStateCopy[squareId].value = "X";
      setTurn({ crosses: false, noughts: true });
    } else if (turn.noughts && value === null) {
      tickTacToeStateCopy[squareId].value = "O";
      setTurn({ crosses: true, noughts: false });
    }

    setTickTacToeState(tickTacToeStateCopy);
  };
  return (
    <>
      <div
        className={`sqaure-box-input `}
        onClick={() => handleSquareClick(value)}
      >
        <span className={`square-value ${classNameValue}`}>{value}</span>
      </div>
    </>
  );
};

export default Square;

import { useContext, useEffect, useState } from "react";
import Square from "./Square";
import { rows, columns, lines } from "../Constants";

const TicTacToe = ({
  showResult,
  tickTacToeState,
  setTickTacToeState,
  setTurn,
  turn,
  setWinner,
  draw,
  setDraw
}) => {
  const checkWinner = () => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        tickTacToeState?.at(a)?.value === tickTacToeState?.at(b)?.value &&
        tickTacToeState?.at(b)?.value === tickTacToeState?.at(c)?.value &&
        tickTacToeState?.at(a)?.value
      ) {
        setWinner(tickTacToeState?.at(a)?.value);
        showResult(true);
      }
    }
    let count = 0;
    for (let i = 0; i < tickTacToeState.length; i++) {
      if (tickTacToeState[i].value != null) {
        count++;
      }
    }
    if (count === tickTacToeState.length) {
      setWinner(null);
      showResult(true);
      setDraw(true);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [tickTacToeState]);

  return (
    <>
      <div className={"tic-tac-toe"}>
        <h1> TIC-TAC-TOE </h1>

        <div
          className={"tick-tac-container"}
          style={{
            gridTemplateColumns: `repeat(${rows},1fr)`
          }}
        >
          {tickTacToeState?.map((squareValue, id) => {
            return (
              <Square
                value={squareValue.value}
                setTickTacToeState={setTickTacToeState}
                squareId={id}
                tickTacToeState={tickTacToeState}
                turn={turn}
                setTurn={setTurn}
              />
            );
          })}
        </div>
        <div className={"turn-left"}>
          {turn.crosses ? <h1>Turn for X </h1> : <h1> Turn for O </h1>}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;

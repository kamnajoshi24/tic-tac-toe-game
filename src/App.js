import React, { useEffect, useState } from "react";
import Squares from "./pages/ticTac";
import { Main, Row, Box, Heading } from "./style/tictac";
function App() {
  const [square, setsquare] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turn, setsetTurn] = useState(false);
  const [text, setText] = useState(null);
  const onUserClicked = (index) => {
    let strings = Array.from(square);
    if (strings[index]) return;
    strings[index] = turn ? "X" : "0";
    setsetTurn(!turn);
    setsquare(strings);
  };
  const deleteGame = () => {
    setsquare(["", "", "", "", "", "", "", "", "", ""]);
    // setText();
  };
  useEffect(
    () => {
      let winner = won();
      if (winner) {
        deleteGame();
        setText(`Hey! ${winner} have won the Game !`);
        // alert(`Hey!${winner} have won the Game !`);
      }
    },
    [square],
    [text]
  );

  const won = () => {
    const lines = [
      [0, 1, 2],
      [2, 5, 8],
      [6, 7, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6],
      [3, 4, 5],
    ];
    console.log(square[0], square[1], square[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };
  return (
    <Main>

      <Heading>{text}</Heading>
      
      <Box>

        <Row>
          <Squares onClick={() => onUserClicked(0)} state={square[0]} />
          <Squares onClick={() => onUserClicked(1)} state={square[1]} />
          <Squares onClick={() => onUserClicked(2)} state={square[2]} />
        </Row>

        <Row>
          <Squares onClick={() => onUserClicked(3)} state={square[3]} />
          <Squares onClick={() => onUserClicked(4)} state={square[4]} />
          <Squares onClick={() => onUserClicked(5)} state={square[5]} />
        </Row>

        <Row>
          <Squares onClick={() => onUserClicked(6)} state={square[6]} />
          <Squares onClick={() => onUserClicked(7)} state={square[7]} />
          <Squares onClick={() => onUserClicked(8)} state={square[8]} />
        </Row>

        <button className="delete" onClick={deleteGame}>
          Clear
        </button>
      </Box>
    </Main>
  );
}
export default App;

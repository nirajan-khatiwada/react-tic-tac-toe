import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";
import { GameOver } from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  const [log, setLog] = useState([]);
  const [player,setPlayerName]=useState({
    "X":'Player1',
    "O":'player2'
  })
  let active=null

  const board = [...initialGameBoard.map((data)=>{
        return [...data]
  })];
  for (let turn of log) {
    console.log("turn=", turn);
    const { square, activeplayer } = turn;
    const { row, column } = square;
    board[row][column] = activeplayer;
  }

  let winner;

  for(let combination of WINNING_COMBINATIONS){
    const firstSymbol=board[combination[0].row][combination[0].column]
    const secondSymbol=board[combination[1].row][combination[1].column]
    const thirdSymbol=board[combination[2].row][combination[2].column]
    if (firstSymbol===secondSymbol&& secondSymbol===thirdSymbol && thirdSymbol===firstSymbol && firstSymbol!=null){
      winner=firstSymbol
    }

  }

  const hasDraw=log.length>=9 && !winner
  const show=hasDraw || winner

  function handlePlayerName(playerData){
        setPlayerName((pre)=>({...pre,...playerData}))
        console.log(player)
  }
 
  function handleSelectSquare(rowIndex, columnIndex) {
    
    if(log.length>0){
      active=log[0].activeplayer==="X"?"O":"X";
    }else{
      active="X"
    }
    setLog((previous) => {
      const updatedTurn = [
        {
          square: {
            row: rowIndex,
            column: columnIndex,
          },
          activeplayer:active
        },
        ...previous,
      ];
      return updatedTurn;
    });
  }


  function handleRematch(){
    setLog([])
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={player['X']}
            playerSymbol="X"
            isActive={active == "X"}
            handlePlayerName={handlePlayerName}
          />
          <Player
            playerName={player['O']}
            playerSymbol="O"
            isActive={active == "O"}
            handlePlayerName={handlePlayerName}
          />
        </ol>
        <GameBoard handleSelect={handleSelectSquare} boards={board} />
        {show && <GameOver winner={player[winner]} draw={hasDraw} onRestart={handleRematch}/>}
        
      </div>
      <Log turns={log}></Log>
    </main>
  );
}

export default App;

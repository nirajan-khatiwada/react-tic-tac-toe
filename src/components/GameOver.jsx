import React from 'react'

export const GameOver = ({winner,draw,onRestart}) => {
    console.log(winner,draw)
  return (
    <div id="game-over">
        <h2>Game Over!</h2>
        {draw?<p>Game is Daw</p>: <p>{winner} won</p>}
       
        <p><button onClick={onRestart}>Rematch</button></p>
    </div>

  )
}

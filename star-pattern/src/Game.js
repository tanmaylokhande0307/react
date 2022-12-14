import React, { useState } from 'react'
import StarMatch from './StarMatch'

const Game = () => {
    const [gameId,setGameId] = useState(1);
  return (
    <div>
      <StarMatch key={gameId} startNewGame = {() => setGameId(gameId + 1)}/>
    </div>
  )
}

export default Game

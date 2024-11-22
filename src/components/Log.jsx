import { useState } from "react";

export default function Log({ turns,playerName }) {
  const [UpdatePlayer, setUpdatePlayer] = useState(playerName)
function ChangeName(){
  setUpdatePlayer();
}
  return (
    <ol id="log">
      {turns.map((turn) =>(
        <li key={`${turn.square.row}${turn.square.col}`} >
          {turn.player=="X"?playerName.X:playerName.O} انتخاب کرد 
        </li>
      ))}
    </ol>
  );
}

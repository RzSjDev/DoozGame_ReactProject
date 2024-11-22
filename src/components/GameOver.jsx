export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>!بازی تمام شد  </h2>
      {winner && <p>! {winner} برنده شد</p>}
      {!winner && <p>!بازی برابر شد</p>}
      <p>
        <button onClick={onRestart}> دوباره</button>
      </p>
    </div>
  );
}

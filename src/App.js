import './App.css';
import 'animate.css';
import useGame from "./hooks/useGame"

function App() {
  const {
      textBoxRef,
      handleChange,
      text,
      isTimeRunning,
      timeRemaining,
      startGame,
      wordCount
  } = useGame(5)

  return (
    <div className="app">
      <div className="game-container">
        <h1 className="animate__animated animate__bounceIn game-header">How fast can you type?</h1>
        <h4 className="game-subheader">press start and get typing to find out</h4>
        <textarea
          ref={textBoxRef}
          onChange={handleChange}
          value={text}
          disabled={!isTimeRunning}
          className="game-textbox"
          />
        <h4 className="game-header">Time remaining: {timeRemaining}</h4>
        <button
          onClick={startGame}
          disabled={isTimeRunning}
          className="animate__animated animate__pulse start-button animate__repeat-2 animate__delay-2s"
        >
          Start
        </button>
        <h3 className="game-header">Word Count: {wordCount}</h3>
      </div>
    </div>
  );
}

export default App;

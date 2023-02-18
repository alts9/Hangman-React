import "./css/App.css";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const answer = [..."POWER"];
  return (
    <>
      <Header />
      <Game answer={answer} />
      <Keyboard />
    </>
  );
}

export default App;

import {ReactComponent as AppStoreBadge} from "./app-store-badge-us-uk.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/icon.png" width={350} height={350} alt="The Chalk-Talk app logo - a pixelated, winking smiley face." />
      <a href="https://google.com"><AppStoreBadge /></a>
    </div>
  );
}

export default App;

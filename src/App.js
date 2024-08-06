import {ReactComponent as AppStoreBadge} from "./app-store-badge-us-uk.svg";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="content">
        <img src="/icon.png" width={350} height={350} alt="A grey, pixelated, winking smiley face." />
        <h1>Chalk-Talk</h1>
        <a href="https://google.com"><AppStoreBadge /></a>
      </div>
      <div className="footer">
        <a href="https://ouroborostechnologies.com">https://ouroborostechnologies.com</a>
        <a href="">Privacy</a>
      </div>
    </div>
  );
}

export default App;

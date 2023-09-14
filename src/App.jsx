import './App.css';
import { StageExample } from './pixi/StageExample';

// This is a good place to put the asset loader since it's only run once.
function App() {
  return (
    <div className="App">
      <StageExample />
    </div>
  );
}

export default App;

import './App.css';
import {Greet} from './components/Greet'
function App() {
 
  return (
    <div className="App">
      <Greet name = 'Jiya Band' messageCount={20}/>
    </div>
  )
}

export default App;

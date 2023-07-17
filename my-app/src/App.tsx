import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';
function App() {
  const personName = {
    first: 'Yog',
    last: 'Akash'
  };
  return (
    <div className="App">
      <Greet name='Jiya Band' messageCount={20} isLoggedIn={true} />
      <Person name ={ personName} />
    </div>
  );
}

export default App;

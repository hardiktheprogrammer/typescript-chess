import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';
import { PersonList } from './components/PersonList';
function App() {
  const personName = {
    first: 'Yog',
    last: 'Akash'
  };

  const nameList = [
    {
    
    first: 'Brulie',
    last: 'chose'



    },
    {
      first: 'Choslie',
      last: 'moslie'
    }
  ]
 
  return (
    <div className="App">
      <Greet name='Jiya Band' messageCount={20} isLoggedIn={true} />
      <Person name= {personName} />
      <PersonList name= {nameList} />
    </div>
  );
}

export default App;

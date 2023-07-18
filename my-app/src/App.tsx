import './App.css';
// import { Heading } from './components/Heading'
// import {Status } from './components/Status'
// import { Oscar } from './components/Oscar'
// import {Greet} from './components/Greet'
import {Button} from './components/Button'
function App() {
  return (
    <div className='App'>
      {/* <Status status='error' /> 
      <Heading > Text</Heading >
    
      <Oscar> */}

        {/* <Heading> Oscar</Heading> */}
      {/* </Oscar >
      <Greet name='Hardik' messageCount={ 10} isLoggedIn={false} /> */}
      <Button handleClick={(event) =>{

        console.log('Button Clicked', event)
      } }
      
      />

    </div>

  )
}

export default App;

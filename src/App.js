import './App.css';
import Bhook from './Components/Bhook';

const user={
  name:'rahul',
  age:32,
  gender:'male'
}

function User ({name,age,gender}){
return (
  <>
  <h1>{name}</h1>
  <h1>{age}</h1>
  <h1>{gender}</h1>
  </>
)
}
const handleClick =()=>{
  document.body.style.backgroundColor='red'
}
const reset= ()=>{
  document.body.style.backgroundColor='white'
}

const Job =(props)=>{
  return(
 <>
 <h1>{props.sla}</h1>
 <h1>{props.cmp}</h1>
 <h1>{props.pos}</h1>
 </>
  )
}

function App() {
  return (
    <div className="App">

    basics  
    <User {...user}/>
    <Job sla={123} pos='senior' cmp='amaz'/> 
    <button onClick={handleClick }>click change</button>
    <button onClick={reset}>click change</button>
     <h1>rahul</h1>
    </div>
  );
}

export default App;

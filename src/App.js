import './App.css';

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

function App() {
  return (
    <div className="App">
     <User {...user}/>
     <h1>rahul</h1>
    </div>
  );
}

export default App;

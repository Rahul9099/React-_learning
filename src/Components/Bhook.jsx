import React, { useState } from 'react'


function Bhook() {
  const user1 ={
    name :'rahul',
    age:21
  } 
  const [state,setState] = useState(user1)

  const handleChange=()=>{
    setState((state)=>({...state,age:34}))
  }
  
  return (
    <div>
     <input type="text" name="" id="" /> 
   <button onClick={handleChange}>click</button>
   <h1>{ state.name +' '+ state.age}</h1>
    </div>
  )
}

export default Bhook
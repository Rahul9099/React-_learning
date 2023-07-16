import React, { useState } from 'react'

function UseForms() {
  const[state,setState] = useState({
     fname:"",
     email:'',
     pass:'',
    })
    const handleChange =(e)=>{
        setState((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
    <div>
        <form>
            <input type="text" name='email' placeholder='email' onChange={handleChange}/>
            <input type="text" name='fname' placeholder='name' onChange={handleChange}/>
            <input type="text" name='pass' placeholder='pass' onChange={handleChange}/>
        </form>
        {state.email}
        {state.fname}
        {state.pass}
    </div>
  )
}

export default UseForms
import React, { memo, useState } from 'react'

function Memoiezed() {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
  return (
    <div>
        <form>
        <label htmlFor="firstname">firstname</label>    
        <input type="text" name='firstname' id='firstname' onChange={(e)=>{setFirstname(e.target.value)}}/>
        <label htmlFor="lastname">lastname</label>
        <input type="text" name='firstname' id='lastname' onChange={(e)=>{setLastname(e.target.value)}}/>
        </form>
     <Greeting name={firstname}/>
    </div>
  )
}

const Greeting = memo(({name}) => {
    return(
        <h1>hello {name}!</h1>
    )
})

export default Memoiezed
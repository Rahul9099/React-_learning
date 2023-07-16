import React, { useState } from 'react'

function List() {
    const items=()=>{
    return Array(5).fill(0)
    }
    //
 const [state,setState] = useState(items)
  return (
    <div>
        <ul>
        {state.map( (val,ind) => <li key={ind}> {ind+1} </li> )}
        </ul>
        <button onClick={()=>setState([...state,0])}>add element</button>
    </div>
  )
}

export default List
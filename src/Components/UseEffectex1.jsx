import React, { useEffect, useState } from 'react'

function UseEffectex1() {
    const [state,setState]=useState({x:0,y:0})
  useEffect(()=>{
    window.addEventListener('pointermove',(e)=>{
       setState({x:e.clientX,y:e.clientY})
    })
  },[])

  return (
    <div>
     <h1>x={state.x} y={state.y}</h1>
    </div>
  )
}

export default UseEffectex1;
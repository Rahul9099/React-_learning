import React, { useReducer } from 'react'

function reducer(state,action){
    if(action === 'inc'){
        return state + 1
    }
    if(action === 'dec'){
        return state - 1;
    }
}

function ReducerEx1() {
    const [state, dispatch] = useReducer(reducer, 0)
    function increment(){
       dispatch('inc')
    }
    function decrement(){
      dispatch('dec')
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        {state}
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default ReducerEx1
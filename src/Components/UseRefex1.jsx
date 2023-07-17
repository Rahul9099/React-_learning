import React, { useRef, useState } from 'react'

function UseRefex1() {
    const setTime = useRef(null);
    const [now,setNow] =useState();
    let second = 0;
    const stopRef= useRef(null);

    function start(){
        setTime.current = Date.now();
        stopRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }
    function stop(){
    clearInterval(stopRef.current);
    }
    second = (now - setTime.current)/1000;
  return (
    <div>
        <h1>{second.toFixed(3)}</h1>
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
    </div>
  )
}

export default UseRefex1
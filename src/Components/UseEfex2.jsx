import React, { useEffect, useState } from 'react'

function UseEfex2() {
    
  const [result,setResult] = useState([]);

    // function getData (){
    // fetch("https://fakestoreapi.com/products/categories")
    // .then(res => res.json())
    // .then(json =>{
    //     console.log(json)
    //     setResult (json);
    // })
    // }
  
    useEffect(()=>{
        const getData = async()=>{
            const data = await fetch("https://fakestoreapi.com/products/categories")
           const res = await data.json();
           console.log(res);
           setResult(res)
         }
         getData()
    },[])
  return (
    <div>
       <select name="categories" id="categories">
        {result.map(categories => <option key={categories} value={categories}>{categories}</option>)}
       </select>
    </div>
  )
}

export default UseEfex2
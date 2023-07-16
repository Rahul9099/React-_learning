import React, { useEffect, useState } from 'react'
import '../App.css';

function UseEfex2() {
    
  const [result,setResult] = useState([]);
  const [selectedproduct,setSelectedProduct]= useState(null);
  const [products,setProduct]=useState([]);
  
    // function getData (){
    // fetch("https://fakestoreapi.com/products/categories")
    // .then(res => res.json())
    // .then(json =>{
    //     console.log(json)
    //     setResult (json);
    // })
    // }
    useEffect(()=>{
      const getDataproduct = async()=>{
          const data = await fetch(`https://fakestoreapi.com/products/category/${selectedproduct}`)
         const res = await data.json();
         console.log(res);
         setProduct(res)
       }
       if(selectedproduct){
         getDataproduct()
       }
  },[selectedproduct])
  
    useEffect(()=>{
        const getData = async()=>{
            const data = await fetch(`https://fakestoreapi.com/products/categories`)
           const res = await data.json();
           console.log(res);
           setResult(res)
         }
         getData()
    },[])

    const handleChange =(e)=>{
      setSelectedProduct(e.target.value)
    }

  return (
    <div>
       <select name="categories" id="categories" onChange={handleChange}>
        {result.map(categories => <option key={categories} value={categories}>{categories}</option>)}
       </select>


       <div className='container'>
       {products.map((pro,index)=>
       {
        return <div key={index} className="card">
          <img src={pro.image} alt="Avatar" style={{width:200}}/>
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>}
        )}
       </div>
    </div>
  )
}

export default UseEfex2

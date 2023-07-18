import React, { createContext, useContext } from "react";

const UseContext = createContext(null);
//props drilling
function A({user}) {
  return (
    <>
      <h1>hello</h1>
      <B user= {user}/>
    </>
  );
}

function B() {
    const name= useContext(UseContext);
  return <h1>hello{name}</h1>;
}

function UseContextex1() {
    const  user ='rahul';
  return <div>
    <UseContext.Provider value={user}>
    <B/>
    </UseContext.Provider>
  </div>;
}

export default UseContextex1;

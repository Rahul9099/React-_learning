import React, { useRef } from "react";
import '../Components/kitten.css'
function Kitty() {
    const galaryRef = useRef(null);
    const index =useRef(0);
    function next(){
        const clist = galaryRef.current.querySelectorAll('.image');
        index.current=index.current+1 >= clist.length ? 0 :index.current +1;
        clist[index.current].scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        })
    }
  return (
    <section>
      <h1>hello kitten</h1>
      <button onClick={next}>next</button>
      <ul ref={galaryRef} className="galary">
        <li className="image">
          <img src="https://placekitten.com/g/200/300" alt="" />
        </li>
        <li className="image">
          <img src="https://placekitten.com/g/250/300" alt="" />
        </li>
        <li className="image">
          <img src="https://placekitten.com/g/300/300" alt="" />
        </li>
      </ul>
    </section>
  );
}

export default Kitty;

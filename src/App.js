import MyClock from '../src/my-clock';
import './App.css';
import React, { useRef } from 'react';

function App() {
  const pRef = useRef(null);
  const divRef = useRef(null);
  //如果不加className能正常运行,但不会加载App.css中对App类写的样式
  return (
    <div className='App'>
      <MyClock />

      <p style={{ fontSize: "40px", color: "red" }} ref={pRef}>Designed by Maggie Xu</p>
      <div ref={divRef}>MagicCode Education</div>

      {/*1+1={1 + 1}*/}
      <button
        className="btn btn-success btn-lg"
        onClick={(e) => {
          console.log(e);
          pRef.current.innerHTML = "Thanks for click";
          divRef.current.innerHTML = "Coding Club for kids";
          console.log(pRef.current.innerHTML);
        }
        }> Click</button >
    </div >
  );
}

export default App;

import React, { useEffect } from 'react'
import { useState ,useRef} from 'react'


export default function useRefForGetDom() {
   const inputElem=useRef()

   const btnClicked=()=>{
    console.log(inputElem.current);
    inputElem.current.style.background="blue"
    console.log(inputElem.current.value);
    inputElem.current.value
   }
  return (
    <>
   <input type="text" name="" id="" ref={inputElem} />
   <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

// useRef is react hook that allow us to create mutable varialbles, which will not re-render the component.it mens when we create the variable using useRef and when the variable value changes it will not re-render the component.useRef is also use in excessing the dom elements.It mens we can excess the dom elements using the useRef hook and we can modify the dom elements i.e get values and change color etc.UseRef does not re-render the component when it is changed.

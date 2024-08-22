import React, { useEffect } from 'react'
import { useState ,useRef} from 'react'


export default function useRefHook() {
    const [value,setValue]=useState(0)
    const count=useRef(0)
    
    useEffect(()=>{
        count.current=count.current+1;
    })

  return (
    <>
    <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
    <h1>{value}</h1>
    <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
    <h1>Render Count: {count.current} </h1>
    </>
  )
}

// useRef is react hook that allow us to create mutable varialbles, which will not re-render the component.it mens when we create the variable using useRef and when the variable value changes it will not re-render the component.useRef is also use in excessing the dom elements.It mens we can excess the dom elements using the useRef hook and we can modify the dom elements.UseRef does not re-render the component when it is changed.

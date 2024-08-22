import React, { useState,useCallback } from 'react'
import Header from '../components/Header'
export default function useCallBackHook() {
    const [count,setCount]=useState(0);
    const newFn=useCallback(()=>{},[])
  return (
    <>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>Click Here</button>
    </>
  )
}

// useCallback is a react hook that lest you cache a function defination between re-renders.
// it means, when we use the useCallback Hook, it doesn't create multiple instance of same function when re-render happens.
// Instead of creating new instance of the function, it provides the cached function on re-rendr of the component.


import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useReducer } from 'react'
export default function UseReducerHook() {
    // const [count,setCount]=useState(0)
   const initailState={
    count:0
   }

   const reducer=(state,action)=>{
    switch (action.type) {
        case "Icrement":
            return {count:state.count+1}
            case "Decrement":
                return {count:state.count>0 ? state.count-1:0}
            case "Reset":
                return {count:state.count=0}
            case "input":
                return {count:action.paylod}
       
        default:
            return state
    }
  
   } 
   const [state,dispatch]= useReducer(reducer,initailState)

  return (
    <>

    <h1>useReducerHook</h1>
    {/* <h1>{count}</h1> */}
    <h1>{state.count}</h1>
    <button className='bg-red-500 mx-1' onClick={()=>dispatch({type:"Icrement"})}>Increment</button>
    <button  className='bg-red-500 mx-1' onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    <button  className='bg-red-500 mx-1' onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    <br />
    <input value={state.count} className='border-2' type="number" name="" id="" onChange={(e)=>dispatch({type:'input',paylod:Number(e.target.value)})} />
    {/* <button  onClick={()=>setCount(prev=>prev-1)}>Decrement</button> */}
    </>
  )
}
// useReducer is same as useState.but instead f providing state and setter function,It provides states and dispatch function.
// useReducer hook accepts two argument
// _Reducer function 
// _initial state
// and return current state and dispatch method
// Reducer function specifies how these state gets updated.


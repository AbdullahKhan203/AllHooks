import React, { useMemo, useState } from 'react'

export default function useMemoHook() {
    const [number,setNumber]=useState(0)
    const [counter,setCounter]=useState(0)

    function cubeNum(num){
        console.log("Calculation done");
        return Math.pow(num,3)
        
    }
    const result=useMemo(()=>{return cubeNum(number)},[number])
  return (
    <>
    <input type="number" name="" id="" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
    <h1>Cube of numbers: {result} </h1>
    <button className='bg-red-500' onClick={()=>{setCounter(counter+1)}}>Counter++</button>
    <h1>Counter:{counter}</h1>
    </>
  )
}
// the useMemo return a memoized value.it is like caching a value so that it does not need to be re-calculated.The useMemo hook only returns when one of its dependencies gets updated.This can improve the performance of application.There is one more hook in react to improve performace,that is useCallback hook.
// The useMemo and useCallback are similar,The main difference is :
// -useMemo returns a memoized value.
// -useMemo returns a memoized function.
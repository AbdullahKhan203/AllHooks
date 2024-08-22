import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffect() {
    useEffect(()=>{
        console.log("Message from useEffect");
    },[])
    useLayoutEffect(()=>{
        console.log("Message from useLayoutEffect");
    },[])
  return (
    <>
    <h1>Test Case</h1>
    {/* {Array(40000).fill('').map((item,index)=>(
      <li key={index}>{Math.pow(Math.random(),10)}</li>
    ))} */}
    </>
  )
}
// useEffect effect called after printing the DOM element.
// useLayoutEffect effect called before printing the DOM element.

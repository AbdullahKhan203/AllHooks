import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../context/AppContext'
export default function UseContextHook() {
  const {name,phone}=useContext(AppContext)
  console.log(name);
  console.log(phone);
  
  return (
    <>
   <h1>name:{name}</h1> 
   <h1>phone:{phone}</h1> 
    </>
  )
}
// useContext hooks is a React Hook that allows you to access data from any component without explicitly passing it down through props at every level.useContext hook is used to manage global data in react app.


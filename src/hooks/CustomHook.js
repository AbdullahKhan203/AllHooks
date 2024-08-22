import React, { useEffect, useState } from 'react'
import useLocalStorage from '../useLocalStorage'

export default function CustomHook() {
    // const [name,setName]=useState(
    //     localStorage.getItem('username')?
    //     localStorage.getItem('username'):''
    // );
    // useEffect(()=>{
    //     localStorage.setItem('username',name)
    // },[name])
    const [name,setName] =useLocalStorage('username','')
    const [id,setId] =useLocalStorage('userId','')
  return (
    <>
    <input className='border-2' type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
    <h2>Hello,{name}!</h2>
    <input className='border-2' type="number" name="" id="" value={id} onChange={(e)=>setId(e.target.value)}/>
    <h2>Your Id,{id}</h2>
    </>
  )
}

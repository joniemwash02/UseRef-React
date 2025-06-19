import React, {  useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [value, setValue]=useState(0)
    // const[count, setCount]=useState(0)
    const number=useRef(0)

    useEffect(()=>{
        number.current+=1
    })

    const decrease=()=>{
        setValue(value-1)
    }
    const increase=()=>{
        setValue(value+1)
    }
    // useEffect(()=>{
    //     setCount(count+1)
    // },[value])
  return (
    <div>
        <button onClick={increase} >+</button>
        <h2>{value}</h2>
        <button onClick={decrease}>-</button>
        <h1>You have rendered {number.current} times </h1>

      
    </div>
  )
}

export default UseRefHook

import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[number, setNumber]=useState(0)
    const[counter, setCounter]=useState(0)


    const inputValue=(e)=>{
        setNumber (e.target.value)
    }
    const squireRoot=(num)=>{
        console.log("calculation done")
        return (Math.pow(num,3))
    }
    const results =useMemo(()=>squireRoot(number),[number])

  return (
    <>
        <input onChange={inputValue} type="number" name="" id="" />
        <h1>The cube of {number} is {results}</h1>
        <button onClick={()=>setCounter(counter+1)}>click here</button>
        <h2>You clicked {counter} Times</h2>
    </>
    
  )
}

export default UseMemo
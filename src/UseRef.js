import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const inputText=useRef()
    const [value, setValue]= useState()
    const clickButton=()=>{
        setValue(inputText.current.value)
    }


  return (
    <div>
        <input type="text" ref={inputText} name="" id="" />
        <button onClick={clickButton}> click here</button>
        {value && (
          <p>You entered this: <strong>{value}</strong></p>
        )}
      
    </div>
  )
}

export default UseRef

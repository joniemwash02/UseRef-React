import React, { useCallback, useState } from 'react'
import Header from './Components/Header'

const UsecallBack = () => {

    const [count, setCount]=useState(0)
    const tryingFuction=useCallback(()=>{

    }, [])
    return (
        <>
            <Header tryingFuction={tryingFuction} />
            <button onClick={()=>setCount(count+1)}>click here</button>
            <h1>{count}</h1>
        </>

    )
}

export default UsecallBack
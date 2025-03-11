import React, { useState } from 'react'

export default function Count() {
let[count,setCount] = useState(1)
let[passwordStatus,setPasswordStatus] = useState(false)



let changeCount = ()=>{
    setCount(count+1)
}
let changePassword = () =>{
    setPasswordStatus(!passwordStatus)
}
  return (
    <div className=' text-center'> <br/>
        <input type={passwordStatus ? 'text' : 'password'}/> <button onClick={changePassword}>{passwordStatus ? 'Hide' : 'Show'}</button>
        <br/><br/>
       <h1>{count}</h1>
       <button onClick={changeCount}>Change Count</button>
    </div>
  )
}

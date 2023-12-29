import React, { useState } from 'react'
import './PasswordChecker.css'
import PasswordStrength from './PasswordStrength'

function PasswordChecker() {
    const [password,setPassword] = useState('')
    const [showpassword,setShowpassword] = useState(false)

    const handlepassword=(e)=>{
        setPassword(e.target.value)
    }
    const Clearpassword=()=>{
        setPassword('')
    }
    const togglepassword=()=>{
        setShowpassword(!showpassword)
    }
    console.log(password,"PASS")
  return (
    <div>
        <div className='passwordchecker'>
        <h1>Enter Your Password</h1>
        <div> 
            <label htmlFor="password"></label>
            <input type={showpassword ? 'text' : 'password'} id='password' data-testid={'passwordinput'} value={password} onChange={(e)=>handlepassword(e)}/>
        </div>
        <div className='btns' data-testid={'buttonDiv'}>
        <button onClick={togglepassword}>{showpassword? "Hide Password" : "Show Password"}</button>
        <button onClick={Clearpassword}>Clear Password</button>
        </div>

    </div>
    <PasswordStrength password={password}/>
    
    </div>
  )
}

export default PasswordChecker
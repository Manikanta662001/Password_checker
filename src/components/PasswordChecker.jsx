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
        <div className='checkboxes'>
        <input type='checkbox' checked={password.match(/[A-Z]/g)!== null}/>
            <label>Must contain capital letter</label>
        </div>
        <div className='checkboxes'>
        <input type='checkbox' checked={password.match(/[a-z]/g)!== null}/>
            <label>Must contain small letter</label>
        </div>
        <div className='checkboxes'>
        <input type='checkbox' checked={password.match(/[0-9]/g)!== null}/>
            <label>Must contain numbers</label>
        </div>
        <div className='checkboxes'>
        <input type='checkbox' checked={password.match(/[$#&_@%*]/g)!== null}/>
            <label>Must contain Special character</label>
        </div>
        <div className='checkboxes'>
        <input type='checkbox' checked={(password.length>=8)!== false}/>
            <label>length must be greater than or equals to 8</label>
        </div>
        </div>

    </div>
    <PasswordStrength password={password}/>
    
    </div>
  )
}

export default PasswordChecker
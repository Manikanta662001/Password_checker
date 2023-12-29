import React,{useEffect,useState} from 'react'

function PasswordStrength({password}) {
    console.log(password,"4444")
    const [color,setColor] = useState('')
    const [text,setText] = useState('')
    useEffect(()=>{
        const list = [password.match(/[A-Z]/g) ,password.match(/[a-z]/g), password.match(/[0-9]/g), password.match(/[$#&_]/g),password.length>=8]
        console.log(list)
        let count = 0
        for(let x of list){
            console.log(x)
            if(x==null || x== false){
                count+=0
            }
            else{
                count+=1
            }
        }
        console.log(count)

        if(count==5 ){
            console.log('Uppercase')
            setColor('green')
            setText('Strong Password')
        }
        else if(count==3 || count==4){
            setColor('orange')
            setText('Moderate Password')
        }
        else{
            setColor('red')
            setText('Weak Password')
        }
    },[password])
  return (
    <div style={{backgroundColor:color,color:'white'}} className='aboutpass' data-testid={'PasswordStrengthDiv'}>
        {text}
    </div>
  )
}

export default PasswordStrength
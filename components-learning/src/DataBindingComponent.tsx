import React,{useState} from 'react'

const DataBindingComponent = () => {
    const [inputVal,setInputVal] =useState<string>('')
    const [password,setPassword] =useState('')
    const submitHandler =(e: any)=>{
    e.preventDefault();
    console.log('submitting:',inputVal)
    console.log('submitting password:',password)
    }

    const handletype = (e: any)=> {
        setInputVal(e.target.value)
        console.log('typed character:',e.target.value)
    }
    const handlepassword = (e: any)=> {
        setPassword(e.target.value)
    }


  return (
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' value={inputVal} onChange={handletype}/>
        <input type="password"placeholder='Enter your password' value={password} onChange={handlepassword}/>
    <button>Submit</button>
    </form>
  )
}

export default DataBindingComponent
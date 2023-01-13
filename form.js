import React, { useEffect, useState } from 'react'

export default function Form() {
    const data={name:"",Email:"",password:""};
    const[inputData, setInputData]=useState(data);
    const [flag, setFlag] = useState(false);
    useEffect(()=>{
        console.log("Registered");
    },[flag])
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData);
    }
    function handlesubmit(e){
      e.preventDefault();
      if(!inputData.name ||!inputData.Email ||!inputData.password){
        alert("All fields are Mandatory");
      }
      else{
          setFlag(true);
      }
    }
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name} you've Registered successfully</h2>:""}</pre>
    <form className='container' onSubmit={handlesubmit}>
        <div className='header'>
            <h1>Registration form</h1>
        </div>
        <div>
            <input type="text" placeholder='Enter your name'name='name'value={inputData.name} onChange={handleData} />
        </div>
        <div>
            <input type="text" placeholder='Enter your Email'name='Email'value={inputData.Email} onChange={handleData} />
        </div>
        <div>
            <input type="text" placeholder='Enter your password'name='password'value={inputData.password} onChange={handleData} />
        </div>
        <div>
            <button className='btn'>Submit</button>
        </div>
    </form>
    </>
  )
}

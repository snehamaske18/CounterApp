import React, { useEffect, useRef, useState } from 'react'

function Form1() {
    let name=useRef();
    let email=useRef();
    let password=useRef()

    let [formdata, setformdata]=useState({
        name:'',
        email:'',
        password:''
    })

    function handlesubmit(event){

       event.preventDefault();
       
       setformdata({
        name:name.current.value,
        email:email.current.value,
        password:password.current.value
       })

       
        // console.log(name.current.value);
        // console.log(email.current.value);
        // console.log(password.current.value);
        
    }

    useEffect(()=>{
        console.log(formdata);
    }, [formdata])
  return (
    <div>
      <form onSubmit={handlesubmit}>

        <div>
            <label>Username:</label>
            <input type='text' ref={name}></input>
        </div>

        <div>
            <label>Email:</label>
            <input type='email' ref={email}></input>
        </div>

        <div>
            <label>Password:</label>
            <input type='password' ref={password}></input>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form1

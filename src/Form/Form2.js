import React from 'react'
import {useForm} from 'react-hook-form'

function Form2() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      function display(data){
console.log(data);

      }
  return (
    <div>
     
      <form  onSubmit={handleSubmit(display)}>

<div>
    <label>Username:</label>
    <input type='text' {...register("name")} ></input>
    
</div>

<div>
    <label>Email:</label>
    <input type='email' {...register("email")} ></input>
</div>

<div>
    <label>Password:</label>
    <input type='password' {...register("password")} ></input>
</div>

<button>Submit</button>
</form>
    </div>
  )
}

export default Form2

import React, { useMemo, useReducer, useState } from 'react'

function Counter() {
    //  let [count, changecount ]=useState(0)

function reducer(state, action){

    if(action.type=='increment'){
        return state=state+1;
    }
    else if(action.type=='decrement'){
        return state=state-1;
    }
    else if(action.type=='reset'){
        return state=initialstate;
    }
}
let initialstate=0
   let [state, dispatch]= useReducer(reducer, initialstate);
    // function increment(){
    //     changecount(count=count+1)
    // }

    // function decrement(){
    //     changecount(count=count-1)
    // }



function square(num){
    for(let i=0; i<1000000000; i++){

    }
    return num*num;
}

if(state==5){
    throw new Error("Error occured!!!!")
}
let num=8;

useMemo(()=>{
    square(num)
} , [num])

  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>{ dispatch({type:'increment'})}}>Increment</button> 
      <button onClick={()=>{ dispatch({type:'decrement'})}}>Decrement</button>
    </div>
  )
}

export default Counter

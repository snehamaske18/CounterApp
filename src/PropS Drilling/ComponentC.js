import React, { useContext } from 'react'
import { ContextData } from './ContextData'

function ComponentC() {

  let {name, email}=useContext(ContextData);
  return (
    <div>
      
      <h1>Name: {name}</h1>
      <h1></h1>
    </div>
  )
}

export default ComponentC

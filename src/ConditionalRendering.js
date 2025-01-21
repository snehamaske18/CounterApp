import React from 'react'

function ConditionalRendering() {

    let loggedin=true;
    let msg;
if(loggedin){
msg=<h1>Welcome To My Page</h1>
}
else {
    msg=<h1>Plz Register First</h1>
}

  return (
    <div>
      {/* {msg} */}
      {/* {
        loggedin?<h1>Welcome To My Page</h1>:<h1>Plz Register First</h1>
      } */}

      {
        loggedin && <h1>Welcome To my Page</h1>
      }
    </div>
  )
}

export default ConditionalRendering

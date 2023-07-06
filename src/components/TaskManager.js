import React, { useState } from 'react';

export const TaskManager = () => {

    let [Actualinput,SetActualinput] = useState("");
  
  let handleInput = event => {
    SetActualinput(event.target.value)

  }

  return (
    <div>
      <input class="inputfield" placeholder='Type here...' onChange = {handleInput}/>
      {Actualinput}
    </div>
  )
}

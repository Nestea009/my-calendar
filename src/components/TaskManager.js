import React, { useState } from 'react';



export const TaskManager = ({test_function}) => {

  let [Actualinput,SetActualinput] = useState("");

  let handleInput = event => {
    SetActualinput(event.target.value);
    test_function(Actualinput);
  }

  return (
    <div>
      <input class="inputfield" placeholder='Type here...' onChange = {handleInput}/>
      {Actualinput}
    </div>
  )
}
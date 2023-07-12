import React, { useState } from 'react';



export const TaskManager = ({SetText, Reset}) => {

  let [Actualinput,SetActualinput] = useState("");

  let value_changed = true;

  let handleInput = event => {
    SetActualinput(event.target.value);
    value_changed = true;
  }

  if (value_changed == true) {
    SetText(Actualinput);
    value_changed = false;
  }

  return (
    <div>
      <input class="inputfield" placeholder='Type here...' onChange = {handleInput}/>
      <button onClick = {Reset} class="ResetButton">Reset</button>
    </div>
  )
}
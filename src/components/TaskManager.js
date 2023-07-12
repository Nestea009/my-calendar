import React, { useState } from 'react';



export const TaskManager = ({SetText, Reset}) => {

  let [Actualinput,SetActualinput] = useState("");

  let [value_changed, setValue_changed] = useState(false);

  let handleInput = event => {
    SetActualinput(event.target.value);
    setValue_changed(true);

  }

  if (value_changed == true) {
    SetText(Actualinput);
    setValue_changed(false);
  }

  return (
    <div>
      <input class="inputfield" placeholder='Type here...' onChange = {handleInput}/>
      <button onClick = {Reset} class="ResetButton">Reset</button>
    </div>
  )
}
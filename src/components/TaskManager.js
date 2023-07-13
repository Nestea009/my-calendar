export const TaskManager = ({handleInput, Reset}) => {
  return (
    <div>
      <input class="inputfield" placeholder='Type here...' onChange = {handleInput}/>
      <button onClick = {Reset} class="ResetButton">Reset</button>
    </div>
  )
}
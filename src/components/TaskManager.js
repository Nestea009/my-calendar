export const TaskManager = ({handleInput, Reset, theme}) => {
  return (
    <div>
      <input class="inputfield" placeholder='Type here...' onChange = {handleInput} style={{ backgroundColor: (theme == "light") ? 'lightgray' : 'black', color: (theme == "light") ? 'black' : 'rgb(255, 159, 50)'}}/>
      <button onClick = {Reset} class="ResetButton" style={{ backgroundColor: (theme == "light") ? 'lightgray' : 'black', color: (theme == "light") ? 'black' : 'rgb(255, 159, 50)'}}>Reset</button>
    </div>
  )
}
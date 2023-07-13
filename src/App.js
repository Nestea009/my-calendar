import { useEffect, useState } from 'react';
import './App.css';
import { TaskManager } from './components/TaskManager';

function App() {

  function setParentState(value,task,setTask) {
    localStorage.setItem(task,value);
    setTask(value);
  }

  let [Actualinput,SetActualinput] = useState("");

  let handleInput = event => {
    SetActualinput(event.target.value);
  }

  function ResetFunction() {
    localStorage.setItem("Task1M","-")
    localStorage.setItem("Task2M","-")
    localStorage.setItem("Task3M","-")
    localStorage.setItem("Task1Tu","-")
    localStorage.setItem("Task2Tu","-")
    localStorage.setItem("Task3Tu","-")
    localStorage.setItem("Task1W","-")
    localStorage.setItem("Task2W","-")
    localStorage.setItem("Task3W","-")
    localStorage.setItem("Task1Th","-")
    localStorage.setItem("Task2Th","-")
    localStorage.setItem("Task3Th","-")
    localStorage.setItem("Task1F","-")
    localStorage.setItem("Task2F","-")
    localStorage.setItem("Task3F","-")
    localStorage.setItem("Task1Sa","-")
    localStorage.setItem("Task2Sa","-")
    localStorage.setItem("Task3Sa","-")
    localStorage.setItem("Task1Su","-")
    localStorage.setItem("Task2Su","-")
    localStorage.setItem("Task3Su","-")
    SetTask1M("-")
    SetTask2M("-")
    SetTask3M("-")
    SetTask1Tu("-")
    SetTask2Tu("-")
    SetTask3Tu("-")
    SetTask1W("-")
    SetTask2W("-")
    SetTask3W("-")
    SetTask1Th("-")
    SetTask2Th("-")
    SetTask3Th("-")
    SetTask1F("-")
    SetTask2F("-")
    SetTask3F("-")
    SetTask1Sa("-")
    SetTask2Sa("-")
    SetTask3Sa("-")
    SetTask1Su("-")
    SetTask2Su("-")
    SetTask3Su("-")
  }

  let [Task1M, SetTask1M] = useState(localStorage.getItem('Task1M'));
  let [Task2M, SetTask2M] = useState(localStorage.getItem('Task2M'));
  let [Task3M, SetTask3M] = useState(localStorage.getItem('Task3M'));

  let [Task1Tu, SetTask1Tu] = useState(localStorage.getItem('Task1Tu'));
  let [Task2Tu, SetTask2Tu] = useState(localStorage.getItem('Task2Tu'));
  let [Task3Tu, SetTask3Tu] = useState(localStorage.getItem('Task3Tu'));

  let [Task1W, SetTask1W] = useState(localStorage.getItem('Task1W'));
  let [Task2W, SetTask2W] = useState(localStorage.getItem('Task2W'));
  let [Task3W, SetTask3W] = useState(localStorage.getItem('Task3W'));

  let [Task1Th, SetTask1Th] = useState(localStorage.getItem('Task1Th'));
  let [Task2Th, SetTask2Th] = useState(localStorage.getItem('Task2Th'));
  let [Task3Th, SetTask3Th] = useState(localStorage.getItem('Task3Th'));

  let [Task1F, SetTask1F] = useState(localStorage.getItem('Task1F'));
  let [Task2F, SetTask2F] = useState(localStorage.getItem('Task2F'));
  let [Task3F, SetTask3F] = useState(localStorage.getItem('Task3F'));

  let [Task1Sa, SetTask1Sa] = useState(localStorage.getItem('Task1Sa'));
  let [Task2Sa, SetTask2Sa] = useState(localStorage.getItem('Task2Sa'));
  let [Task3Sa, SetTask3Sa] = useState(localStorage.getItem('Task3Sa'));

  let [Task1Su, SetTask1Su] = useState(localStorage.getItem('Task1Su'));
  let [Task2Su, SetTask2Su] = useState(localStorage.getItem('Task2Su'));
  let [Task3Su, SetTask3Su] = useState(localStorage.getItem('Task3Su'));

  return (
    <div className="App">
      <body className="App-header">
        <h2>My-Calendar</h2>
        <div class="schedule">
          <div class="days-row">
            <div class="day">
              Monday
            </div>
            <div class="day">
              Tuesday
            </div>
            <div class="day">
              Wednesday
            </div>
            <div class="day">
              Thursday
            </div>
            <div class="day">
              Friday
            </div>
            <div class="day">
              Saturday
            </div>
            <div class="day">
              Sunday
            </div>
          </div>
          <div class="tasks-row">
            <div class="task">
              <button onClick={() => setParentState(Actualinput, "Task1M", SetTask1M)}>{Task1M}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task2M", SetTask2M)}>{Task2M}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task3M", SetTask3M)}>{Task3M}</button>
            </div>
            <div class="task">
              <button onClick={() => setParentState(Actualinput, "Task1Tu", SetTask1Tu)}>{Task1Tu}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task2Tu", SetTask2Tu)}>{Task2Tu}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task3Tu", SetTask3Tu)}>{Task3Tu}</button>
            </div>
            <div class="task">
              <button onClick={() => setParentState(Actualinput, "Task1W", SetTask1W)}>{Task1W}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task2W", SetTask2W)}>{Task2W}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task3W", SetTask3W)}>{Task3W}</button>
            </div>
            <div class="task">
              <button onClick={() => setParentState(Actualinput, "Task1Th", SetTask1Th)}>{Task1Th}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task2Th", SetTask2Th)}>{Task2Th}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task3Th", SetTask3Th)}>{Task3Th}</button>
            </div>
            <div class="task">
              <button onClick={() => setParentState(Actualinput, "Task1F", SetTask1F)}>{Task1F}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task2F", SetTask2F)}>{Task2F}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task3F", SetTask3F)}>{Task3F}</button>
            </div>
            <div class="task">
              <button onClick={() => setParentState(Actualinput, "Task1Sa", SetTask1Sa)}>{Task1Sa}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task2Sa", SetTask2Sa)}>{Task2Sa}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task3Sa", SetTask3Sa)}>{Task3Sa}</button>
            </div>
            <div class="task">
              <button onClick={() => setParentState(Actualinput, "Task1Su", SetTask1Su)}>{Task1Su}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task2Su", SetTask2Su)}>{Task2Su}</button>
              <br/>
              <button onClick={() => setParentState(Actualinput, "Task3Su", SetTask3Su)}>{Task3Su}</button>
            </div>
          </div>
          <TaskManager handleInput={handleInput} Reset={ResetFunction}/>
        </div>
      </body>
    </div>
  );
}

export default App;

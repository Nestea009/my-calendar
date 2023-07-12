import { useEffect, useState } from 'react';
import './App.css';
import { TaskManager } from './components/TaskManager';

function App() {

  let [text,Settext] = useState("");

  function setParentState(value) {
    Settext(value);
  }

  localStorage.setItem('TaskM1', JSON.stringify('shit'))

  const testl = localStorage.getItem('TaskM1');

  function ResetFunction() {
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

  let [Task1M, SetTask1M] = useState(testl);
  let [Task2M, SetTask2M] = useState("-");
  let [Task3M, SetTask3M] = useState("-");

  let [Task1Tu, SetTask1Tu] = useState("-");
  let [Task2Tu, SetTask2Tu] = useState("-");
  let [Task3Tu, SetTask3Tu] = useState("-");

  let [Task1W, SetTask1W] = useState("-");
  let [Task2W, SetTask2W] = useState("-");
  let [Task3W, SetTask3W] = useState("-");

  let [Task1Th, SetTask1Th] = useState("-");
  let [Task2Th, SetTask2Th] = useState("-");
  let [Task3Th, SetTask3Th] = useState("-");

  let [Task1F, SetTask1F] = useState("-");
  let [Task2F, SetTask2F] = useState("-");
  let [Task3F, SetTask3F] = useState("-");

  let [Task1Sa, SetTask1Sa] = useState("-");
  let [Task2Sa, SetTask2Sa] = useState("-");
  let [Task3Sa, SetTask3Sa] = useState("-");

  let [Task1Su, SetTask1Su] = useState("-");
  let [Task2Su, SetTask2Su] = useState("-");
  let [Task3Su, SetTask3Su] = useState("-");

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
              <button onClick={() => SetTask1M(text)}>{Task1M}</button>
              <br/>
              <button onClick={() => SetTask2M(text)}>{Task2M}</button>
              <br/>
              <button onClick={() => SetTask3M(text)}>{Task3M}</button>
            </div>
            <div class="task">
              <button onClick={() => SetTask1Tu(text)}>{Task1Tu}</button>
              <br/>
              <button onClick={() => SetTask2Tu(text)}>{Task2Tu}</button>
              <br/>
              <button onClick={() => SetTask3Tu(text)}>{Task3Tu}</button>
            </div>
            <div class="task">
              <button onClick={() => SetTask1W(text)}>{Task1W}</button>
              <br/>
              <button onClick={() => SetTask2W(text)}>{Task2W}</button>
              <br/>
              <button onClick={() => SetTask3W(text)}>{Task3W}</button>
            </div>
            <div class="task">
              <button onClick={() => SetTask1Th(text)}>{Task1Th}</button>
              <br/>
              <button onClick={() => SetTask2Th(text)}>{Task2Th}</button>
              <br/>
              <button onClick={() => SetTask3Th(text)}>{Task3Th}</button>
            </div>
            <div class="task">
              <button onClick={() => SetTask1F(text)}>{Task1F}</button>
              <br/>
              <button onClick={() => SetTask2F(text)}>{Task2F}</button>
              <br/>
              <button onClick={() => SetTask3F(text)}>{Task3F}</button>
            </div>
            <div class="task">
              <button onClick={() => SetTask1Sa(text)}>{Task1Sa}</button>
              <br/>
              <button onClick={() => SetTask2Sa(text)}>{Task2Sa}</button>
              <br/>
              <button onClick={() => SetTask3Sa(text)}>{Task3Sa}</button>
            </div>
            <div class="task">
              <button onClick={() => SetTask1Su(text)}>{Task1Su}</button>
              <br/>
              <button onClick={() => SetTask2Su(text)}>{Task2Su}</button>
              <br/>
              <button onClick={() => SetTask3Su(text)}>{Task3Su}</button>
            </div>
          </div>
          <TaskManager SetText={setParentState} Reset={ResetFunction}/>
        </div>
      </body>
    </div>
  );
}

export default App;

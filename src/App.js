import { useState } from 'react';
import './App.css';
import { TaskManager } from './components/TaskManager';

function App() {

  let [written_text,Setwritten_text] = useState("");

  let [text,Settext] = useState("");

  function setParentState(value) {
    Settext(value);
    console.log(text);
  }

  return (
    <div className="App">
      <body className="App-header">
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
              <button>Task1</button>
              <br/>
              <button>Task2</button>
              <br/>
              <button>Task3</button>
            </div>
            <div class="task">
              <button onClick={() => Setwritten_text(text)}>{written_text}</button>
              <br/>
              <button>Task2</button>
              <br/>
              <button>Task3</button>
            </div>
            <div class="task">
              <button>Task1</button>
              <br/>
              <button>Task2</button>
              <br/>
              <button>Task3</button>
            </div>
            <div class="task">
              <button>Task1</button>
              <br/>
              <button>Task2</button>
              <br/>
              <button>Task3</button>
            </div>
            <div class="task">
              <button>Task1</button>
              <br/>
              <button>Task2</button>
              <br/>
              <button>Task3</button>
            </div>
            <div class="task">
              <button>Task1</button>
              <br/>
              <button>Task2</button>
              <br/>
              <button>Task3</button>
            </div>
            <div class="task">
              <button>Task1</button>
              <br/>
              <button>Task2</button>
              <br/>
              <button>Task3</button>
            </div>
          </div>
          <TaskManager test_function={setParentState}/>
        </div>
      </body>
    </div>
  );
}

export default App;

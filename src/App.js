import './App.css';
import { TaskManager } from './components/TaskManager';

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <div class="schedule">
          <div class="days-row">
            <div class="day">
              Day 1
            </div>
            <div class="day">
              Day 2
            </div>
            <div class="day">
              Day 3
            </div>
            <div class="day">
              Day 4
            </div>
            <div class="day">
              Day 5
            </div>
            <div class="day">
              Day 6
            </div>
            <div class="day">
              Day 7
            </div>
          </div>
          <div class="tasks-row">
            <div class="task">
              task 1
              <br/>
              task 2
              <br/>
              task 3
            </div>
            <div class="task">
              task 1
              <br/>
              task 2
              <br/>
              task 3
            </div>
            <div class="task">
              task 1
              <br/>
              task 2
              <br/>
              task 3
            </div>
            <div class="task">
              task 1
              <br/>
              task 2
              <br/>
              task 3
            </div>
            <div class="task">
              task 1
              <br/>
              task 2
              <br/>
              task 3
            </div>
            <div class="task">
              task 1
              <br/>
              task 2
              <br/>
              task 3
            </div>
            <div class="task">
              task 1
              <br/>
              task 2
              <br/>
              task 3
            </div>
          </div>
          <TaskManager/>
        </div>
      </body>
    </div>
  );
}

export default App;

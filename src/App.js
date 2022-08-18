import { useSelector, useDispatch } from "react-redux";

import './App.css';
import {
  addTask,
  deleteTask,
} from "./actions/todo";

const App = () => {

  const tasks = useSelector(state => state);

const dispatch = useDispatch();

  const save = (event) => {
    event.preventDefault();
    dispatch(addTask(event.target.task.value));
  }

  const remove = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(event) => {save(event)}}>
          <input type="text" name="task" />
          <button>Save</button>
        </form>
        <div>
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  {task.value}
                  &nbsp;
                  <button onClick={() => remove(task.id)}>[X]</button>
                </li>
              )
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

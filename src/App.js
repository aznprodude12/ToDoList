import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
     const [ toDo, setToDo ] = useState([
          { id: 1, title: "Task 1", "status": false },
          { id: 2, title: "Task 2", "status": false },
     ]);

     const [ newTask, setNewTask ] = useState('');
     const [ updateData, setUpdateData ] = useState('');

     // Add task
     const addTask = () => {
          if (newTask) {
               let num = toDo.length + 1;
               let newEntry = { id: num, title: newTask, status: false };

               setToDo([...toDo, newEntry]);
               setNewTask('');
          }
     }

     return (
          <div className="container App">
              <br /><br />
              <h2>To Do List App (ReactJS)</h2>
              <br /><br />

              { /* Add Task */}
              <div className='row'>
                   <div className='col'>
                        <input
                             className="form-control form-control-lg"
                             onChange={(e) => setNewTask(e.target.value)}
                             value={newTask}
                        />
                   </div>
                   <div className='col-auto'>
                        <button
                             className="btn btn-lg btn-success"
                             onClick={addTask}
                        >
                             Add Task
                        </button>
                   </div>
              </div>

              { /* Display ToDos */ }

              { toDo && toDo.length ? '' : 'No tasks to display' }

              { toDo && toDo
                   .sort(((a, b) => a.id > b.id ? 1 : -1))
                   .map((task, index) => {
                   return (
                        <React.Fragment key={task.id}>
                             <div className='col taskBg'>
                                  <div className={task.status ? 'done' : ''}>
                                       <span className="taskNumber">{index + 1}</span>
                                       <span className="taskText">{task.title}</span>
                                  </div>
                                  <div className='iconsWrap'>
                                       <span title="Completed / Not Completed">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                       </span>
                                       <span title="Edit">
                                            <FontAwesomeIcon icon={faPen} />
                                       </span>
                                       <span title="Delete">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                       </span>
                                  </div>
                             </div>
                        </React.Fragment>
                   )
              })}
          </div>
     );
}

export default App;

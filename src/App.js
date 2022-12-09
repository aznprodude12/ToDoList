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

     // Delete task
     const deleteTask = (id) => {
          let newTasks = toDo.filter( task => task.id !== id )

          setToDo(newTasks);
     }

     // Set task as done
     const setDone = (id) => {
          let newTask = toDo.map( task => {
               if (task.id === id) {
                    return ({ ...task, status: !task.status })
               }
               return task;
          })

          setToDo(newTask);
     }

     // Cancel update
     const cancelUpdate = () => {
          setUpdateData('')
     }

     // Change task for update
     const changeTask = (e) => {
          let newEntry = {
               id: updateData.id,
               title: e.target.value,
               status: updateData.status
          }

          setUpdateData(newEntry);
     }

     // Update task
     const updateTask = () => {
          let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
          let updatedObject = [...filterRecords, updateData];

          setToDo(updatedObject);
          setUpdateData('');
     }

     return (
          <div className="container App">
              <br /><br />
              <h2>To Do List App (ReactJS)</h2>
              <br /><br />

              { updateData && updateData ? (
                   <>
                        { /* Update Task */ }
                        <div className='row'>
                             <div className='col'>
                                  <input
                                       className="form-control form-control-lg"
                                       value={ updateData && updateData.title }
                                       onChange={(e) => changeTask(e)}/>
                             </div>
                             <div className='col-auto'>
                                  <button
                                       className="btn btn-lg btn-success mr-20"
                                       onClick={updateTask}
                                  >
                                       Update
                                  </button>
                                  <button
                                       className="btn btn-lg btn-warning"
                                       onClick={cancelUpdate}
                                  >
                                       Cancel
                                  </button>
                             </div>
                        </div>
                   </>
              ) : (
                   <>
                        { /* Add New Task */ }
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
                   </>
              )}

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
                                       <span title="Completed / Not Completed" onClick={() => setDone(task.id)}>
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                       </span>
                                       { task.status ? null : (
                                            <span title="Edit" onClick={() => setUpdateData(task)}>
                                                 <FontAwesomeIcon icon={faPen} />
                                            </span>
                                       )}
                                       <span title="Delete" onClick={() => deleteTask(task.id)}>
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

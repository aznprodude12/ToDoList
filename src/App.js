import React, { useState } from 'react';

import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';

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
                   <UpdateForm
                        updateData={updateData}
                        changeTask={changeTask}
                        updateTask={updateTask}
                        cancelUpdate={cancelUpdate}
                   />
              ) : (
                   <AddTaskForm
                        newTask={newTask}
                        setNewTask={setNewTask}
                        addTask={addTask}
                   />
              )}

              { /* Display ToDos */ }

              { toDo && toDo.length ? '' : 'No tasks to display' }

              <ToDo
                   toDo={toDo}
                   setDone={setDone}
                   setUpdateData={setUpdateData}
                   deleteTask={deleteTask}
              />
          </div>
     );
}

export default App;

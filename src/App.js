import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
     const [ toDo, setToDo ] = useState([
          { id: 1, title: "Task 1", "status": true },
          { id: 2, title: "Task 2", "status": false },
     ]);

     const [ newTask, setNewTask ] = useState('');
     const [ updateData, setUpdateData ] = useState('');

     return (
          <div className="container App">
              <br /><br />
              <h2>To Do List App (ReactJS)</h2>
              <br /><br />

              { /* Display ToDos */ }

              { toDo && toDo.length ? '' : 'No tasks to display' }

              { toDo && toDo.map((task, index) => {
                   return (
                        <React.Fragment key={task.id}>
                             <div className='col taskBg'>
                                  <div className={task.status ? 'done' : ''}>
                                       <span className="taskNumber">{index + 1}</span>
                                       <span className="taskText">{task.title}</span>
                                  </div>
                             </div>
                        </React.Fragment>
                   )
              })}
          </div>
     );
}

export default App;

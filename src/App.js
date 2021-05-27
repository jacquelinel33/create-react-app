import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
    }
  ]);
  
  //Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete ={deleteTask} /> : 'No Tasks Available'}
    </div>
  );
}

export default App;

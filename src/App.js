import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
    }
  ]);

  //Add
  const addTask = () => {
    
  };
  
  //Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  //Highlight task
  const toggleHighlight = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  };

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <AddTask/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete ={deleteTask} onToggle={toggleHighlight} /> : 'No Tasks Available'}

    </div>
  );
}

export default App;

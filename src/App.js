import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {

  const [tast, setTasks] = useState([]);
  
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={ tasks }/>
    </div>
  );
}

export default App;

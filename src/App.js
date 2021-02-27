import { useState , useEffect} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([ ]);
  const [showAddTask, setShowAddTask] = useState(false);
 
  // fetch data method
    const fetchTasks = async () => {
    const res = await fetch(" http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
    return data;
  };
  useEffect(() => {
  fetchTasks()
  }, [])


// add task
  const addTask = async (task) => {
    const respond = fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      // the below json.stringify() is used to convert object or aray in to json notation
      body: JSON.stringify(task),
    }) 
    
    const data = await respond.json();
  
    setTasks([...tasks, data])
  }

  // delete Tasks
  const deleteTask = async (id) => {
    const del = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:  'Delete',
    })
        setTasks(tasks.filter((task)=>task.id !== id))
  };
 // togelReminder
  const togelReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ?{ ...task, reminder: !task.reminder }:task
      )
    )
  }
  
  return (
    <div className="App p-36 pt-2  bg-gray-800 ">
      <div className=" shadow-l border-1 border-gray-200 bg-gray-100">
        <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        <Tasks tasks={tasks} onDelete={deleteTask} onToggel={togelReminder} />
      </div>
    </div>
  );
}

export default App;

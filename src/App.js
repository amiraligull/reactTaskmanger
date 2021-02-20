import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {

    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Doctor Appoinment",
        day: "feb 5th at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Amir Appoinment",
        day: "feb 6th at 2:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Ayesha Appoinment",
        day: "feb 7th at 2:30pm",
        reminder: true,
      },
    ]);

// add task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
 
  }
  
  // delete Tasks
  const deleteTask = (id) => {
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
        <Header />
        <AddTask onAdd={ addTask } />
        <Tasks tasks={tasks} onDelete={deleteTask} onToggel={togelReminder} />
      </div>
    </div>
  );
}

export default App;

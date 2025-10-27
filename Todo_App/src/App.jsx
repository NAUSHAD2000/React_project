import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const[input, setInput] = useState("");


  const addtask = ()=>{
    if(input.trim()){
      setTasks([...tasks,{text:input, completed:false}]);
      setInput("");
    }
  }

  const deleteTask = (index) => {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
};

  return (
    <>
      <div className=" flex min-h-screen flex bg-gradient-to-r from-blue-600 to-emerald-400 justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-16">
          <h1 className="text-center font-bold text-4xl mb-6">Todo App</h1>
          <div className="flex mb-4 gap-4">
            <input
              type="text" value={input} onChange={(e)=>setInput(e.target.value)}
              placeholder="Enter the task"
              className="flex p-2 border rounded"
            />
            <button onClick={addtask}
            className="flex px-4  p-3 border rounded bg-blue-500 text-white hover:bg-blue-600">
              Add Task
            </button>
              
            </div>
          
            <ul className="">
              {
                tasks.map((task, index)=>(
                  <li key={index} className="flex justify-between items-center mb-2">
                      <span>{task.text}</span>
                      <button onClick={() => deleteTask(index)} className="ml-4 p-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                  </li>
                ))
              }

            </ul>
        </div>
      </div>
    </>
  );
}

export default App;

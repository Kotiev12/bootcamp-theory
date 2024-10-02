// import { createContext, useState } from "react";

// export const TaskContext = createContext();

// export const TaskProvider = (props) => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//   const newTask = {text: task, isComplete: false}  
//   setTasks([...tasks, newTask])  
//   };


//   const removeTask = () => {};
//   const completeTask = () => {};

//   const state = {
//     tasks,
//     addTask,
//     removeTask,
//     completeTask,
//   };

//   return (
//     <TaskContext.Provider value={state}>{props.children}</TaskContext.Provider>
//   );
// };


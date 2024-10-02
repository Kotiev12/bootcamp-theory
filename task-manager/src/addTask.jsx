// import { useContext, useState } from "react"
// import { TaskContext } from "./TaskContext"

// const AddTask = () => {
//   const [text, setText] = useState("")
//   const state = useContext(TaskContext)

//   function handleChange(e) {
//       setText(e.target.value)
//       console.log(text);
      
//   }

//   function addTask(e) {
//       e.preventDefault()
//       state.addTask(text)
//       setText("")
//   }

//   return (
//       <form onSubmit={addTask}>
//           <input type="text" onChange={handleChange} value={text}/>
//           <button type='submit'>Добавить</button>
//       </form>
//   )
// }

// export default AddTask
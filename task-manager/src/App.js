// import AddTask from "./addTask";
// import { TaskProvider } from "./TaskContext";
// import TaskList from "./TaskList";
// import ProductList from "./components/ProductList"
// import StudentList from "./components/StudentList";

import CityList from "./components/CityList";

// import BookList from "./components/BookList";

// import UserTable from "./components/UserTable";


function App() {
  // const products = [
  //   { name: "Laptop", price: 1000 },
  //   { name: "Phone", price: 500 },
  //   { name: "Tablet", price: 300 }
  //   ];


  //  const students = [
  //  { name: "John Doe", group: "A1" },
  //  { name: "Jane Smith", group: "B2" },
  //  { name: "Michael Johnson", group: "A3" }
  // ];
    
  // const users = [
  //   { name: "Alice", email: "alice@example.com", age: 25 },
  //   { name: "Bob", email: "bob@example.com", age: 30 },
  //   { name: "Charlie", email: "charlie@example.com", age: 35 }
  //   ];
    
//   const books = [
// { title: "To Kill a Mockingbird", author: "Harper Lee" },
// { title: "1984", author: "George Orwell" },
//  { title: "Moby Dick", author: "Herman Melville" }
// ];

const citys = [
{ name: "New York", population: 8419600 },
{ name: "Los Angeles", population: 3980400 },
{ name: "Chicago", population: 2716000 }
];

    
  return (
    <CityList citys={citys}/>
    // <BookList books={books}/>
    // <UserTable users={users}/>
    // <StudentList students={students}/>
    // <ProductList products={products}/>
    // <TaskProvider>
    //   <AddTask/>
    //   <TaskList/>
    // </TaskProvider>
  );
}

export default App;

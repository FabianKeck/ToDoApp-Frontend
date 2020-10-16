import Header from "./components/Header";
import ToDoView from "./components/ToDoView";
import React, {useState} from 'react';

function App() {
    const [toDoList, setToDoList]= useState([]);
    function addNewToDo(toDo){
        setToDoList([...toDoList,toDo])
    }

  return (
    <div>
      <Header onAddToDo = {addNewToDo}></Header>
      <ToDoView/>
    </div>
  );
}

export default App;
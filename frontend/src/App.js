import Header from "./components/Header";
import ToDoView from "./components/ToDoView";
import React, {useState} from 'react';

function App() {
    // brauchen wir zum speichern der ToDo-Liste
    const [toDoList, setToDoList]= useState([]);

    // neues ToDO-Item erstellen
    function addNewToDo(toDo){
        setToDoList([...toDoList,toDo])
        console.log("hello from addNewToDo");
        console.log(toDoList);
    }
 //Ausgabe auf dem Screen
  return (
    <div>
      <Header onAddToDo = {addNewToDo}></Header>
      <ToDoView/>
    </div>
  );
}

export default App;
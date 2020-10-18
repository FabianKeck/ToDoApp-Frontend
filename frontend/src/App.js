import Header from "./components/Header";
import ToDoView from "./components/ToDoView";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components/macro"

function App() {
    // brauchen wir zum speichern der To-Do-Liste
    const [toDoList, setToDoList]= useState([]);

    // neues To-DO-Item erstellen
    function addNewToDo(toDo){
        console.log(toDo)
        console.log(toDoList)
        setToDoList([...toDoList,toDo])
    }
    function getList(){
        axios.get("/api/todo")
            .then(response => response.data)
            .then(data => setToDoList(data))
            .then(()=> console.log(toDoList))
            .catch(()=> console.log("Data fetching failed"))

    }
    function progressToDo(toDo){
        console.log("App.js:progressToDo: called on  item: ", toDo )
        setToDoList([...toDoList.filter(item => item.id !==toDo.id),toDo]);
    }
    function deleteToDo(toDo) {
        console.log(toDo.id);
        setToDoList(toDoList.filter(item => item.id !==toDo.id));
        console.log("Length of toDoList after delete: ", toDoList.length)
    };


    useEffect(()=> {getList()},[])

    //Ausgabe auf dem Screen
    //onAddToDo kann gelöscht werden?
  return (
    <StyledApp>
      <Header onAddToDo = {addNewToDo}></Header>
      <ToDoView toDos={toDoList} progressToDo={progressToDo} deleteToDo={deleteToDo}/>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`

  margin: .2em;
  padding: .2em;
  //display: none;

`


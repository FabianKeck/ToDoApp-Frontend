import Header from "./components/Header";
import ToDoView from "./components/ToDoView";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components/macro"
import useToDoList from "./utils/useToDoList";

function App() {
    const [toDoList, setToDoList, addNewToDo, progressToDo, deleteToDo] = useToDoList([]);


    function getList(){
        axios.get("/api/todo")
            .then(response => response.data)
            .then(data => setToDoList(data))
            .then(()=> console.log(toDoList))
            .catch(()=> console.log("Data fetching failed"))

    }



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


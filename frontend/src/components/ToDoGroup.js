import React from 'react';
import styled from "styled-components/macro";
import ToDoItem from "./ToDoItem";
import getNeatStatusString from "../utils/getNeatStatusString";

export default function ToDoGroup({status, toDos, progressTodo, deleteToDo}){

    return(
       <StyledToDoGroup>
           <h3>{ getNeatStatusString(status) }</h3>
           {toDos.filter((toDo)=>toDo.status === status )
               .map((toDo, index) => <ToDoItem key={index}
                                               data = {toDo}
                                               progressTodo={progressTodo}
                                               deleteToDo={deleteToDo}
                                               />)
           }
       </StyledToDoGroup>
    )
}

const StyledToDoGroup = styled.div`
  width: 32%;
  background-color: #dd5757;
  border-radius: 3px;
  align-content: center;
  height: fit-content;
  box-shadow: 1px 3px 3px #0008;
  
  
  h3{
    text-align: center;
    font-size: 30px;
    
  }
 `


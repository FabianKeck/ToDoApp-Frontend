import React from 'react';
import styled from "styled-components/macro";
import ToDoItem from "./ToDoItem";
import getNeatStatusString from "../utils/getNeatStatusString";

export default function ToDoGroup({status, toDos}){

    return(
       <StyledToDoGroup>
           <h4>{ getNeatStatusString(status) }</h4>
           {toDos.filter((toDo)=>toDo.status === status )
               .map((toDo, index) => <ToDoItem key={index} data = {toDo}></ToDoItem>)
           }
       </StyledToDoGroup>
    )
}

const StyledToDoGroup = styled.div` `


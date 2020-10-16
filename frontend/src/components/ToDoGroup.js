import React from 'react';
import styled from "styled-components/macro";
import ToDoItem from "./ToDoItem";

export default function ToDoGroup({status, toDos}){


    return(
       <StyledToDoGroup>
           {toDos.filter((toDo)=>toDo.status === status )
               .map((toDo, index) => <ToDoItem key={index} data = {toDo}></ToDoItem>)
           }
       </StyledToDoGroup>
    )
}

const StyledToDoGroup = styled.div` `


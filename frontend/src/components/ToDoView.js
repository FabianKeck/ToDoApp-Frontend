import React from 'react';
import ToDoGroup from './ToDoGroup'
import styled from "styled-components/macro"
import getStatusList from "../utils/getStatusList";

export default function ToDoView({toDos, progressToDo, deleteToDo}){

    //Ausgabe auf dem Screen
    return(
        <StyledToDoView>
            {getStatusList().map(status => {
                return <ToDoGroup key={status}
                                  status={status}
                                  toDos={toDos}
                                  progressTodo={progressToDo}
                                  deleteToDo={deleteToDo}
                                  /> ;
            })}
        </StyledToDoView>
    )
}

const StyledToDoView = styled.section`
    display: grid;
    justify-content: space-between;
    flex-direction: column;   
`
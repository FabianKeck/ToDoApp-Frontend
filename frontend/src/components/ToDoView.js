import React from 'react';
import ToDoGroup from './ToDoGroup'
import styled from "styled-components/macro"

export default function ToDoView({toDos, progressToDo}){
    const statusList =["OPEN", "IN_PROGRESS", "DONE"]
    //Ausgabe auf dem Screen
    return(
        <StyledToDoView>
            {statusList.map(status => {
                return <ToDoGroup key={status}
                                  status={status}
                                  toDos={toDos}
                                  progressTodo={progressToDo}
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
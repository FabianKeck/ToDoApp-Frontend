import React from 'react';
import Open from "./Open";
import InProgress from "./InProgress";
import Done from "./Done";
import styled from "styled-components/macro"

export default function ToDoView(){

    //Ausgabe auf dem Screen
    return(
        <StyledToDoView>

            <Open>OPEN</Open>
            <InProgress>IN PROGRESS</InProgress>
            <Done>DONE</Done>

        </StyledToDoView>
    )
}

const StyledToDoView = styled.section`
    display: grid;
    justify-content: space-between;
    flex-direction: column;   
`
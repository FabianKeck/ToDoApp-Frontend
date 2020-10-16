import React from "react";
import ToDoItem from "./ToDoItem";
import styled from "styled-components/macro"


export default function Done(){

    return(
        <>
            <ToDoItem>This Todo is already done</ToDoItem>
        </>
    )
}
import React from 'react';
import Open from "./Open";
import InProgress from "./InProgress";
import Done from "./Done";

export default function ToDoView(){

    //Ausgabe auf dem Screen
    return(
        <>
            <div>ToDoView
                <Open>OPEN</Open>
                <InProgress>IN PROGRESS</InProgress>
                <Done>DONE</Done>
            </div>
        </>
    )
}

import React, {useState} from "react";
import axios from "axios";

export default function (initialList){
    const [toDoList, setToDoList]= useState(initialList);

    // neues To-DO-Item erstellen
    function addNewToDo(toDo){
        console.log(toDo)
        console.log(toDoList)
        setToDoList([...toDoList,toDo])
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

    return [toDoList, setToDoList, addNewToDo, progressToDo, deleteToDo]

}
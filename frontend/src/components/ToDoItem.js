import React from "react";
import axios from "axios";


export default function ToDoItem({data, progressTodo}){
    function progressItem(){
        console.log("this should Progress an item");
        axios.put(deleteString(),data)
            .then(response => response.data)
            .then(progressTodo)
    }
    const deleteString = ()=> "api/todo/"+data.id;

    function deleteItem(){
        console.log("this should delete an item")
    }
    return(
        <>
            <h4>{data.description}</h4>
            <button onClick={deleteItem}>Delete</button>
            <button onClick={progressItem}>Progress</button>
        </>
    )
}
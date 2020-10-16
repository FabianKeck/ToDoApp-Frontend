import React from "react";
import axios from "axios";


export default function ToDoItem({data, progressTodo, deleteToDo}){
    function progressItem(){
        console.log("this should Progress an item");
        axios.put(idString(),data)
            .then(response => response.data)
            .then(progressTodo)
    }
    const idString = ()=> "api/todo/"+data.id;

    function deleteItem(){
        //console.log("this should delete the item", data)
        axios.delete(idString())
        deleteToDo(data);

    }
    return(
        <>
            <h4>{data.description}</h4>
            <button onClick={deleteItem}>Delete</button>
            <button onClick={progressItem}>Progress</button>
        </>
    )
}
import React from "react";


export default function ToDoItem({data}){
    function progressItem(){
        console.log("this should Progress an item");
    }

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
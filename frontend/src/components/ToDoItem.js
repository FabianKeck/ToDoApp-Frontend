import React from "react";
import axios from "axios";
import styled from "styled-components/macro"


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
        <StyledToDoItem>
            <p>{data.description}</p>
            <div><button onClick={deleteItem}>Delete</button>
                <button onClick={progressItem}>Progress</button></div>

        </StyledToDoItem>
    )
}

const StyledToDoItem = styled.article`
  border-radius: inherit;
  margin: .7em;
  padding: .7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d69b57;
  box-shadow: 1px 3px 4px;
  
  
  
  
  
  button{
    ;
  }
`
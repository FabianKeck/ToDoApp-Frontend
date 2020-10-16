import React, {useState} from "react";
import styled from "styled-components/macro";
import axios from "axios";

export default function AddNewToDoForm({onSubmit}){
    const [description, setDescription] = useState("Enter Description");

    function postNewToDo(){
        axios.post("/api/todo", {"description":description, "status":"OPEN"})
    }

    return(

            <StyledToDoForm>
                <label>Please enter description of your new To-Do:</label><br/>
                <input onChange={event => setDescription(event.target.value)} type={"text"} value={description}/>
                <input type={"button"} value={"addToDo"} onClick={postNewToDo}/>
            </StyledToDoForm>
    )
}

    const StyledToDoForm = styled.form`


`
import React, {useState} from "react";
import styled from "styled-components/macro";
import axios from "axios";
import getStatusList from "../utils/getStatusList";
import getNeatStatusString from "../utils/getNeatStatusString";

export default function AddNewToDoForm({onSubmit}){
    const [description, setDescription] = useState("Enter Description");
    const [status, setStatus] = useState("OPEN");

    function postNewToDo(){
        console.log("Test Todo??")
        axios.post("/api/todo", {description:description, status:status})
            .then(response => response.data)
            .then(onSubmit)

    }

    return(

            <StyledToDoForm>
                <label>Please enter description of your new To-Do:</label><br/>
                <select onChange={event=>setStatus(event.target.value)}>
                    {getStatusList().map(status=>
                        <option value={status}>{getNeatStatusString(status)}</option>)
                    }
                </select>
                <input onChange={event => setDescription(event.target.value)} type={"text"} value={description}/>
                <input type={"button"} value={"addToDo"} onClick={postNewToDo}/>
            </StyledToDoForm>
    )
}

    const StyledToDoForm = styled.form`


`
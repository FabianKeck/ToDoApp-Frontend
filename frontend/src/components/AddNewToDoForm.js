import React, {useState} from "react";
import styled from "styled-components/macro";

export default function AddNewToDoForm({onSubmit}){
    const [description, setDescription] = useState("Enter Description");



    return(

            <StyledToDoForm>
                <label>Please enter description of your new To-Do:</label><br/>
                <input onChange={event => setDescription(event.target.value)} type={"text"} value={description}/>
                <input type={"button"} value={"addToDo"}
                       onClick={
                           ()=> {onSubmit({"description":description, "status": "OPEN"});
                           }}/>
            </StyledToDoForm>
    )
}

    const StyledToDoForm = styled.form`


`
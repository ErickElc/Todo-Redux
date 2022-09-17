import { addItem } from "../../reduxConfig/actions/listAction";
import { ContainerForm } from "../../styles/compontents";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './form.scss';

export default () =>{
    const [input, setInput] = useState({input: ''});
    const dispatch = useDispatch()
    function HandleChange(e){
        e.preventDefault()
        setInput(prev => ({...prev, input: e.target.value}));
    
    }
    function AddItemEvent(e){
        e.preventDefault()

        if(input.input){
            dispatch(addItem(input.input))
        }
        setInput({input: ''});
    }   
    return(
        <ContainerForm className="ContainerForm" onSubmit={AddItemEvent}>
                <TextField 
                    className="InputForm"
                    label="Adicione um elemento a lista" 
                    style={{marginRight: '1px', color: "black"}}
                    onChange={HandleChange} 
                    value={input.input}
                    id="outlined-basic"  
                    variant="outlined"
                />
                <Button variant="contained" style={{width: '50px', height: '56px'}} type='submit'>ADD</Button>
        </ContainerForm>
    )
}
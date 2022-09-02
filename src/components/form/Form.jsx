import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/listAction";

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
        <form action="">
            <input 
                type="text" 
                onChange={HandleChange} 
                value={input.input}
            />
            <button onClick={AddItemEvent}>ADD</button>
      </form>
    )
}
import { useDispatch, useSelector } from "react-redux"
import {changeDone, deleteItem} from '../../actions/listAction'
export default () => {
    const items = useSelector(state => state);
    const dispatch = useDispatch();
    return(
        <ul>
        {
            items.map(item => (
            <li key={item.id}>
              <span 
                style={
                    (item.done == true) 
                    ? {textDecoration: "line-through"}
                    :{textDecoration: "none"}
                }>
                    {item.content}
                </span>
              <button onClick={()=> {dispatch(deleteItem(item.id))}}>Excluir</button>
              <button onClick={()=> {dispatch(changeDone(item.id))}}>PRONTO</button>
            </li>
            
          ))
        }
      </ul>
    )
}
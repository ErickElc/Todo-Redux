import { Done } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux"
import { ContainerList, ListComponent, SpanList } from "../../styles/compontents";
import {changeDone, deleteItem} from '../../reduxConfig/actions/listAction';
export default () => {
    const items = useSelector(state => state);
    const dispatch = useDispatch();
    return(
        <ContainerList>
        {
            items.map(item => (
              <>
                <ListComponent key={item.id} className='listContainer'>
                  <SpanList>
                    <IconButton aria-label='done' color='primary' onClick={()=> {dispatch(changeDone(item.id))}}>
                      <Done/>
                    </IconButton>
                    <IconButton aria-label="delete" color="error" onClick={()=> {dispatch(deleteItem(item.id))}}>
                      <DeleteIcon />
                    </IconButton>
                    -
                  </SpanList>
                  <span 
                    style={
                        (item.done == true) 
                        ? {textDecoration: "line-through", color: 'red'}
                        :{textDecoration: "none"}
                    }>
                      {item.content}
                    </span>
                </ListComponent>
              </>
          ))
        }
      </ContainerList>
    )
}
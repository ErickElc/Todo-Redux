import { Provider } from 'react-redux';
import {legacy_createStore} from 'redux';
import Form from '../components/form/Form.jsx';
import List from '../components/list/list.jsx';
import listReducer from '../reduxConfig/reducers/listReducer.js';
import { ContaierTodo, DivBody } from '../styles/compontents.js';



const SAVED_ITEMS = 'savedItem';

function persistState(state){
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}
function loadState(){
  const actualState = localStorage.getItem(SAVED_ITEMS);
  if(actualState){
    return JSON.parse(actualState);
  }
  return [];
}

const store = legacy_createStore(listReducer, loadState());

store.subscribe(()=>{
  persistState(store.getState())
})

function App() {

  return (
    <DivBody className="App">
      <ContaierTodo className='ContainerTodo'>
        <h1>TODO LIST</h1>
        <Provider store={store}>
          <Form />
          <List />
        </Provider>
      </ContaierTodo> 
    </DivBody>
  )
}

export default App;
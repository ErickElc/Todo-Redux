import { Provider } from 'react-redux';
import {legacy_createStore} from 'redux';
import listReducer from '../reducers/listReducer.js';
import Form from '../components/form/Form.jsx';
import List from '../components/list/list.jsx';
import './app.css'



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
    <div className="App">
      <h1>TODO LIST</h1>
      <Provider store={store}>
        <Form />
        <List />
      </Provider>
    </div>
  )
}

export default App

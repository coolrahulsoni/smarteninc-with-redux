import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'
import { fetchData } from './actions/dataAction';


const saveState = (state) => {   
    
  if(state.data.length !== 0){
    localStorage.setItem("data", JSON.stringify(state.data));
  }
};

const getState = () => { 
  
  try{
    const s = localStorage.getItem("data");  
    if (s  === null) return undefined;
    return JSON.parse(s);
  }catch(e){
    return undefined;
  }
};


const initialState = getState();

const initalState = {}

const middleware = [thunk]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))


store.dispatch(fetchData());

store.subscribe(()=>{     
 saveState(store.getState().data)

})


export default store;
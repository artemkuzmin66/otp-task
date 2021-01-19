import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
   form: formReducer,
})


const store = createStore(reducers, composeWithDevTools())

export default store;


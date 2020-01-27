import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import sidebarMenu from "./store/reducer/sidebarmenuReducer";
import furnitureBlocksReducer from "./store/reducer/furnitureBlocksReducer";
import vrContentReducer from "./store/reducer/vrReducer";
import topMenuReducer from "./store/reducer/topMenuReducer";
import shopContentReducer from "./store/reducer/shopContentReducer";
import cartReducer from "./store/reducer/cartReducer";
import cartButtonReducer from "./store/reducer/cartButtonReducer";
import vrMenuReducer from "./store/reducer/vrMenuReducer";

const rootReducer = combineReducers({
   sidebar:  sidebarMenu,
   furnitureBlock: furnitureBlocksReducer,
   vrReducer: vrContentReducer,
   topMenuRed: topMenuReducer,
   shopReducer: shopContentReducer,
   cartReducer: cartReducer,
   cartButtonReducer: cartButtonReducer,
   vrMenuReducer: vrMenuReducer,
});
const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

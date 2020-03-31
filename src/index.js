import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

import sidebarMenu from "./store/reducer/sidebarmenuReducer";
import furnitureBlocksReducer from "./store/reducer/furnitureBlocksReducer";
import vrContentReducer from "./store/reducer/vrReducer";
import topMenuReducer from "./store/reducer/topMenuReducer";
import shopContentReducer from "./store/reducer/shopContentReducer";
import cartReducer from "./store/reducer/cartReducer";
import cartButtonReducer from "./store/reducer/cartButtonReducer";
import vrMenuReducer from "./store/reducer/vrMenuReducer";
import vrCollectionReducer from "./store/reducer/vrCollectionReducer";
import vrAnimationDesktopReducer from "./store/reducer/vrAnimationDesktopReducer";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
   sidebar:  sidebarMenu,
   furnitureBlock: furnitureBlocksReducer,
   vrReducer: vrContentReducer,
   topMenuRed: topMenuReducer,
   shopReducer: shopContentReducer,
   cartReducer: cartReducer,
   cartButtonReducer: cartButtonReducer,
   vrMenuReducer: vrMenuReducer,
   vrCollectionReducer: vrCollectionReducer,
   vrAnimationDesktop: vrAnimationDesktopReducer,
   form: formReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    );


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

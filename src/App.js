import React from 'react';
import VRContent from "./container/VRContent/VRContent";
import HomeContent from "./components/HomeContent/HomeContent";
import ShopContent from "./components/ShopContent/ShopContent";
import Content from "./container/ShopContent/Content";
import "./App.css";

import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import Furniture from "./components/ShopContent/Furniture/Furniture";

class App extends React.Component{
    render() {
    const App = () => (
            <Switch>
                <Route exact path='/' component={HomeContent}/>
                <Route path='/vr' component={VRContent}/>
                <Route path={'/shop'} component={ShopContent}/>
            </Switch>
    );
    return(
        <HashRouter>
        <Switch>
            <App/>
        </Switch>
        </HashRouter>
    )
    }
}

export default App;
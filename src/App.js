import React from 'react';
import VRContent from "./container/VRContent/VRContent";
import HomeContent from "./components/HomeContent/HomeContent";
import ShopContent from "./components/ShopContent/ShopContent";
import "./App.css";
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import AboutUs from "./components/About Us/Content";
import Deliver from "./components/Deliver/Content";


class App extends React.Component{
    render() {
    const App = () => (
            <Switch>
                <Route exact path='/' component={HomeContent}/>
                <Route path='/vr' component={VRContent}/>
                <Route path={'/shop'} component={ShopContent}/>
                <Route path={'/about-us'} component={AboutUs}/>
                <Route path={'/deliver'} component={Deliver}/>
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
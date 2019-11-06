import React from 'react';
import VRContent from "./components/VRContent/VRContent";
import HomeContent from "./components/HomeContent/HomeContent";
import Loader from "./components/Loader/Loader";
import "./App.css";
import {HashRouter, Route, Switch} from "react-router-dom";

class App extends React.Component{



render() {
    const App = () => (
            <Switch>
                <Route exact path='/' component={HomeContent}/>
                <Route path='/vr' component={VRContent}/>
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
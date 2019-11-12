import React from 'react';
import VRContent from "./components/VRContent/VRContent";
import HomeContent from "./components/HomeContent/HomeContent";
import VideoContent from "./components/VRContent/VideoContent/VideoContent";
import Loader from "./components/Loader/Loader";
import "./App.css";
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";

class App extends React.Component{
    state = {
        video: false
    };
componentDidMount(prev) {
    if(window.location.pathname === '/video'){
        this.setState({video: true});
        window.location.href='#/video';
    }
    else this.setState({video: false});
    console.log(window.location.pathname);
    console.log(this.state);
}

    render() {
    const App = () => (
            <Switch>
                <Route exact path='/' component={HomeContent}/>
                <Route path='/vr' component={VRContent}/>
                <Route path={'/video'} render={()=><VideoContent visible={this.state.video}/>}/>
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
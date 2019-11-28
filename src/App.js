import React from 'react';
import VRContent from "./container/VRContent/VRContent";
import HomeContent from "./components/HomeContent/HomeContent";
import VideoContent from "./container/VRContent/RoomContent";
import ShopContent from "./components/ShopContent/ShopContent";
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
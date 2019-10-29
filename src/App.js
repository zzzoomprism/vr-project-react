import React from 'react';
import VRContent from "./components/VRContent/VRContent";
import HomeContent from "./components/HomeContent/HomeContent";
import Loader from "./components/Loader/Loader";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component{



render() {
    return(
        <BrowserRouter>
        <div>
            <Route path={'/home'} component={HomeContent}/>
            <Route path={'/vr'} component={VRContent}/>

            {/*<VRContent/>*/}
        </div>
        </BrowserRouter>


    )
    }
}

export default App;
import React from 'react';
import VRContent from "./components/VRContent/VRContent";
import Loader from "./components/Loader/Loader";
import style from "./components/Loader/Loader.module.css";


class App extends React.Component{
    state={
        visible: true,
    };
    constructor(props){
        super(props);
       this.handleHide = this.handleHide.bind(this);
    }
    componentDidMount(){
        setTimeout(this.handleHide, 8000);
    }

    handleHide(){
        this.setState({visible: false});
    }

render() {
    return(
        <div>
            <Loader visible={this.state.visible}/>
            <VRContent/>
        </div>


    )
    }
}

export default App;
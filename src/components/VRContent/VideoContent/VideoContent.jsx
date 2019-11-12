import React from "react";
import video from "./../../../media/Video/2.mp4";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {withRouter} from "react-router-dom";

class VideoContent extends React.Component{
    state = {
        visible: false,
    };
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prev) {
        if(this.props.visible !== prev.visible){
            window.location.href = "#/video";
        }
        else {
            this.setState({visible: false});
        }
        console.log(this.state);
    }

    handleClick(){
        window.location.href="#/vr";
        window.location.reload();
    }

    render() {
        return(
            <Scene>
            <Sky src={video}>
                <Plane width={2} height={1} color={"#000"} position={"-1 2 -3"}
                       events={{'click': this.handleClick}}/>
            </Sky>
                <Camera position="1 2 0">
                    <Cursor color="white"/>
                </Camera>
            </Scene>
        )
    }
}

export default withRouter(VideoContent);
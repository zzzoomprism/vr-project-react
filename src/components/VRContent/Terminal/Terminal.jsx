import React from "react";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";

class Terminal extends React.Component{
    state={
        headline: "",
        desc: "",
        displayH: "",
        displayD: "",
    };

    constructor(props){
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.changeHeadline = this.changeHeadline.bind(this);
        this.changeText = this.changeText.bind(this);

    }

    componentDidUpdate(prevProps) {
        if(this.props.title !== prevProps.title || this.props.description !== prevProps.description){
            clearInterval(this.timerH);
            clearInterval(this.timerD);
            this.setState({headline: ""});
            this.setState({desc: ""});
            this.setState({displayH: ""});
            this.setState({displayD: ""});
            this.handleLoad();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerH);
        clearInterval(this.timerD);
    }

    handleLoad(){
        this.timerH = setTimeout(this.changeHeadline, 2200 );
        this.timerD = setTimeout(this.changeText, 3500 );
    }

    changeHeadline(){
        this.setState({headline: this.props.title});
        let timer = 0;
        let headline = this.state.headline;
        this.setState({displayH: ""});
        for(let i = 0; i < headline.length; i++){
            setTimeout(()=>{this.setState({displayH: this.state.displayH + headline[i]});
            }, timer);
            timer+=100;
        }
    }

    changeText(){
        let timer = 0;
        this.setState({description: this.props.description});
        let text = this.state.description.split(" ");
        this.setState({displayD: ""});
        for(let i = 0; i < text.length; i++){
            timer+=50;
            setTimeout(()=>{this.setState({displayD: this.state.displayD + " " +  text[i]});
            }, timer);
        }
    }

    render() {
        return (
            <Entity>
                <Plane position={"-1 2.5 -6"} material={"color: white; emissive: white;"}
                       width={6} height={4} visible={this.props.visible} scale={(this.props.visible && this.props.close) ? "1 1 1" : "1 0 0"}
                       animation={(this.props.visible && this.props.close) ? "property: scale; from: 1 0 0; to: 1 1 1; dur: 2000;" : " "}>
                    <Plane width={5.9} height={3.9} material={"color: black; emissive: black;"} position={"0 0 0.01"}>
                        <Text value={"$root: " +  this.state.displayH  + "|"} rotation={"0 -180 0"} side={"double"} z-offset={"-0.04"}
                        anchor={"center"} baseline={"center"} width={5.9} height={3.9} x-offset={"0.2"} position={"0 1.4 0"} font={"dejavu"}
                        color={"#00ff00"} alpha-test={30}/>
                        <Text value={this.state.displayD} rotation={"0 -180 0"} side={"double"}  z-offset={"-0.04"}
                              anchor={"center"} baseline={"center"} width={5.5} height={3.5} position={"0 0.1 0"} font={"dejavu"}
                        wrap-count={60}  color={"#00ff00"} />
                    </Plane>
                </Plane>
            </Entity>
        );
    }
}

export default Terminal;
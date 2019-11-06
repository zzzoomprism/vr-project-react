import React from "react";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";

class Terminal extends React.Component{
    state={
        headline: "",
        desc: "",
        displayH: "",
        displayD: "",
        colorH: "#00ff00",
        colorD: "#00ff00"
    };

    constructor(props){
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.changeHeadline = this.changeHeadline.bind(this);
        this.changeText = this.changeText.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);

    }

    componentDidUpdate(prevProps) {
        if(this.props.title !== prevProps.title){
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
        this.timerH = setInterval(this.changeHeadline, 3000 );
        this.timerD = setInterval(this.changeText, 8000 );
    }

    changeHeadline(){
        this.setState({headline: this.props.title});
        let timer = 0;
        let headline = this.state.headline;
        let color = "rgb(" + this.getRandomColor(0, 255) + "," + this.getRandomColor(0,255) + "," + this.getRandomColor(50, 255) + ")";
        this.setState({colorH: color});
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
        let color = "rgb(" + this.getRandomColor(0, 255) + "," + this.getRandomColor(0,255) + "," + this.getRandomColor(50, 255) + ")";
        this.setState({colorD: color});
        for(let i = 0; i < text.length; i++){
            timer+=50;
            setTimeout(()=>{this.setState({displayD: this.state.displayD + " " +  text[i]});
            }, timer);
        }
    }

    getRandomColor(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        return (
            <Entity>
                <Plane position={"-1 2.5 -2.5"} material={"color: white; emissive: white;"}
                       width={3} height={2} scale={"1 0 0"} visible={this.props.visible}
                       animation={(this.props.visible) ? "property: scale; to: 1 1 1; dur: 2000;" : " "}>
                    <Plane width={2.9} height={1.9} material={"color: black; emissive: black;"} position={"0 0 0.01"}>
                        <Text value={"$root: " +  this.state.displayH  + "|"} rotation={"0 -180 0"} side={"double"} z-offset={"-0.04"}
                        anchor={"center"} baseline={"center"} width={2.9} height={1.9} x-offset={"0.2"} position={"0 0.7 0"} font={"dejavu"}
                        color={this.state.colorH} alpha-test={30}/>
                        <Text value={this.state.displayD} rotation={"0 -180 0"} side={"double"}  z-offset={"-0.04"}
                              anchor={"center"} baseline={"center"} width={2.5} height={1.5} position={"0 0.1 0"} font={"dejavu"}
                        wrap-count={60}  color={this.state.colorD} />
                    </Plane>
                </Plane>
            </Entity>
        );
    }
}

export default Terminal;
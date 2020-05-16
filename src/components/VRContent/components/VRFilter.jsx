import React from "react";
import {Plane, Text, Image} from "react-aframe-ar";

class VRFilter extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        keys: this.props.filter_key
    };
    handleClick(val){
        if(!this.props.filter_key.includes(val)) {
            this.props.setFilterStock(val);
        }
        else{
            this.props.deleteFilterStock(val);
        }
        this.setState({keys: this.props.filter_key});
    }

render() {
    return  <Plane width={15} height={20} position={"1 5 12"} rotation={"0 -180 0"}
                   material={"side: double; color: black; emissive: black;"}>
        <Text value={"CATEGORY: "} color={"white"} negate="false"  wrap-count={15} letter-spacing={15} side={"double"} width={13} height={18} position={"-7 8 0.01"}/>
        <Text value={"chair"} negate="false" letter-spacing={15} wrap-count={25} color={"white"} side={"double"} width={13} height={18} position={"-7 6 0.01"}>
            <Plane width={1} height={1} material={"side: double; color: coral; emissive: coral;"} position={"5 0 0"}
                   events={{
                       "click": ()=>{
                           this.handleClick("chair");
                       }
                   }} >
                <Image src={"https://image.flaticon.com/icons/png/512/60/60731.png"} position={"0 0 0.01"}  width={0.6} height={0.6} material={this.state.keys.includes("chair") ? "opacity: 1;" : "opacity: 0;"}/>
            </Plane>
        </Text>
        <Text value={"sofa"} negate="false" letter-spacing={15} wrap-count={25} color={"white"} side={"double"} width={13} height={18} position={"-7 4 0.01"}>
            <Plane width={1} height={1} material={"side: double; color: coral; emissive: coral;"} position={"5 0 0"}
                   events={{
                       "click": ()=>{
                           this.handleClick("sofa");
                       }
                   }}>
                <Image src={"https://image.flaticon.com/icons/png/512/60/60731.png"} position={"0 0 0.01"}  width={0.6} height={0.6} material={this.state.keys.includes("sofa") ? "opacity: 1;" : "opacity: 0;"}/>
            </Plane>
        </Text>
        <Text value={"bed"} negate="false" letter-spacing={15} wrap-count={25} color={"white"} side={"double"} width={13} height={18} position={"-7 2 0.01"}>
            <Plane width={1} height={1} material={"side: double; color: coral; emissive: coral;"} position={"5 0 0"}
                   events={{
                       "click": ()=>{
                           this.handleClick("bed");
                       }
                   }}>
                <Image src={"https://image.flaticon.com/icons/png/512/60/60731.png"} position={"0 0 0.01"}  width={0.6} height={0.6} material={this.state.keys.includes("bed") ? "opacity: 1;" : "opacity: 0;"}/>
            </Plane>
        </Text>

    </Plane>
    }
}



export default VRFilter;
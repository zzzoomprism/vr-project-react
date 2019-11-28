import React from "react";
import {Box, Plane} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";

class RoomContent extends React.Component{
    render() {

    console.log(this.props.cameraRef);
        return (
            <Box width={"30"} height={"20"} depth={"40"} position={"-1 10 0"}
                 src={"https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                 material={"side: double; transparent: true; opacity: 0.5;"}>
                <Plane width={"30"} height={"40"} position={"0 -9.9 0"} rotation={"-90 0 0"}
                       src={"https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                       repeat={"4 1"} roughness={1}
                       events={{
                          //'click':
                       }}
                />
                <a-light type={"point"} position={"0 8 0"}/>
            </Box>
        )
    }
}

export default RoomContent;
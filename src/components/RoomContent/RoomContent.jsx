import React from "react";
import {Box, Plane, Sphere} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import ChooseColor from "./../../container/VRContent/ChooseColor";
import {modelLoading} from "./../../info";
import Floor from "./../../container/VRContent/Floor";

const RoomContent = (props) => {
    const info = modelLoading();
      const viewsModel = info.map((el) =>
        <Entity key={el.id}
                gltf-model={el.model}
                position={el.position} scale={el.scale} visible={el.visible}
            //animation={"property: position; to: " + this.props.position.x + " 0 " + this.props.position.z + "; dur: 2000; " }
                events={{
                    'click': () => {
                        console.log("HELO");
                    }
                }}
        >
        </Entity>
    );
        return (
            <Box width={"30"} height={"20"} depth={"40"} position={"-1 10 0"}
                 material={"side: double; transparent: true; opacity: 0.8; color: #3281a8;"}>
               <Floor/>
                {viewsModel}

                <a-light type={"point"} position={"0 8 0"}/>
            </Box>
        )
};

export default RoomContent;
import React from "react";
import {Box, Plane, Sphere} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import ChooseColor from "./../../container/VRContent/ChooseColor";
import info from "./../../info";

const RoomContent = (props) => {
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
                <Plane width={"30"} height={"40"} position={"0 -9.9 0"} rotation={"-90 0 0"}
                       src={"https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                       repeat={"4 1"} roughness={1}
                       material={"opacity: 0.8; color: " + props.color}
                       events={{
                           'mouseenter': () => {
                              let cursor = document.querySelector('a-cursor');
                              let point = cursor.components.raycaster.intersections[0].point;
                              console.log(cursor.components.raycaster);
                               props.floorMouseEnter(point);
                           },
                           'mouseleave': () => {
                               props.floorMouseLeave();
                           }
                       }} >
                </Plane>

                {viewsModel}
                <ChooseColor />
                <a-light type={"point"} position={"0 8 0"}/>
            </Box>
        )
};

export default RoomContent;
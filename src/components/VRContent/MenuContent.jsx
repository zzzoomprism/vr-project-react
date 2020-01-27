import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";

const MenuContent = (props) => {
        return (
          <Plane width={14} height={10} rotation="0 0 0" position={"1 6 -6"} material={"color: black; side: double"}>
              <Entity line="start: -3.5, -3.5, 0.01; end: -3.5 3.5 0.01; color: white"/>
                <Text value={"caroline"} rotation={"0 0 90"} wrap-count={10} position={"-4.3 -1.5 0.01"} />
                <Text value={"enter to the room"} wrap-count={15} negate={"false"} width={7}  height={2} position={"-2.5 2.0 0.02"} letter-spacing={15}
                      color={(props.menuId === "room") ? "coral" : "white"}
                      events={{
                          'mouseenter': () => {
                              props.menuMouseEnter("room");
                          },
                          'mouseleave': () => {
                              props.menuMouseLeave();
                          },
                          'click': () => {
                              props.menuClick("#/vr/vr-room");
                          }
                      }}>
                </Text>
                <Text value={"look collection"} wrap-count={15} negate={"false"} width={7} height={2}  position={"-2.5 -0.5 0.01"} letter-spacing={15}
                      color={(props.menuId === "collection") ? "coral" : "white"}
                      events={{
                          'mouseenter': () => {
                              props.menuMouseEnter("collection");

                          },
                          'mouseleave': () => {
                              props.menuMouseLeave();
                          }
                      }}/>
                      </Plane>
        );
};

export default MenuContent;
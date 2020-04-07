import React from 'react';
import {Plane, Text} from "react-aframe-ar";
import {Entity} from "aframe-react";

const MenuContent = (props) => {
        return (
          <Plane width={30} height={20} rotation="0 0 0" position={"1 0 -15"} material={"color: black; side: double"}>
              <Entity line="start: -10.5, -10.5, 0.01; end: -10.5 10.5 0.01; color: white"/>
                <Text value={"caroline."} rotation={"0 0 90"} wrap-count={10} position={"-12.3 -1.5 0.01"}/>
                <Text value={"look history of company"} wrap-count={20} negate={"false"} width={15}  height={5} position={"-7.5 4.0 0.02"} letter-spacing={15}
                      color={(props.menuId === "room") ? "coral" : "white"}
                      events={{
                          'mouseenter': () => {
                              props.menuMouseEnter("room");
                          },
                          'mouseleave': () => {
                              props.menuMouseLeave();
                          },
                          'click': () => {
                              props.menuClick("#/vr");
                          }
                      }}>
                </Text>
                <Text value={"look collection"} wrap-count={20} negate={"false"} width={15} height={2}  position={"-7.5 -2.5 0.01"} letter-spacing={15}
                      color={(props.menuId === "collection") ? "coral" : "white"}
                      events={{
                          'mouseenter': () => {
                              props.menuMouseEnter("collection");

                          },
                          'mouseleave': () => {
                              props.menuMouseLeave();
                          },
                          'click': () => {
                              props.menuClick("#/vr/vr-collection");
                          }
                      }}/>
                      <a-light type={"point"} intensity={"0.2"}/>
                      </Plane>
        );
};

export default MenuContent;
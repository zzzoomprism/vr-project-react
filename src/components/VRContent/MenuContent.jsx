import React from 'react';
import {Plane, Text} from "react-aframe-ar";
import {Entity} from "aframe-react";

const MenuContent = (props) => {
        return (
          <Plane width={30} height={20} rotation="0 0 0" position={"1 0 -15"} material={"color: black; side: double"}>
              <Entity line="start: -10.5, -10.5, 0.01; end: -10.5 10.5 0.01; color: white"/>
                <Text value={"caroline."} rotation={"0 0 90"} wrap-count={7} position={"-12.3 -1.5 0.01"}/>
                <Plane position={"1 4.0 0.02"} width={"21"} height={"5"} material={"side: double; color: white; emissive: white; opacity: 0.2;"}
                       events={{
                           'mouseenter': () => {
                               props.menuMouseEnter("room");
                               props.cursorChange("CHANGE_VR_PAGE", "#/vr", true);
                           },
                           'mouseleave': () => {
                               props.menuMouseLeave();
                               props.cursorChange("CHANGE_VR_PAGE", "", false);
                           }
                       }}
                >
                    <Text value={"look history of company"} wrap-count={20} negate={"false"} width={13}  height={5}  letter-spacing={15}
                          align={"center"}
                          color={(props.menuId === "room") ? "coral" : "white"}
                         >
                    </Text>
                </Plane>
                <Plane position={"1 -2.5 0.01"} width={"21"} height={"5"} material={"side: double; color: white; emissive: white; opacity: 0.2;"}
                       events={{
                           'mouseenter': () => {
                               props.menuMouseEnter("collection");
                               props.cursorChange("CHANGE_VR_PAGE", "#/vr/vr-collection", true);
                           },
                           'mouseleave': () => {
                               props.menuMouseLeave();
                               props.cursorChange("CHANGE_VR_PAGE", "", false);
                           }
                       }}
                >
                    <Text value={"look collection"} wrap-count={20} negate={"false"} width={13}  height={5}   letter-spacing={15} align={"center"}
                              color={(props.menuId === "collection") ? "coral" : "white"}
                             />
                </Plane>

                      <a-light type={"point"} intensity={"0.2"}/>
                      </Plane>
        );
};

export default MenuContent;
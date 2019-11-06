import React from 'react';
import {Entity, Text} from "react-aframe-ar";
import './../button';

class Menu extends React.Component{
    render() {
        return(
            <Entity button className={"menu"} scale="0 0 0" position={this.props.position}
                    events={{'click': this.props.click}} rotation={(this.props.rotation) ? this.props.rotation : "" }
                    visible={this.props.visible}
                    animation__scale={(this.props.visible) ? "property: scale; to: 1 1 1; dur: 500;" : "property: scale; to: 0 0 0; dur: 500;"}>
                <Text value={this.props.text} material={"color: white;"}
                      text={"side: double; align: center; negate: false;"} rotation={"0 -180 0"} position={"0 0 -0.35"}
                      events={{'click': this.props.click}}
                />
            </Entity>
        )
    };

}

export default Menu;
import React from "react";
import style from "./MenuObject.module.css";

class MenuObjects extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(<div>
            <div className={(this.props.open)? style.menuVisible : style.menuNoneVisible} >
                <ul>
                    <li>MAIN_MENU</li>
                    <li><a href={"/about-us"}>ABOUT_US</a></li>
                    <li> <a href={"/about-us"}>CONTACT_US</a></li>
                    <li> <a href={"/vr"}>PLAY_IN_VR</a></li>
                 </ul>
            </div>
            </div>
        )
    }
}

export default MenuObjects;
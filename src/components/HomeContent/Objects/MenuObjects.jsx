import React from "react";
import style from "./MenuObject.module.css";

class MenuObjects extends React.Component{
    render() {
        return(
            <div className={style.menu}>
                <ul>
                    <div>MAIN_MENU</div>
                    <div><a href={"/about-us"}>ABOUT_US</a></div>
                    <div> <a href={"/about-us"}>CONTACT_US</a></div>
                    <div> <a href={"/vr"}>PLAY_IN_VR</a></div>
    </ul>
            </div>
        )
    }
}

export default MenuObjects;
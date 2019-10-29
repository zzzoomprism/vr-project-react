import React from "react";
import style from "./HomeContent.module.css";
import MenuObject from "./Objects/MenuObjects";





class HomeContent extends React.Component{

    render() {
        return(
            <div className={style.home}>
                    <MenuObject/>
            </div>
        )
    }
}

export default HomeContent;
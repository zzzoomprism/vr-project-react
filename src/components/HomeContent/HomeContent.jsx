import React from "react";
import style from "./HomeContent.module.css";
import MenuObject from "./Objects/MenuObjects";
import Demonstrate from "./Demonstrate/Demonstrate";
import MenuButton from "./MenuButton/MenuButton";


class HomeContent extends React.Component{

    render() {
        return(
            <div className={style.home}>
                    <MenuButton/>
                   {/*<MenuObject/>*/}
                    <Demonstrate/>
            </div>
        )
    }
}

export default HomeContent;
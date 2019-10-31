import React from "react";
import style from "./HomeContent.module.css";
import MenuObject from "./Objects/MenuObjects";
import Demonstrate from "./Demonstrate/Demonstrate";
import MenuButton from "./MenuButton/MenuButton";
import Block from "./Block/Block";
import AdvBlock from "./AdvBlock/AdvBlock";


class HomeContent extends React.Component{

    render() {
        return(
            <div className={style.home}>
                    <MenuButton/>
                    <Demonstrate/>
                    <Block/>
                    <AdvBlock/>
            </div>
        )
    }
}

export default HomeContent;
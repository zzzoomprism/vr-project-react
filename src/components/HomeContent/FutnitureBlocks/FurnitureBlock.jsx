import React from "react";
import style from "./FurnitureBlock.module.css";

const FurnitureBlock = (props) => {
    return (
        <div className={style.furnitureBlocks} >

            <div className={style.smallFurnitureBlock} style={{top: 10 + props.top/2 + "%", left: 20 + props.left + "px"}}>
                <img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                     alt=""/>
                     <div></div>
            </div>
            <div className={style.firstFurnBlock} style={{top: 52 + props.top + "%", left: 7 + props.left + "%"}}>
                <img src="https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""/>
            </div>
            <div className={style.longFurnitureBlock} style={{top: 42 + props.top*2 + "%", left: 20 + props.left/1.2 + "%"}}>
                <img src="https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                     alt=""/>
            </div>
            <div className={style.bigFuniture} style={{top: props.top*10 + "px", left: 55 + props.left/2 + "%"}}>
                <img src="https://images.pexels.com/photos/1841143/pexels-photo-1841143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                     alt=""/>
            </div>

        <div className={style.blocks} onMouseMove={(event)=>props.updatePosition({x: event.clientX, y: event.clientY})}>
        </div>
        </div>
    )
};

export default FurnitureBlock;
import React from "react";
import style from "./Content.module.css";
import info from "./../../../info";
import Button from "./../Button/Button";

class Content extends React.Component{

    render() {
        const furnitureInfo = info.map((el) => {
            return  <div className={style.furnitureSection} key={el.id}>
                <div className={style.funitureImageContent}>
                    <img
                        src={el.image}
                        alt=""/>
                    <div className={style.furniturePrice}>
                        <h3>{el.price}</h3>
                    </div>
                </div>
                <div className={style.funitureInformationContent}>
                    <h3>{el.name}</h3>
                    <p><span>{el.description}</span>
                    </p>
                    <div>
                        <Button icon={"fas fa-shopping-cart"} btnId={el.id} content={"Add to card"}/>
                        <Button icon={"fas fa-vr-cardboard"} btnId={el.id} content={"Look at VR"}/>
                    </div>
                </div>
            </div>
        });
        return <div className={style.mainFurnitureBlock}>
            {furnitureInfo}
        </div>
    }
}

export default Content;
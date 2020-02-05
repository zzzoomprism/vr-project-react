import React from "react";
import {modelLoading} from "./../../../info";
import style from "./Furniture.module.css";


const Furniture = (props) => {
    const furniture = modelLoading();
    const info = furniture.find(item => item.id === props.match.params.id);
    console.log(info);
    return (
        <div className={style.mainFurnitureDescriptionBlock}>
            <div className={style.imageBlock}>
            <img src={info.image} alt="" />
            </div>
            <div className={style.descriptionBlock}>
                <div>
                    <h1>{info.name}</h1>
                    <p>{info.description}</p>
                </div>
                <div>

                </div>
            </div>
         </div>
    )
};

export default Furniture;

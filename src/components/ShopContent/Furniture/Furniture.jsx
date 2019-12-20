import React from "react";
import furniture from "./../../../info";
import style from "./Furniture.module.css";


const Furniture = (props) => {
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
                <table >
                    <thead>
                        <td>name</td>
                        <td>value</td>
                        <td>quality</td>
                    </thead>
                    <tbody>
                        <td>width</td>
                        <td>2000</td>
                        <td>mm</td>
                    </tbody>
                </table>
                </div>
            </div>
         </div>
    )
};

export default Furniture;

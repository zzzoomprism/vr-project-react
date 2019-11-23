import React from "react";
import style from "./Content.module.css";
import FurnitureBlock from "./../../../container/HomeContent/FurnitureBlocks";

const Content = (props) => {
    return(
        <div className={style.mainContentWrapper}>
            <FurnitureBlock/>

            <div className={style.infoBlock}>
                <p> <span><i className="fas fa-long-arrow-alt-left"></i></span> more than 20% discount </p>
                <h3>Dining room furniture on sale! <hr/></h3>
                <div>
                <a>Look!</a>
                </div>
            </div>
        </div>
    )
};

export default Content;
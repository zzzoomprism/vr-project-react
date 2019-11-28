import React from "react";
import style from "./TopMenu.module.css";

const TopMenu = (props) => {
    return <div className={style.topMenuMainBlock}>
        <div>
            <h3>filter</h3>
        </div>
        <div>
           <h3>cart</h3>
        </div>
        <div>
            <h3>profile</h3>
        </div>
    </div>
};

export default TopMenu;
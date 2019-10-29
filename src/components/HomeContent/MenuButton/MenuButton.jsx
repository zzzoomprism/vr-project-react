import React from "react";
import style from "./MenuButton.module.css"

class MenuButton extends React.Component{
    render() {
        return (
            <div className={style.menuButton}>
                <a><i className="fas fa-align-justify"></i></a>
            </div>
        );
    }
}

export default MenuButton;
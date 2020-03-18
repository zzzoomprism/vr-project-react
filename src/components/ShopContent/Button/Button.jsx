import React from "react";
import style from "./Button.module.css";

class Button extends React.Component{
    render() {
        return (
                <button id={this.props.btnId}
                        className={style.vrButton}
                        onClick={this.props.click}>
                            <span className={style.btnFlow}>
                            <i className={this.props.icon}></i></span>
                </button>
        );
    }
}

export default Button;
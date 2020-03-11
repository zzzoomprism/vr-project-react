import React from "react";
import style from "./Button.module.css";

class Button extends React.Component{
    // state={
    //     button: "",
    //     active: false,
    // };
    // handleMouseEnterButton(event){
    //     this.setState({button: event.target.id, active: true});
    // }
    // handleMouseLeaveButton(event){
    //     this.setState({button: "", active: false});
    // }
    render() {
        // let btnClassName = "";
        // if(this.state.button === this.props.btnId && this.state.active === true)
        //     btnClassName = style.btnDefault + " " +style.btnLeftSlowMotion;
        // else btnClassName = style.btnDefault + " " +style.btnCloseSlowMotion;
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
import React from "react";
import style from "./Button.module.css";

class Button extends React.Component{
    state={
        button: "",
        active: false,
    };
    handleMouseEnterButton(event){
        this.setState({button: event.target.id, active: true});
    }
    handleMouseLeaveButton(event){
        this.setState({button: "", active: false});
    }
    render() {
        return (
                <button id={this.props.btnId} onMouseEnter={this.handleMouseEnterButton.bind(this)}
                        className={(this.state.button === this.props.btnId && this.state.active === true) ? "btnLeftSlowMotion" : "btnCloseSlowMotion"}
                        onClick={this.props.click}
                        onMouseLeave={this.handleMouseLeaveButton.bind(this)}>
                            <span className={"btnFlow"}>
                            <i className={this.props.icon}></i>{this.props.content}</span>
                </button>
        );
    }
}

export default Button;
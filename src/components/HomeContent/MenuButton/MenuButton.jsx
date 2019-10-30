import React from "react";
import style from "./MenuButton.module.css"
import MenuObjects from "../Objects/MenuObjects";

class MenuButton extends React.Component{
    state={
        open: false
    };
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.setState({open: true});
    }
    render() {
        return (
            <div className={(this.state.open) ? style.menuContainerOpen : style.menuContainerClose}>
                <a className={style.iconMenuButton} onClick={this.handleOnClick}><i className="fas fa-align-justify"></i></a>
                <MenuObjects/>
            </div>
        );
    }
}

export default MenuButton;
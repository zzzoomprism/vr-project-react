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
        this.setState({open: !this.state.open});
    }
    render() {
        return (
            <div className={(this.state.open) ? style.menuContainerOpen : style.menuContainerClose}>
                <div>
                <a className={style.iconMenuButton} onClick={this.handleOnClick}><i className= {(this.state.open) ? "fas fa-times" : "fas fa-grip-lines"}></i></a>
                </div>
                <MenuObjects open={this.state.open}/>
            </div>
        );
    }
}

export default MenuButton;
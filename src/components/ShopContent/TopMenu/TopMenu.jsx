import React from "react";
import style from "./TopMenu.module.css";

class TopMenu extends React.Component{
    state = {
        open: false,
        height: "30px",
    };
    handleClickSortDown(){
        if(window.screen.availWidth <= 640){
            this.setState({open: true, height: "300px"})
        }
    }
    render() {
        return <div>
            <div className={style.topMenuMainBlock}>
                <div>
                    <ul className={style.filterBlock} >
                        <li onClick={this.handleClickSortDown.bind(this)}><i className="fas fa-sun"></i>Sort By:</li>
                        <li><i className="fas fa-bolt"></i>top</li>
                        <li><i className="fas fa-sort-amount-down"></i>price(exp)</li>
                        <li><i className="fas fa-sort-amount-down-alt"></i>price(down)</li>
                    </ul>
                </div>
                <div>
                    <h3><i className="fas fa-cart-plus"></i></h3>
                </div>
                <div>
                    <h3><i className="fas fa-user-circle"></i></h3>
                </div>
            </div>
            <hr/>
        </div>
    }
};

export default TopMenu;
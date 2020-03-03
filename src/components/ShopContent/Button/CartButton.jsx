import React from "react";
import style from "./CartButton.module.css";

class CartButton extends React.Component{
    state = {
        disable: false,
    };
    handleClick(){
        this.setState({disable: true});
        this.props.updateCartCount(this.props.item);
    }
    render() {
        let buttonActive = this.props.cartItems.includes(this.props.item);
        return (
            <button className={style.cartButton}
                    onClick={this.handleClick.bind(this)} disabled={this.state.disable}>
                    <span className={style.btnFlow}>
                            <i className={(this.state.disable) ? "fas fa-check" : "fas fa-shopping-cart"}></i></span>
            </button>
        );
    }
};

export default CartButton;
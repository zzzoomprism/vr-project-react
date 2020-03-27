import React from "react";
import style from "./CartButton.module.css";

const CartButton = (props) =>{
        let buttonActive = props.cartItems.includes(props.item);
        let cart_icon = <i className="fas fa-cart-plus"></i>;
        if(props.onLoad && !buttonActive)
            cart_icon = <div><div className={style.loader}></div><i className="fas fa-cart-plus" style={{opacity: "0"}}></i></div>
        else if(buttonActive)
            cart_icon = <i className="fas fa-check"></i>
        return (
            <button className={props.btnStyle}
                    onClick={()=>props.updateCartCount(props.item)} disabled={buttonActive}>
                        {cart_icon}
            </button>
        );
};

export default CartButton;
import React from "react";
import style from "./CartButton.module.css";

const CartButton = (props) =>{
        let buttonActive = props.cartItems.includes(props.item);
        let cart_icon = <i className="fas fa-cart-plus"></i>;
        if(props.onLoad && !buttonActive)
            cart_icon = <div className={style.loader}></div>
        else if(buttonActive)
            cart_icon = <i className="fas fa-check"></i>
        return (
            <button className={style.cartButton}
                    onClick={()=>props.updateCartCount(props.item)} disabled={buttonActive}>
                    <span className={style.btnFlow}>
                        {cart_icon}

                    </span>
            </button>
        );
};

export default CartButton;
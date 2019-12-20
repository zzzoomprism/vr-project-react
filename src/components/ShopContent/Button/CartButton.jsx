import React from "react";
import style from "./CartButton.module.css";

const CartButton = (props) => {
    let button = props.cartItems.includes(props.item);
    let btnClassName = "";
    if(props.buttonId === props.btnId && props.active === true)
       btnClassName = style.cartButton + " " +style.btnLeftSlowMotion;
    else btnClassName = style.cartButton + " " +style.btnCloseSlowMotion;
        return (
            <button onMouseEnter={(!button) ? () => props.mouseEnterButton(props.btnId) : " "}
                    className={btnClassName }
                    onMouseLeave={(!button) ? props.mouseLeaveButton : " "}
                    onClick={()=>props.updateCartCount(props.item)} disabled={button}>
                    <span className={style.btnFlow}>
                            <i className="fas fa-shopping-cart"></i>{(button) ? "ALREADY ADDED" : "ADD TO CART"}</span>
            </button>
        );
};

export default CartButton;
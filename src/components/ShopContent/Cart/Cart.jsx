import React from "react";
import style from "./Cart.module.css";

const Cart = (props) => {
    return(
        <div className={style.mainCartBlock}>
            <h3 onClick={props.cartToggle}><i className="fas fa-cart-plus"></i><span className={style.numberOfItems}>{props.cartCountItems}</span></h3>
            <ul className={style.cartList} style={{height: (props.isOpen) ? "300px" : "0px"}}>
                <li>First product</li>
                <li>Second Product</li>
            </ul>
        </div>

    )
};

export default Cart;
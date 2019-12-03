import React from "react";

const CartButton = (props) => {
    let button = props.cartItems.includes(props.item);
        return (
            <button onMouseEnter={() => props.mouseEnterButton(props.btnId)}
                    className={(props.buttonId === props.btnId && props.active === true) ? "btnLeftSlowMotion" : "btnCloseSlowMotion"}
                    onMouseLeave={props.mouseLeaveButton}
                    onClick={()=>props.updateCartCount(props.item)} disabled={button}>
                    <span className={"btnFlow"}>
                            <i className="fas fa-shopping-cart"></i>{(button) ? "ALREADY ADDED" : "ADD TO CART"}</span>
            </button>
        );
};

export default CartButton;
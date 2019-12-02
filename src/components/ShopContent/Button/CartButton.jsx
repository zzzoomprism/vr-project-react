import React from "react";


const CartButton = (props) => {
        return (
            <button onMouseEnter={() => props.updateStateOfButton(props.btnId)}
                    className={(props.buttonId === props.btnId && props.active === true) ? "btnLeftSlowMotion" : "btnCloseSlowMotion"}
                    onClick={props.updateCartCount}>
                    <span className={"btnFlow"}>
                            <i className="fas fa-shopping-cart"></i>ADD TO CART</span>
            </button>
        );
};

export default CartButton;
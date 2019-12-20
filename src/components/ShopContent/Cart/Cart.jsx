import React from "react";
import style from "./Cart.module.css";

const Cart = (props) => {
    let sum = 0;
           const item = props.cartItems.map(function(el){
               sum+=el.price;
              return <li key={el.id+"cart"}>
                   <img src={el.image} alt="" height={65}/>
                   {el.name}
               </li>
           }
);
           const stylish = {
               height: "300px",
               boxShadow: "0 0px 100px 600px rgba(0,0,0,0.6)"
           };
    return(
        <div className={style.mainCartBlock}>
            <h3 onClick={props.cartToggle}><i className="fas fa-cart-plus"></i><span className={style.numberOfItems}>{props.cartCountItems}</span></h3>
            <ul className={style.cartList} style={{height: (props.isOpen) ? stylish.height : "0px", boxShadow: (props.isOpen) ? stylish.boxShadow : ""}}>
                {(props.cartItems.length !== 0) ? item : "There are no products in your cart!"}
                <div>
                    <h3>TOTAL: <span>{sum}$</span></h3>
                </div>
            </ul>
        </div>

    )
};

export default Cart;
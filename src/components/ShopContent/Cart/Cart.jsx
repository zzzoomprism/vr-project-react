import React from "react";
import style from "./Cart.module.css";
import {Link} from "react-router-dom";

const Cart = (props) => {
    let sum = 0;
           const item = props.cartItems.map(function(el){
               sum+=el.price;
              return <li key={el.id+"cart"} className={style.furnitureInCart}>
                   <img src={el.image} alt="" />
                   <div className={style.cartDescriptionOfItem}>
                       <Link to={`/shop/${el.id}`}><h3>{el.name}</h3></Link>
               <p><span>{el.short_description}</span></p>
                       <p className={style.priceOfProduct}>{el.price + "$"}</p>
               </div>
               <input type="number" defaultValue={1} />
               <button className={style.btnDelete} onClick={()=>props.deleteItem(el)}><i className="fas fa-trash-alt"></i></button>
               </li>
           }
);
           const stylish = {
               height: "400px",
               boxShadow: "0 0px 100px 600px rgba(0,0,0,0.6)",
           };
    return(
        <div className={style.mainCartBlock}>
            <h3 onClick={props.cartToggle} title={"There are " + props.cartCountItems + " items in your cart!"}><i className="fas fa-cart-plus"></i><span className={style.numberOfItems}>{props.cartCountItems}</span></h3>
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
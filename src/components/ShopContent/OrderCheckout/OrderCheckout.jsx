import React from "react";
import style from "./OrderCheckout.module.css";
import ListOfCartItems from "../../../container/ShopContent/ListOfCartItems";
import ContactForm from "./../../../container/ShopContent/Form";

const OrderCheckout = (props) => {
    let cartItems = props.cartItems.map(el => <ListOfCartItems el={el}/>);

    return(<div className={"content"}>
        {(cartItems.length !== 0) &&  <div className={style.listOfOrder}>
            <ul>
                {cartItems}
            </ul>
        </div>}

        <div>
            <ContactForm/>
        </div>
        <hr/>
        <div className={style.totalPrice}>
            {<h3 className={"text-center"}>TOTAL: <span>{props.total_sum}$</span></h3>}
        </div>
    </div>)
};

export default OrderCheckout;
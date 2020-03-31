import React from "react";
import style from "./OrderCheckout.module.css";
import ListOfCartItems from "../../../container/ShopContent/ListOfCartItems";
import ContactForm from "./Form/Form";

const OrderCheckout = (props) => {
    let cartItems = props.cartItems.map(el => <ListOfCartItems el={el}/>);

    return(<div className={"content"}>
        {(cartItems.length !== 0) &&  <div className={style.listOfOrder}>
            <ul>
                {cartItems}
            </ul>
            <hr/>
            {<h3 className={"text-center"}>TOTAL: <span>{props.sum}$</span></h3>}
        </div>}

        <div>
            <ContactForm/>
        </div>
    </div>)
};

export default OrderCheckout;
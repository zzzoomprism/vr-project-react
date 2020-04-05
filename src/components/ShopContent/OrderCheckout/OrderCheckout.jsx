import React from "react";
import style from "./OrderCheckout.module.css";
import ListOfCartItems from "../../../container/ShopContent/ListOfCartItems";
import ContactForm from "./../../../container/ShopContent/Form";

const OrderCheckout = (props) => {
    let mapobject = Object.keys(props.other_cart).map(info => {
        const smth = props.other_cart[info];
        return <ListOfCartItems key={"listcartitems"} data={info} other_info={smth}/>
    });

    return(<div className={"content"}>
        {(mapobject.length !== 0) &&  <div className={style.listOfOrder}>
            <ul>
                {mapobject}
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
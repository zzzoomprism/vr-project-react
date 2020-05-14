import React, {useState, useEffect} from "react";
import style from "./OrderCheckout.module.css";
import ListOfCartItems from "../../../container/ShopContent/ListOfCartItems";
import ContactForm from "./../../../container/ShopContent/Form";

const OrderCheckout = (props) => {
    let mapobject = Object.keys(props.other_cart).map(info => {
        const smth = props.other_cart[info];
        return <ListOfCartItems key={"listcartitems"} data={info} other_info={smth}/>
    });
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        setTimeout(()=>setLoaded(true), 2000);
    }, []);
    return(<div className={"content"}>
        {!loaded && <div className={"loading"}><span>Loading...</span></div>}
        {(mapobject.length !== 0) &&  <div className={style.listOfOrder}>
            <ul>
                {mapobject}
            </ul>
        </div>}

        <div>
            <ContactForm price={props.total_sum}/>
        </div>
    </div>)
};

export default OrderCheckout;
import React from "react";
import style from "./ListOfCartItems.module.css";
import {Link} from "react-router-dom";

const ListOfCartItems = (props) => {
        return(
            <li key={props.el.id+"cart"} className={style.furnitureInCart}>
                <img src={props.el.image} alt="" />
                <div className={style.cartDescriptionOfItem}>
                    <Link to={`/shop/${props.el.id}`}><h3>{props.el.name}</h3></Link>
                    <p><span>{props.el.short_description}</span></p>
                    <p className={style.priceOfProduct}>{props.el.price + "$"}</p>
                </div>
                <div className={style.btnsArea}>
                    <input type="number" defaultValue={1} />
                    <button className={style.btnDelete} onClick={()=>props.deleteItem(props.el)}><i className="fas fa-trash-alt"></i></button>
                </div>
            </li>
        )
};



export default ListOfCartItems;
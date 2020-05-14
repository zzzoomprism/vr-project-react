import React, {useState, useEffect} from "react";
import style from "./ListOfCartItems.module.css";
import {Link} from "react-router-dom";
import * as api from "./../../../../info";



const ListOfCartItems = (props) => {

    console.log(props.data);
        let [item, setItem] = useState({});

        useEffect(()=>{
            api.get(props.data).then((result)=>{
                setItem(result);
            });
        }, [props.data]);

        return(
            <li key={item.id+"cart"} className={style.furnitureInCart}>
                <img src={item.image} alt="" />
                <div className={style.cartDescriptionOfItem}>
                    <Link to={`/shop/collection/${item.id}`}><h3>{item.name}</h3></Link>
                    <p><span>{item.short_description}</span></p>
                    <p className={style.priceOfProduct}>{item.price + "$"}</p>
                </div>
                <div className={style.btnsArea}>
                    <input type="number" defaultValue={1} value={props.other_info.count} onChange={(event)=>props.updateCountOfItem(item, event.target.value)}/>
                    <button className={style.btnDelete} onClick={()=>props.deleteItem(item, props.other_info.count)}><i className="fas fa-trash-alt"></i></button>
                </div>
            </li>
        )
};



export default ListOfCartItems;
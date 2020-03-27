import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import style from "./Cart.module.css";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

function useComponentVisible(initialState){
    const [isComponentVisible, setIsComponentVisible] = useState(initialState);
    const ref = useRef(null);
    const handleKeyClick = (event) => {
        if(event.key === "Escape"){
            setIsComponentVisible(false);
        }
    };
    const handleClickOutside = event => {
        if(ref.current && !ref.current.contains(event.target)){
            setIsComponentVisible(false);
            console.log(isComponentVisible);
        }
        console.log(isComponentVisible);
    };
    useEffect(()=> {
        document.addEventListener("keydown", handleKeyClick, false);
        document.addEventListener("click", handleClickOutside, false);
        return ()=>{
            document.removeEventListener("keydown", handleKeyClick, false);
            document.removeEventListener("click", handleClickOutside, false);
        }
    });
    return {ref, isComponentVisible, setIsComponentVisible};
}



const Cart = (props) => {
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
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
            <div>
                <div className={style.mainCartBlock} ref={ref}>
                    <h3 onClick={()=>setIsComponentVisible(!isComponentVisible)} title={"There are " + props.cartCountItems + " items in your cart!"}><i className="fas fa-cart-plus"></i><span className={style.numberOfItems}>{props.cartCountItems}</span></h3>
                    <div className={style.cartListMainDiv} style={{height: (isComponentVisible) ? stylish.height : "0px"}}>
                        {(props.cartItems.length === 0) && <h4>There are no products in your cart!</h4>}
                    <ul className={style.cartList} >
                        {item}
                    </ul>
                        <div className={style.footerOfCart}>
                            {(props.cartItems.length !== 0) && <h3>TOTAL: <span>{sum}$</span></h3>}
                            {(props.cartItems.length !== 0) && <button className={style.checkout}>checkout</button>}
                        </div>
                    </div>
                </div>
                <div className={style.blurDiv} style={{height: (isComponentVisible) ? "100vh" : "0px"}}/>
            </div>
        )
};

export default Cart;
import React, {useState, useEffect, useRef} from "react";
import style from "./Cart.module.css";
import {Link} from "react-router-dom";
import ListOfCartItems from "../../../container/ShopContent/ListOfCartItems";

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
        // const item = props.cartItems.map((el) => <ListOfCartItems key={"listcartitems" + el.id} el={el}/>);
        const stylish = {
            height: "400px",
            boxShadow: "0 0px 100px 600px rgba(0,0,0,0.6)",
        };
        let mapobject = Object.keys(props.other_cart).map(info => {
            const smth = props.other_cart[info];
            return <ListOfCartItems key={"listcartitems"} data={info} other_info={smth}/>
        });
        return(
            <div>
                <div className={style.mainCartBlock} ref={ref}>
                    <h3 onClick={()=>setIsComponentVisible(!isComponentVisible)} title={"There are " + props.cartCountItems + " items in your cart!"}><i className="fas fa-cart-plus"></i><span className={style.numberOfItems}>{props.cartCountItems}</span></h3>
                    <div className={style.cartListMainDiv} style={{height: (isComponentVisible) ? stylish.height : "0px"}}>
                        {(props.cartItems.length === 0) && <h4>There are no products in your cart!</h4>}
                    <ul className={style.cartList} >
                        {/*{item}*/}
                        {mapobject}
                    </ul>
                        <div className={style.footerOfCart}>
                            {(props.cartItems.length !== 0) && <h3>TOTAL: <span>{props.sum}$</span></h3>}
                            {(props.cartItems.length !== 0) && <Link to="/shop/checkout" className={"btn-black"}>checkout</Link>}
                        </div>

                    </div>
                </div>
                <div className={style.blurDiv} style={{height: (isComponentVisible) ? "100vh" : "0px"}}/>
            </div>
        )
};

export default Cart;
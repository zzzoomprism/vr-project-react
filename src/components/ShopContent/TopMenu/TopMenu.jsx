import React from "react";
import style from "./TopMenu.module.css";
import Cart from "./../../../container/ShopContent/Cart";

const TopMenu = (props) => {
    const showMenu = {
        show: {
            height: "200px",
        },
        hide:{
            height: "20px"
        }
    };
        return <div>
            <div className={style.topMenuMainBlock}>
                <div className={style.searchFilter} onClick={props.filterButtonToggle}>
                    <p ><i className="fas fa-filter"></i></p>
                </div>
                <div>
                    <ul className={style.filterBlock} style={(props.open) ? showMenu.show : showMenu.hide}>
                        <li onClick={props.sortByClick}><i className="fas fa-sun"></i>Sort By:</li>
                        <li onClick={props.sortTop} className={(props.sort === 'top') ? style.listActive : "" }><i className="fas fa-bolt"></i>top</li>
                        <li onClick={props.sortPriceDown}  className={(props.sort === 'price_down') ? style.listActive : "" }><i className="fas fa-sort-amount-down"></i>price(exp)</li>
                        <li onClick={props.sortPriceUp} className={(props.sort === 'price_up') ? style.listActive : "" }><i className="fas fa-sort-amount-down-alt"></i>price(down)</li>
                    </ul>
                </div>
                <div>
                        <Cart/>
                </div>

            </div>
            {/*<hr/>*/}
        </div>
};

export default TopMenu;
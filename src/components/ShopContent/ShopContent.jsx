import React from "react";
import SidebarMenu from "./../../container/HomeContent/SidebarMenu";
import Furniture from "./Furniture/Furniture";
import Content from "./../../container/ShopContent/Content";
import {HashRouter, Route, Switch} from "react-router-dom";
import Alert from "../../container/ShopContent/Alert";
import Footer from "./Footer/Footer";
import OrderCheckout from "./../../container/ShopContent/OrderCheckout";

const ShopContent = (props) =>{
    const ShopContent = () => (
        <Switch>
            <Route exact path={'/shop/collection'} component={Content}/>
            <Route exact path='/shop/checkout' component={OrderCheckout}/>
            <Route path={'/shop/collection/:id'} component={Furniture}/>
        </Switch>
    );
    return(
        <div>
            <SidebarMenu/>
            <Alert/>
            <HashRouter>
                <Switch>
                    <ShopContent/>
                </Switch>
            </HashRouter>
            <Footer/>
        </div>
    )
};

export default ShopContent;
import React from "react";
import SidebarMenu from "./../../container/HomeContent/SidebarMenu";
import Furniture from "./Furniture/Furniture";
import Content from "./../../container/ShopContent/Content";
import TopMenu from "./../../container/ShopContent/TopMenu";
import {HashRouter, Route, Switch} from "react-router-dom";
import HomeContent from "../HomeContent/HomeContent";
import VRContent from "../../container/VRContent/VRContent";
import Alert from "../../container/ShopContent/Alert";
import Footer from "./Footer/Footer";
import OrderCheckout from "./OrderCheckout/OrderCheckout";

const ShopContent = (props) =>{
    const ShopContent = () => (
        <Switch>
            <Route exact path={'/shop'} component={Content}/>
            <Route path={'/shop/:id'} component={Furniture}/>
            <Route path={'/shop/order-check-in'} component={OrderCheckout}/>
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
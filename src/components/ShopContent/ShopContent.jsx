import React from "react";
import SidebarMenu from "./../../container/HomeContent/SidebarMenu";
import Furniture from "./Furniture/Furniture";
import Content from "./../../container/ShopContent/Content";
import TopMenu from "./../../container/ShopContent/TopMenu";
import {Route, Switch} from "react-router-dom";

const ShopContent = (props) =>{

    return(
        <div>
            <SidebarMenu/>
            <TopMenu/>
            <Switch>
                <Route path={'/shop'} component={Content}/>
                <Route path={'/shop/:id'} component={Furniture}/>
            </Switch>
        </div>
    )
};

export default ShopContent;
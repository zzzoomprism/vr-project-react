import React from "react";
import SidebarMenu from "./../../container/HomeContent/SidebarMenu";
import Furniture from "./Furniture/Furniture";
import Content from "./../../container/ShopContent/Content";
import TopMenu from "./../../container/ShopContent/TopMenu";
import {HashRouter, Route, Switch} from "react-router-dom";
import HomeContent from "../HomeContent/HomeContent";
import VRContent from "../../container/VRContent/VRContent";

const ShopContent = (props) =>{
    const ShopContent = () => (
        <Switch>
            <Route exact path={'/shop'} component={Content}/>
            <Route path={'/shop/:id'} component={Furniture}/>
        </Switch>
    );
    return(
        <div>
            <SidebarMenu/>

            <HashRouter>
                <Switch>
                    <ShopContent/>
                </Switch>
            </HashRouter>
        </div>
    )
};

export default ShopContent;
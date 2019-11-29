import React from "react";
import SidebarMenu from "./../../container/HomeContent/SidebarMenu";
import Content from "./../../container/ShopContent/Content";
import TopMenu from "./../../container/ShopContent/TopMenu";

const ShopContent = (props) =>{
    return(
        <div>
            <SidebarMenu/>
            <TopMenu/>
            <Content/>
        </div>
    )
};

export default ShopContent;
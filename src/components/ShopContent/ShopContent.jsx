import React from "react";
import SidebarMenu from "./../../container/HomeContent/SidebarMenu";
import Content from "./Content/Content";
import TopMenu from "./TopMenu/TopMenu";

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
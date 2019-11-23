import React from "react";
import SidebarMenu from "./../../container/HomeContent/SidebarMenu";
import Content from "./Content/Content";

const HomeContent = (props) => {
    return(
        <div>
            <SidebarMenu/>
            <Content/>
        </div>
    )
};

export default HomeContent;
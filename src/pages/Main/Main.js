import React from "react";

import ContentTabs from "../../components/ContentTabs/ContentTabs";
import Content from "../../components/Content/Content";
import BannerSlider from "../../components/BannerSlider"

export default function Main() {
    return (
        <div>
            <BannerSlider/>
            <ContentTabs />
            <Content />
        </div>
    );
}
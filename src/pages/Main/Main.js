import React from "react";

// import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ContentTabs from "../../components/ContentTabs/ContentTabs";
import Content from "../../components/Content/Content";
import BannerSlider from "../../components/BannerSlider"

export default function Main() {
    return (
        <div>
            <BannerSlider/>
            {/* <ImageSlider /> */}
            <ContentTabs />
            <Content />
        </div>
    );
}
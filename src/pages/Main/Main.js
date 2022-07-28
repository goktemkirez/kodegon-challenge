import React from "react";

import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ContentTabs from "../../components/ContentTabs/ContentTabs";
import Content from "../../components/Content/Content";

export default function Main() {
    return (
        <div>
            <ImageSlider />
            <ContentTabs />
            <Content />
        </div>
    );
}
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Box} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useStyles } from "./ImageSlider.style";

const images = [
  { url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752" },
  { url: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" },
  { url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0%2C235%2C4000%2C2200&wid=4000&hei=2200&scl=1.0" },
];

const ImageSlider = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return <Box className={classes.imageSliderDiv}>
    <SimpleImageSlider
      width="100%"
      height={isMobile ? 450 : 600}
      images={images}
      showBullets={true}
      showNavs={true}
    />
    
  </Box>;
};

export default ImageSlider;

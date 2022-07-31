import { useState, useEffect } from 'react';
import { West, East, CropSquareSharp } from '@mui/icons-material';
import useMediaQuery from "@mui/material/useMediaQuery";

import "./BannerSlider.scss";

const images = [
    { url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752" },
    { url: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" },
    { url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0%2C235%2C4000%2C2200&wid=4000&hei=2200&scl=1.0" },
];

const BannerSlider = () => {
    //slider state
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = images.length;
    const isMobile = useMediaQuery('(max-width:600px)');

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    const handleClick = (event, index) => {
        setCurrentSlide(index)
      };

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="slider">
            <div className='arrowDiv'>
                <hr />
                <West sx={isMobile ? {display:'none'}: {display:'block'}} className='arrow prev' fontSize='large' onClick={prevSlide} />
                <East sx={isMobile ? {display:'none'}: {display:'block'}} className='arrow next' fontSize='large' onClick={nextSlide} />
                {images.map((image, index) => (
                    <CropSquareSharp
                        className={index === currentSlide ? "imageNav selected" : "imageNav"}
                        fontSize={isMobile ? 'small' : 'small'}
                        key={index}
                        onClick={event => handleClick(event, index)} />
                ))}
            </div>

            {images.map((slide, index) => {
                return (
                    <div
                        className={index === currentSlide ? "slide current" : "slide"}
                        key={index}
                    >
                        {index === currentSlide && (
                            <div>
                                <img src={slide.url} alt="slide" className="image" />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default BannerSlider
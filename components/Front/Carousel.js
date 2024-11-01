import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Carousel2 } from 'react-responsive-carousel';


const Carousel = () => {
    return (
        <Carousel2 showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src="https://lpmedia.redcliffelabs.com/Diwali_Website_Banner_2_1_fb1203451a.webp" />
            </div>
            <div>
                <img src="https://lpmedia.redcliffelabs.com/Diwali_Website_Banner_2_1_fb1203451a.webp" />
            </div>
            <div>
                <img src="https://lpmedia.redcliffelabs.com/Diwali_Website_Banner_2_1_fb1203451a.webp" />
            </div>
        </Carousel2>
    );

}

export default Carousel

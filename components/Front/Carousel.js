import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Carousel2 } from 'react-responsive-carousel';


const Carousel = () => {
    return (
        <Carousel2 showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src="/images/gallery/1.jpeg" />
            </div>
            <div>
                <img src="/images/gallery/1.jpeg" />
            </div>
            <div>
                <img src="/images/gallery/1.jpeg" />
            </div>
        </Carousel2>
    );

}

export default Carousel

import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Carousel2 } from 'react-responsive-carousel';
import apiService from 'services/apiService'


const Carousel =  () => {
    const [banner, setBanner] = useState([])
    useEffect(() => {
    const getBanner = async ()=>{
    const bannerRes = await apiService.getActiveBanner();
    setBanner(bannerRes)
    }
    getBanner();
    }, [])
    
    return (
        <Carousel2 showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} itemsToShow={2}>
            {banner?.map((value, index)=>{
            return ( <div>
                <img src={value.image_url} className='img-fluid' style={{ maxHeight:'450px', objectFit:'cover',overflow:'hidden' }}/>
            </div> )
            })}
        </Carousel2>
    );

}

export default Carousel

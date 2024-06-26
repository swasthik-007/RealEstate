import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json"
import { sliderSettings } from "../../utils/common";
// import PropertyCard from "../PropertyCard/PropertyCard";
// import useProperties from "../../hooks/useProperties";
// import { PuffLoader } from 'react-spinners'

const Residencies = () => {

    //     const { data, isError, isLoading } = useProperties()

    //     if (isError) {
    //         return (
    //             <div className='wrapper'>
    //                 <span>Error while fetching data</span>
    //             </div>
    //         )
    //     }

    //     if (isLoading) {
    //         return (
    //             <div className="wrapper flexCenter" style={{ height: "60vh" }}>
    //                 <PuffLoader
    //                     height="80"
    //                     width="80"
    //                     radius={1}
    //                     color="#4066ff"
    //                     aria-label="puff-loading"
    //                 />
    //             </div>
    //         )
    //     }


    return (
        <section id="residencies" className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className=" r-head flexColStart ">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>


                <Swiper {...sliderSettings}>
                    <SlideNextButton />
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </section>
    );
};

export default Residencies;

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()} className="r-prevButton">
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()} className="r-nextButton">
                &gt;
            </button>
        </div>
    );
};   
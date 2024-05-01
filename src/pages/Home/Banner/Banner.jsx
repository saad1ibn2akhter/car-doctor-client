import React from 'react';
import p1 from '../../../assets/images/banner/1.jpg';
import p2 from '../../../assets/images/banner/2.jpg';
import p3 from '../../../assets/images/banner/3.jpg';
import p4 from '../../../assets/images/banner/4.jpg';
import p5 from '../../../assets/images/banner/5.jpg';


const Banner = () => {
    return (
        
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={p1} className="w-full" />
                    <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={p2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <img src={p3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <img src={p4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        
    );
};

export default Banner;
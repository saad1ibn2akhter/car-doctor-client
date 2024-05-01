import React from 'react';
import p1 from '../../../assets/images/banner/1.jpg';
import p2 from '../../../assets/images/banner/2.jpg';
import p3 from '../../../assets/images/banner/3.jpg';
import p4 from '../../../assets/images/banner/4.jpg';
import p5 from '../../../assets/images/banner/5.jpg';


const Banner = () => {
    return (

        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={p1} className="w-full" />
                <div className="absolute flex justify-start items-center px-4 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] space-x-5  left-0 top-0 right-5 bottom-0 ">
                    <div className='text-white font-bold text-start space-y-4'>
                        <h2 className='text-6xl w-1/2'>Affordable car price for car servicing</h2>
                        <p className='font-normal w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae perferendis nam praesentium dicta. Aspernatur eos non sed aliquid ipsa?</p>
                        <div className='flex space-x-6'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
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
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

import listComic from '~/assect/comic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from 'react';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function Slide() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className="bao" />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Truyện đề cử:</div>
            <div className={cx('slider')}>
                <div className={cx('slider_grid')}>
                    <Slider {...settings}>
                        {listComic.map((item, index) => {
                            return (
                                <div className={cx('item')} key={index}>
                                    <a href={item.link}>
                                        <div className={cx('grid')}>
                                            {/* <img className={cx('img')} src={item.img} alt=""></img> */}
                                            <div
                                                className={cx('img')}
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            ></div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Slide;

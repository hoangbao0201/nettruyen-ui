import React, { Component } from 'react';
import Slider from 'react-slick';

import styles from './SlideMain.module.scss';
import classNames from 'classnames/bind';
import listComic from '~/assect/comic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faClock } from '@fortawesome/free-solid-svg-icons';

import './main.css';

const cx = classNames.bind(styles);

function SlideMain() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        speed: 300,
        nextArrow: (
            <button>
                <div className={cx('btn-slider')}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </button>
        ),
        prevArrow: (
            <button>
                <div className={cx('btn-slider')}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </button>
        ),
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-sl')}>
                <Slider {...settings}>
                    {listComic.map((item, index) => {
                        return (
                            <div className={cx('item-sl')} key={index}>
                                <div className={cx('grid-sl')}>
                                    <a href={item.link}>
                                        <img className={cx('img-sl')} src={item.img} alt=""></img>
                                        <div className={cx('box-sl')}>
                                            <div className={cx('title-sl')}>{item.name}</div>
                                            <div className={cx('text-bottom')}>
                                                <span className={cx('chapterNew')}>Chapter {item.chapterNew}</span>
                                                <span className={cx('timeNew')}>
                                                    {' '}
                                                    <FontAwesomeIcon icon={faClock} /> {item.timeNew}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default SlideMain;

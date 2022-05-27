import React from 'react';
import Slider from 'react-slick';

import styles from './SlideMain.module.scss';
import classNames from 'classnames/bind';
import listComic from '~/assect/listComic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faClock } from '@fortawesome/free-solid-svg-icons';

import './main.css';

const cx = classNames.bind(styles);

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <div className={cx('btn-slider')}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </div>
    </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')}
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        <div className={cx('btn-slider')}>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    </button>
);

function SlideMain() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        speed: 300,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        // nextArrow: (
        //     <button>
        //         <div className={cx('btn-slider')}>
        //             <FontAwesomeIcon icon={faAngleRight} />
        //         </div>
        //     </button>
        // ),
        // prevArrow: (
        //     <button>
        //         <div className={cx('btn-slider')}>
        //             <FontAwesomeIcon icon={faAngleLeft} />
        //         </div>
        //     </button>
        // ),
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

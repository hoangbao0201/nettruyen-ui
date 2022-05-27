import classNames from 'classnames/bind';
import styles from './Slide.module.scss';

import SlideMain from './SliderMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slide() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Truyện đề cử </span>
                <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                </i>
            </div>
            <SlideMain />
        </div>
    );
}

export default Slide;

import Sidebar from '~/components/Layout/conponents/Sidebar';
import Slide from '~/components/Layout/conponents/Slide';

import styles from './Boy.module.scss';
import classNames from 'classnames/bind';
import Content from '~/components/Layout/conponents/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Title from '~/components/Title';

const cx = classNames.bind(styles);

function Boy() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Slide />
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Title>Truyện con trai</Title>
                    <Content />
                </div>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Boy;

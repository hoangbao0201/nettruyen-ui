import Sidebar from '~/components/Layout/conponents/Sidebar';
import Slide from '~/components/Layout/conponents/Slide';

import styles from './Girl.module.scss';
import classNames from 'classnames/bind';
import Content from '~/components/Layout/conponents/Content';
import Title from '~/components/Title';

const cx = classNames.bind(styles);

function Girl() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Slide />
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Title>Truyện con gái</Title>
                    <Content />
                </div>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Girl;

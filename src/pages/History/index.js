import Sidebar from '~/components/Layout/conponents/Sidebar';

import styles from './History.module.scss';
import classNames from 'classnames/bind';
import Content from '~/components/Layout/conponents/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Title from '~/components/Title';

const cx = classNames.bind(styles);

function History() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Title>Lịch sử đọc truyện</Title>
                    <Content />
                </div>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default History;

import Sidebar from '~/components/Layout/conponents/Sidebar';
import Slide from '~/components/Layout/conponents/Slide';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Content from '~/components/Layout/conponents/Content';
import Title from '~/components/Title';
import Pagination from '~/components/Layout/conponents/Pagination';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Slide />
            </div>
            <div className={cx('container')}>
                <div className={cx('content', 'col-sm-8')}>
                    <Title>Truyện mới cập nhật</Title>
                    <Content />
                    <Pagination />
                </div>
                <div className={cx('sidebar', 'col-sm-4')}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Home;

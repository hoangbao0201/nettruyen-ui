import Sidebar from '~/components/Layout/conponents/Sidebar';
import Slide from '~/components/Layout/conponents/Slide';

import styles from './Hot.module.scss';
import classNames from 'classnames/bind';
import Content from '~/components/Layout/conponents/Content';
import Title from '~/components/Title';
import Pagination from '~/components/Layout/conponents/Pagination';
import SideRank from '~/components/Layout/conponents/Sidebar/SideRank';
// import SideComment from '~/components/Layout/conponents/Sidebar/SideComment';

const cx = classNames.bind(styles);

function Hot() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Slide />
            </div>
            <div className={cx('container')}>
                <div className={cx('content', 'col-sm-8')}>
                    <Title>Truyện hot nhất</Title>
                    <Content />
                    <Pagination />
                </div>
                <div className={cx('sidebar', 'col-sm-4')}>
                    <Sidebar>
                        <SideRank />
                    </Sidebar>
                </div>
            </div>
        </div>
    );
}

export default Hot;

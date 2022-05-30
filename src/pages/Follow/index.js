import Sidebar from '~/components/Layout/conponents/Sidebar';

import styles from './Follow.module.scss';
import classNames from 'classnames/bind';
import Content from '~/components/Layout/conponents/Content';
import Pagination from '~/components/Layout/conponents/Pagination';
import SideRank from '~/components/Layout/conponents/Sidebar/SideRank';

const cx = classNames.bind(styles);

function Follow() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content', 'col-sm-8')}>
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

export default Follow;

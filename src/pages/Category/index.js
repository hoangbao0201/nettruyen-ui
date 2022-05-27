import Sidebar from '~/components/Layout/conponents/Sidebar';
import Slide from '~/components/Layout/conponents/Slide';

import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import Content from '~/components/Layout/conponents/Content';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Slide />
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Content />
                </div>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Category;

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/conponents/Header';
import Footer from '~/components/Layout/conponents/Footer';

import classNames from 'classnames/bind';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

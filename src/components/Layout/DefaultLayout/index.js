import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/conponents/Header';
import Footer from '~/components/Layout/conponents/Footer';

import classNames from 'classnames/bind';
import Navbar from '~/components/Layout/conponents/Navbar';
import Space from '../conponents/Space';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Space />
            <Navbar />
            {/* <Warning /> */}
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

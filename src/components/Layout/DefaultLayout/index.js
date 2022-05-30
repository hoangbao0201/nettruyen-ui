import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/conponents/Header';
import Footer from '~/components/Layout/conponents/Footer';

import classNames from 'classnames/bind';
import Navbar from '~/components/Layout/conponents/Navbar';
// import Warning from '~/components/Layout/conponents/Warning';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navbar />
            {/* <Warning /> */}
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/conponents/Header';
import Footer from '~/components/Layout/conponents/Footer';

import classNames from 'classnames/bind';
import Navbar from '~/components/Layout/conponents/Navbar';
import { useState } from 'react';
// import Warning from '~/components/Layout/conponents/Warning';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [visible, setVisible] = useState(true);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled >= 50) {
            setVisible(false);
        } else if (scrolled < 50) {
            setVisible(true);
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div
                className={cx('space')}
                style={{ height: visible ? '0px' : '50px', top: visible ? null : '0px' }}
            ></div>
            <Navbar />
            {/* <Warning /> */}
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

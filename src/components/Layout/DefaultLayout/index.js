import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/conponents/Header';

import classNames from 'classnames/bind';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;

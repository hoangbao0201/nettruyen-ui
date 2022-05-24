import styles from './Header.module.scss';
import images from '~/assect/images';
import Seach from '~/pages/Seach';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from '~/components/Layout/conponents/Navbar';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <a href="/" className={cx('logo')}>
                        <img src={images.logo} alt="Nettruyen" />
                    </a>
                    <Seach />
                    <div className={cx('grid-accout')}>
                        <img
                            className={cx('pic-user')}
                            alt=""
                            src="//st.nettruyenco.com/data/sites/1/useravatars/439528.jpg?v=2737"
                        ></img>
                        <span>
                            Cá nhân <FontAwesomeIcon className={cx('icon-down')} icon={faSortDown} />
                        </span>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Header;

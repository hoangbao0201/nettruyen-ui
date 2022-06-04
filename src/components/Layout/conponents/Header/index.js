import styles from './Header.module.scss';
import images from '~/assect/images';
import SearchHeader from '../SearchHeader';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleNavbar from '~/components/ToggleNavbar';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/" className={cx('logo')}>
                    <img src={images.logo} alt="Nettruyen" />
                </a>
                <SearchHeader />
                <div className={cx('grid-accout')}>
                    <Tippy
                        interactive
                        delay={[0, 700]}
                        offset={[12, 8]}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <div>nugyenhoagnbao</div>
                            </div>
                        )}
                    >
                        <div className={cx('user-accout')}>
                            <img
                                className={cx('pic-user')}
                                alt=""
                                src="//st.nettruyenco.com/data/sites/1/useravatars/439528.jpg?v=2737"
                            ></img>
                            <span>
                                Cá nhân <FontAwesomeIcon className={cx('icon-down')} icon={faSortDown} />
                            </span>
                        </div>
                    </Tippy>
                </div>
                <ToggleNavbar />
            </div>
        </div>
    );
}

export default Header;

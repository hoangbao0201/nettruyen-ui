import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Warning.module.scss';

const cx = classNames.bind(styles);

function Warning() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                </div>
                <div className={cx('title')}>
                    <a className={cx('link')} href="">
                        Nhấn vào đây
                    </a>
                    <span className={cx('text')}> để lấy lại tài khoản đăng nhập và truyện đã theo dõi</span>
                </div>
            </div>
        </div>
    );
}

export default Warning;

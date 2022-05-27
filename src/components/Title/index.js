import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ children }) {
    return (
        <div className={cx('title')}>
            {children}{' '}
            <i>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </i>
        </div>
    );
}

export default Title;

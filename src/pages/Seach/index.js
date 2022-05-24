import Button from '~/components/Button';
import styles from './Seach.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Seach() {
    return (
        <div className={cx('wrapper')}>
            <input placeholder="Tìm truyện..." className={cx('input-search')} />
            <span className={cx('icon-load')}>
                <FontAwesomeIcon icon={faSpinner} />
            </span>
            <Button primary>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </div>
    );
}

export default Seach;

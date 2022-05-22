import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Seach.module.scss';

const cx = classNames.bind(styles);

function Seach() {
    return (
        <div className={cx('wrapper')}>
            <input placeholder="Tìm truyện..." className={cx('input-search')} />
            <Button small>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </div>
    );
}

export default Seach;

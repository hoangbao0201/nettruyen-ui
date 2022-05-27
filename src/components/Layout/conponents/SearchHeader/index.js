import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './SearchHeader.module.scss';

const cx = classNames.bind(styles);

function SearchHeader() {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('inputHeader')} placeholder="Tìm truyện..."></input>
            <Button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </div>
    );
}

export default SearchHeader;

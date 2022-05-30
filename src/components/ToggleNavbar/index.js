import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ToggleNavbar.module.scss';

import './main.css';

const cx = classNames.bind(styles);

function ToggleNavbar() {
    const handleBtnToggle = () => {
        var element = document.getElementById('myDIV');
        element.classList.toggle('mystyle');
    };

    return (
        <div className={cx('wrapper')}>
            <button onClick={handleBtnToggle} className={cx('inner')}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div id="myDIV" className={cx('modal')}></div>
        </div>
    );
}

export default ToggleNavbar;

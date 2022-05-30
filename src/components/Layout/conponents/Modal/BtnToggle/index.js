import classNames from 'classnames/bind';
import styles from './BtnToggle.module.scss';

const cx = classNames.bind(styles);

function BtnToggle() {
    return <div className={cx('wrapper')}></div>;
}

export default BtnToggle;

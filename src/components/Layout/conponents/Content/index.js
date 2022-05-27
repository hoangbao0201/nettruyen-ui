import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return <div className={cx('wrapper')}>Content</div>;
}

export default Content;

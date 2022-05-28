import classNames from 'classnames/bind';
import listPages from '~/assect/listPages';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('grid')}>
                {listPages.map((page, index) => {
                    return (
                        <li className={cx('item')} key={index}>
                            <a className={cx('link')} href={page.href}>
                                {page.indexPage}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Pagination;

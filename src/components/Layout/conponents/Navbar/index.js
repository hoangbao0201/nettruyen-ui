import styles from './Navbar.module.scss';

import classNames from 'classnames/bind';

import CategoryNavDown from './Category';
import { categoryItems as listItems } from '~/assect/navbar/category';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('list-item')}>
                    {listItems.map((item, index) => {
                        return (
                            <>
                                <li key={index} className={cx('item')}>
                                    <div className={cx('grid')}>
                                        <a className={cx('link')} href={item.href}>
                                            {item.title}
                                            {item.fontIcon}
                                        </a>
                                        <ul className={cx('navDown')}>
                                            {item.list && <CategoryNavDown itemData={item.list} />}
                                        </ul>
                                    </div>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

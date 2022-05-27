import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { categoryItems as listItems } from '~/assect/items/category';
import DropDown from '~/components/DropDown';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('list-item')}>
                    {listItems.map((item, index) => {
                        return (
                            <li key={index} className={cx('item')}>
                                <Link className={cx('link')} to={item.href}>
                                    {item.title}
                                    {item.fontIcon}
                                </Link>
                                <div className={cx('dropdown')}>
                                    {item.listCategory && (
                                        <DropDown itemData={item.listCategory} className="category" />
                                    )}
                                    {item.listRank && <DropDown itemData={item.listRank} className="rank" />}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

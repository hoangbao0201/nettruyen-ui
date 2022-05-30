import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { categoryItems as listItems } from '~/assect/items/category';
import DropDown from '~/components/DropDown';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Navbar() {
    const [visible, setVisible] = useState(true);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled >= 50) {
            setVisible(false);
        } else if (scrolled < 50) {
            setVisible(true);
        }
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div
            className={cx('wrapper')}
            style={{ position: visible ? 'relative' : 'fixed', top: visible ? null : '0px' }}
        >
            <div className={cx('inner')}>
                <ul className={cx('list-item')}>
                    {listItems.map((item, index) => {
                        return (
                            <li key={index} className={cx('item', `item-${index}`)}>
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

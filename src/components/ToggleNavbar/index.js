import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ToggleNavbar.module.scss';

import './main.css';
import listItems from '~/assect/items/category/category';
import { Link } from 'react-router-dom';
import DropDown from '../DropDown';
import SearchHeader from '../Layout/conponents/SearchHeader';

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
            <div id="myDIV" className={cx('modal')}>
                <SearchHeader className="presently" />
                <ul className={cx('list-item')}>
                    {listItems.map((item, index) => {
                        return (
                            <li key={index} className={cx('item', `item-${index}`)}>
                                <a className={cx('link')} href={item.href}>
                                    {item.title}
                                </a>
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

export default ToggleNavbar;

import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './DropDown.module.scss';

const cx = classNames.bind(styles);

function DropDown({ itemData, className }) {
    const setGrid = className + 'SetGrid';
    const setRow = className + 'SetRow';

    const [couter, setCouter] = useState('');

    const handleHover = (dataTitle) => {
        setCouter(dataTitle);
    };

    return (
        <div className={cx('wrapper', setGrid)}>
            {itemData.map((items, index) => {
                return (
                    <div className={cx('list-row', setRow)} key={index}>
                        {items.map((item, index) => {
                            return (
                                <div
                                    onMouseOver={() => handleHover(item.dataTitle)}
                                    onMouseOut={() => setCouter('')}
                                    data-title="bao"
                                    className={cx('item', 'hoverItem')}
                                    key={index}
                                >
                                    <a data-title={item.more} className={cx('link')} href={item.href}>
                                        {item.icon && <i className={cx('icon')}>{item.icon}</i>}
                                        <span className={cx('title')}>{item.title}</span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
            {className === 'category' && couter !== '' && (
                <div className={cx('styleData')}>
                    <div>{couter}</div>
                </div>
            )}
        </div>
    );
}

export default DropDown;

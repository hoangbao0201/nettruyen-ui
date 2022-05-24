import styles from './Category.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CategoryNavDown({ itemData }) {
    return (
        <div className={cx('wrapper')}>
            {itemData.map((items, index) => {
                return (
                    <div className={cx('list-row')} key={index}>
                        {items.map((item, index) => {
                            return (
                                <li className={cx('item')} key={index}>
                                    <a className={cx('link')} href={item.href}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default CategoryNavDown;

import classNames from 'classnames/bind';
import listComic from '~/assect/listComic';
import ItemContent from '~/components/ItemContent';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            {listComic.map((item, index) => {
                return (
                    <div className={cx('item')} key={index}>
                        <ItemContent item={item} />
                    </div>
                );
            })}
        </div>
    );
}

export default Content;

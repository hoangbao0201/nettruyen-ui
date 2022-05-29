import { faComment, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import CommicHot from '../CommicHot';
import ItemChapter from './ItemChapter';
import styles from './ItemContent.module.scss';

const cx = classNames.bind(styles);

function ItemContent({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid-image')}>
                {item.hot && <CommicHot />}
                <Link to={item.link} className={cx('link-img')}>
                    <img className={cx('img')} src={item.img} alt=""></img>
                    <div className={cx('box-bottom')}>
                        <div className={cx('box-bottom-text')}>
                            <i>
                                <FontAwesomeIcon icon={faEye} />
                            </i>
                            {item.view}
                            <i>
                                <FontAwesomeIcon icon={faHeart} />
                            </i>
                            {item.heart}
                            <i>
                                <FontAwesomeIcon icon={faComment} />
                            </i>
                            {item.comment}
                        </div>
                    </div>
                </Link>
            </div>
            <div className={cx('box-list-chap')}>
                <Link className={cx('name-link')} to={item.link}>
                    {item.name}
                </Link>
                <ItemChapter newChap={item.chapterNew} />
            </div>
        </div>
    );
}

export default ItemContent;

import styles from './Content.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus, faRss, faTags, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Content({ comic }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <div className={cx('name')}>{comic.name}</div>
                <div className={cx('UpdateTime')}>Cập nhật lúc: {comic.timeNewUpdate}</div>
            </div>
            <div className={cx('info')}>
                <div className={cx('grid-img', 'col-sm-4')}>
                    <img src={comic.img} alt=""></img>
                </div>
                <div className={cx('box-right', 'col-sm-8')}>
                    <div className={cx('detail')}>
                        <div className={cx('col-sm-4')}>
                            <FontAwesomeIcon icon={faPlus} /> Tên Khác
                        </div>
                        <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                    </div>
                    <div className={cx('detail')}>
                        <div className={cx('col-sm-4')}>
                            <FontAwesomeIcon icon={faUser} /> Tác giả
                        </div>
                        <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                    </div>
                    <div className={cx('detail')}>
                        <div className={cx('col-sm-4')}>
                            <FontAwesomeIcon icon={faRss} /> Tình trạng
                        </div>
                        <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                    </div>
                    <div className={cx('detail')}>
                        <div className={cx('col-sm-4')}>
                            <FontAwesomeIcon icon={faTags} /> Thể loại
                        </div>
                        <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                    </div>
                    <div className={cx('detail')}>
                        <div className={cx('col-sm-4')}>
                            <FontAwesomeIcon icon={faEye} /> Lượt xem
                        </div>
                        <div>{comic.view}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;

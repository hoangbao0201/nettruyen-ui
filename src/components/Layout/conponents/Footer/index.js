import images from '~/assect/images';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Button from '~/components/Button';

import '~/components/GlobalStyles/index';

const cx = classNames.bind(styles);

const listTitle = [
    {
        title: 'Truyện tranh',
    },
    {
        title: 'Truyen tranh online',
    },
    {
        title: 'Đọc truyện tranh',
    },
    {
        title: 'Truyện tranh hot',
    },
    {
        title: 'Truyện tranh hot',
    },
    {
        title: 'Truyện tranh hay',
    },
    {
        title: 'Truyện ngôn tình',
    },
    {
        title: 'truyenqq',
    },
    {
        title: 'mi2manga',
    },
    {
        title: 'doctruyen3q',
    },
    {
        title: 'cmanga',
    },
    {
        title: 'vlogtruyen',
    },
    {
        title: 'blogtruyen',
    },
    {
        title: 'saytruyen',
    },
    {
        title: 'dinhtruyen',
    },
    {
        title: 'truyentranhaudio',
    },
    {
        title: 'hamtruyen',
    },
    {
        title: 'truyensieuhay',
    },
    {
        title: 'vcomi',
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('data', 'col-sm-4')}>
                    <a href="/" className={cx('logo')}>
                        <img src={images.logo} alt="Nettruyen" />
                    </a>
                    <div></div>
                    <div>
                        <span>Copyright © 2022 NetTruyen</span>
                    </div>
                </div>
                <div className={cx('list-category', 'col-sm-8')}>
                    <div className={cx('title')}>
                        <span>Từ khóa</span>
                    </div>
                    <div className={cx('list')}>
                        <ul>
                            {listTitle.map((item, index) => {
                                return (
                                    <li className={cx('item')} key={index}>
                                        <Button className={cx('link')} href="/">
                                            {item.title}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

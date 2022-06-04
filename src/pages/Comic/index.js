import Sidebar from '~/components/Layout/conponents/Sidebar';

import styles from './Comic.module.scss';
import classNames from 'classnames/bind';
import SideRank from '~/components/Layout/conponents/Sidebar/SideRank';
import { useParams } from 'react-router-dom';
import listComic from '~/assect/listComic';
import {} from '@fortawesome/free-brands-svg-icons';

import Content from './Content';

const cx = classNames.bind(styles);

function Comic() {
    const params = useParams();

    const comic = listComic.find((comic) => {
        return comic.link === `/truyen-tranh/${params.truyentranhId}`;
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content', 'col-sm-8')}>
                    <Content comic={comic} />
                </div>
                <div className={cx('sidebar', 'col-sm-4')}>
                    <Sidebar>
                        <SideRank />
                    </Sidebar>
                </div>
            </div>
        </div>
    );
}

export default Comic;

import Sidebar from '~/components/Layout/conponents/Sidebar';

import styles from './Comic.module.scss';
import classNames from 'classnames/bind';
import Title from '~/components/Title';
import SideRank from '~/components/Layout/conponents/Sidebar/SideRank';
import SideFollower from '~/components/Layout/conponents/Sidebar/SideFollower';
import SideTopUser from '~/components/Layout/conponents/Sidebar/SideTopUser';
import { useParams } from 'react-router-dom';
import listComic from '~/assect/listComic';
import {} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Comic() {
    const params = useParams();

    const comic = listComic.find((comic) => {
        return comic.link === `/truyen-tranh/${params.truyentranhId}`;
    });
    console.log(comic);

    // console.log(listComic[1].link);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content', 'col-sm-8')}>
                    <Title>Truyện </Title>
                    <div>
                        <h2>{comic.name}</h2>
                        <div>Cập nhật lúc: {comic.timeNewUpdate}</div>
                    </div>
                    <div>
                        <div className={cx('grid-img', 'col-sm-4')}>
                            <img src={comic.img} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className={cx('sidebar', 'col-sm-4')}>
                    <Sidebar>
                        <SideFollower />
                        <SideRank />
                        <SideTopUser />
                    </Sidebar>
                </div>
            </div>
        </div>
    );
}

export default Comic;

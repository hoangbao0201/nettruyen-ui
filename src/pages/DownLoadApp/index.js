import Sidebar from '~/components/Layout/conponents/Sidebar';

import styles from './DownLoadApp.module.scss';
import classNames from 'classnames/bind';
import SideRank from '~/components/Layout/conponents/Sidebar/SideRank';
import SideFollower from '~/components/Layout/conponents/Sidebar/SideFollower';
import SideTopUser from '~/components/Layout/conponents/Sidebar/SideTopUser';
import Title from '~/components/Title';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DownLoadApp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content', 'col-sm-8')}>
                    <Title>Tải app Nettruyen</Title>
                    <ul className={cx('list')}>
                        <Link to="/tai-app" style={{ textDecoration: 'underline', color: '#2980b9' }}>
                            1. Tải app android tại đây
                        </Link>
                        <div>2. Dành cho IOS: Đang được xây dựng</div>
                    </ul>
                    <h2 className={cx('title-list')}>Dự kiến phiên bản 1.1.3</h2>
                    <ul className={cx('list')}>
                        <li>Zoom ảnh với 2 ngón tay thay vì Double click</li>
                        <li>Download theo thứ tự từ nhỏ tới lớn</li>
                        <li>Đăng nhập bằng Google, Facebook</li>
                        <li>Fix lỗi report chapter</li>
                    </ul>
                    <h2 className={cx('title-list')}>Cập nhật phiên bản 1.1.2</h2>
                    <ul className={cx('list')}>
                        <li>Zoom ảnh khi Double click</li>
                        <li>Thêm truyện đề cử ở trang chủ</li>
                        <li>Fix lỗi hiển thị Chưa có truyện theo dõi</li>
                        <li>Đánh dấu chapter đã đọc</li>
                        <li>Fix lỗi header ẩn hiện khi đọc truyện</li>
                        <li>Và một số bổ sung khác...</li>
                    </ul>
                    <h2 className={cx('title-list')}>Phiên bản 1.1.1</h2>
                    <ul className={cx('list')}>
                        <li style={{ color: 'red' }}>Xem được truyện VIP free</li>
                        <li>Download truyện và xem offline</li>
                        <li>Thông báo khi truyện được cập nhật (đối với truyện đã theo dõi)</li>
                        <li>Lịch sử đọc truyện được đánh dấu dễ theo dõi</li>
                        <li>Hai loại giao diện: Sáng và Tối</li>
                        <li>Không quảng cáo</li>
                    </ul>
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

export default DownLoadApp;

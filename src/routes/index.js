import Home from '~/pages/Home';
import Hot from '~/pages/Hot';
import Follow from '~/pages/Follow';
import History from '~/pages/History';
import Category from '~/pages/Category';
import Rank from '~/pages/Rank';
import Search from '~/pages/Search';
import Boy from '~/pages/Boy';
import Girl from '~/pages/Girl';
import DownLoadApp from '~/pages/DownLoadApp';
import Comic from '~/pages/Comic';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/hot', component: Hot },
    { path: '/theo-doi', component: Follow },
    { path: '/lich-su', component: History },
    { path: '/the-loai', component: Category },
    { path: '/xep-hang', component: Rank },
    { path: '/tim-truyen', component: Search },
    { path: '/con-trai', component: Boy },
    { path: '/con-gai', component: Girl },
    { path: '/tai-app', component: DownLoadApp },
    { path: '/group', component: Home },
    { path: '/truyen-tranh/:truyentranhId', component: Comic },
];

export { publicRoutes };

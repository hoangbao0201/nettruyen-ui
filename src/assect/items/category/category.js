import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowsRotate,
    faCaretDown,
    faCloudUpload,
    faEye,
    faHouse,
    faSignal,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

const listItems = [
    {
        href: '/',
        fontIcon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        title: 'hot ',
        href: '/hot',
    },
    {
        title: 'theo dõi',
        href: '/theo-doi',
    },
    {
        title: 'lịch sử',
        href: '/lich-su',
    },
    {
        title: 'thể loại ',
        href: '/the-loai',
        fontIcon: <FontAwesomeIcon icon={faCaretDown} />,
        listCategory: [
            [
                {
                    title: 'Tất cả',
                    href: '/tim-truyen/tat-ca',
                },
                {
                    title: 'Action',
                    href: '/tim-truyen/action',
                },
                {
                    title: 'Adult',
                    href: '/tim-truyen/adult',
                },
                {
                    title: 'Adventure',
                    href: '/tim-truyen/adventure',
                },
                {
                    title: 'Anime',
                    href: '/tim-truyen/anime',
                },
                {
                    title: 'Chuyển sinh',
                    href: '/tim-truyen/chuyen-sinh',
                },
                {
                    title: 'Comedy',
                    href: '/tim-truyen/comedy',
                },
                {
                    title: 'Comic',
                    href: '/tim-truyen/comic',
                },
                {
                    title: 'Cooking',
                    href: '/tim-truyen/cooking',
                },
                {
                    title: 'Cổ Đại',
                    href: '/tim-truyen/co-dai',
                },
                {
                    title: 'Doujinshi',
                    href: '/tim-truyen/doujinshi',
                },
                {
                    title: 'Drama',
                    href: '/tim-truyen/drama',
                },
                {
                    title: 'Đam Mỹ',
                    href: '/tim-truyen/dam-my',
                },
            ],
            [
                {
                    title: 'Ecchi',
                    href: '/tim-truyen/ecchi',
                },
                {
                    title: 'Fantasy',
                    href: '/tim-truyen/fantasy',
                },
                {
                    title: 'Gender Bender',
                    href: '/tim-truyen/gender-bender',
                },
                {
                    title: 'Harem',
                    href: '/tim-truyen/harem',
                },
                {
                    title: 'Historical',
                    href: '/tim-truyen/historical',
                },
                {
                    title: 'Horror',
                    href: '/tim-truyen/horror',
                },
                {
                    title: 'Josei',
                    href: '/tim-truyen/josei',
                },
                {
                    title: 'Live action',
                    href: '/tim-truyen/live-action',
                },
                {
                    title: 'Manga',
                    href: '/tim-truyen/manga',
                },
                {
                    title: 'Mahua',
                    href: '/tim-truyen/mahua',
                },
                {
                    title: 'Manhwa',
                    href: '/tim-truyen/manhwa',
                },
                {
                    title: 'Martial Arts',
                    href: '/tim-truyen/martial-arts',
                },
                {
                    title: 'Mature',
                    href: '/tim-truyen/mature',
                },
            ],
            [
                {
                    title: 'Mecha',
                    href: '/tim-truyen/mecha',
                },
                {
                    title: 'Mystery',
                    href: '/tim-truyen/mystery',
                },
                {
                    title: 'Ngôn Tình',
                    href: '/tim-truyen/ngon-tinh',
                },
                {
                    title: 'One shot',
                    href: '/tim-truyen/one-shot',
                },
                {
                    title: 'Psychologial',
                    href: '/tim-truyen/psychologial',
                },
                {
                    title: 'Romance',
                    href: '/tim-truyen/romance',
                },
                {
                    title: 'School life',
                    href: '/tim-truyen/school-life',
                },
                {
                    title: 'Sci fi',
                    href: '/tim-truyen/sci-fi',
                },
                {
                    title: 'Seinen',
                    href: '/tim-truyen/seinen',
                },
                {
                    title: 'Shoujo',
                    href: '/tim-truyen/shoujo',
                },
                {
                    title: 'Shoujo Ai',
                    href: '/tim-truyen/houjo-ai',
                },
                {
                    title: 'Shounen',
                    href: '/tim-truyen/shounen',
                },
                {
                    title: 'Shounen Ai',
                    href: '/tim-truyen/shounen-ai',
                },
            ],
            [
                {
                    title: 'Slice of Life',
                    href: '/tim-truyen/slice-of-life',
                },
                {
                    title: 'Smut',
                    href: '/tim-truyen/smut',
                },
                {
                    title: 'Soft Yaoi',
                    href: '/tim-truyen/soft-yaoi',
                },
                {
                    title: 'Soft Yuri',
                    href: '/tim-truyen/soft-yuri',
                },
                {
                    title: 'Sports',
                    href: '/tim-truyen/sports',
                },
                {
                    title: 'Supernatural',
                    href: '/tim-truyen/supernatural',
                },
                {
                    title: 'Thiếu Nhi',
                    href: '/tim-truyen/thieu-nhi',
                },
                {
                    title: 'Tragedy',
                    href: '/tim-truyen/tragedy',
                },
                {
                    title: 'Trinh Thám',
                    href: '/tim-truyen/trinh-tham',
                },
                {
                    title: 'Truyện Scan',
                    href: '/tim-truyen/truyen-scan',
                },
                {
                    title: 'Truyện Màu',
                    href: '/tim-truyen/truyen-mau',
                },
                {
                    title: 'Webtoon',
                    href: '/tim-truyen/webtoon',
                },
                {
                    title: 'Xuyên Không',
                    href: '/tim-truyen/xuyen-khong',
                },
            ],
        ],
    },
    {
        title: 'xếp hạng ',
        href: '/xep-hang',
        fontIcon: <FontAwesomeIcon icon={faCaretDown} />,
        listRank: [
            [
                {
                    title: ' Top All',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    more: 'nguyenhoangbao',
                    href: '/top-all',
                },
                {
                    title: ' Top tháng',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    href: '/top-thang',
                },
                {
                    title: ' Top Tuần',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    href: '/top-tuan',
                },
                {
                    title: ' Top ngày',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    href: '/top-ngay',
                },
            ],
            [
                {
                    title: ' Truyện Full',
                    icon: <FontAwesomeIcon icon={faSignal} />,
                    href: '/truyen-full',
                },
                {
                    title: ' Yêu thích',
                    icon: <FontAwesomeIcon icon={faThumbsUp} />,
                    href: '/yeu-thich',
                },
                {
                    title: ' Mới cập nhật',
                    icon: <FontAwesomeIcon icon={faArrowsRotate} />,
                    href: '/moi-cap-nhat',
                },
                {
                    title: ' Truyện mới',
                    icon: <FontAwesomeIcon icon={faCloudUpload} />,
                    href: '/truyen-moi',
                },
            ],
        ],
    },
    {
        title: 'tìm truyện',
        href: '/tim-truyen',
    },
    {
        title: 'con gái',
        href: '/con-gai',
    },
    {
        title: 'con trai',
        href: '/con-trai',
    },
    {
        title: 'tải app',
        href: '/tai-app',
    },
    {
        title: 'group',
        href: '/group',
    },
];

export default listItems;

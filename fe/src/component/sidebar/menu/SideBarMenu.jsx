import  './sideBarMenu.scss';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
import {Broadcast} from "react-bootstrap-icons";
import {LibraryMusic, StackedLineChartSharp} from "@mui/icons-material";
export const SideBarMenu = [
    {
        path : '',
        text: 'Khám Phá',
        icons: <AlbumRoundedIcon size={'24px'}/>
    },
    {
        path : 'zing-chart',
        text: '#zingchart',
        icons: <StackedLineChartSharp size={'24px'}/>
    },
    {
        path : 'radio',
        text: 'Radio',
        icons: <Broadcast size={'24px'}/>
    },
    {
        path : 'library',
        text: 'Thư viện',
        icons: <LibraryMusic size={'24px'}/>
    }
]
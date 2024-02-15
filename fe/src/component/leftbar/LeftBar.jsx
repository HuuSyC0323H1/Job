import './leftBar.scss';
import {Link} from "react-router-dom";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
export const LeftBar = () => {

    return (
        <>
            <div className="left">
                <div className="left-wrapper">
                    <div className="left-navbar">
                        <div className="left-navbar-brand">
                            <div className="left-navbar-item">
                                <button className='btn'>
                                    <span className="logo"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="left-navbar left-navbar-main">
                        <ul className="left-navbar-menu">
                            <li className="left-navbar-item active">
                                <Link to="">
                                    <CircleOutlinedIcon style={{marginRight:"15px"}}/>
                                    <span>Kham Pha</span>
                                </Link>
                            </li>
                            <li className="left-navbar-item">
                                <Link to="">
                                    <QueryStatsOutlinedIcon style={{marginRight:"15px"}}/>
                                    <span>ZingChart</span>
                                </Link>
                            </li>
                            <li className="left-navbar-item">
                                <Link to="">
                                    <RadioOutlinedIcon style={{marginRight:"15px"}}/>
                                    <span>Radio</span>
                                </Link>
                            </li>
                            <li className="left-navbar-item sidebar-lib">
                                <Link to="">
                                    <LibraryMusicOutlinedIcon style={{marginRight:"15px"}}/>
                                    <span>Thu vien</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
import './navbar.scss';
import {Link} from "react-router-dom";
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="level">
                    <div className="level-left">
                        <button className="zm-btn button">
                            <WestOutlinedIcon style={{marginRight:"10px"}}/>
                        </button>

                        <button className="zm-btn disable button">
                            <TrendingFlatOutlinedIcon style={{marginRight:"20px"}}/>
                        </button>

                        <form className="search">
                            <div className="search-container">
                                <button className="zm-btn button">
                                    <SearchOutlinedIcon/>
                                </button>
                                <div className="input-wrapper">
                                    <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="level-right">
                        <div className="setting-item">
                            <button className="zm-btn button">
                                <SettingsIcon/>
                            </button>
                        </div>
                        <div className="user-setting">
                            <div className="avatar-frame">
                                <button className="zm-btn button">
                                    <img src="" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
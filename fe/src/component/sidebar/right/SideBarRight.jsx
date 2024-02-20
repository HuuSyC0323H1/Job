import './sideBarRight.scss';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Scrollbars from "react-custom-scrollbars-2";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export const SideBarRight = ({setOffPlay}) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [disable, setDisable] = useState(true);

    const handleMoreIconClick = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div>
            <div className="sideRight_header">
                <div className="list1">
                    <button
                        className="action is_active"
                    >
                        <h6 className="has-text-white queue-list-title">Danh sách phát</h6>
                    </button>
                    <button
                        className="action"
                    >
                        <h6 className="has-text-white">Nghe gần đây</h6></button>
                </div>
                <div className="list2">
                    {!disable ? (
                        <>
                            <span className="disable"><AccessAlarmIcon size={18}/></span>
                            <span className="disable" onClick={handleMoreIconClick}><MoreHorizIcon size={18}/></span>
                        </>
                    ) : (
                        <>
                            <span><AccessAlarmIcon size={18}/></span>
                            <span onClick={handleMoreIconClick}><MoreHorizIcon size={18}/></span>
                        </>
                    )}
                    {isPopupOpen && (
                        <div className="menu menu-settings right">
                            <ul className="menu-list">
                            <li>
                                    <button className="zm-btn button" tabIndex="0"
                                            onClick={() => {setOffPlay(prevOffPlay => !prevOffPlay);setDisable(false);}}>
                                        <DeleteOutlineOutlinedIcon/>
                                        <a>Xóa danh sách phát</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="zm-btn button" tabIndex="0">
                                        <FileDownloadOutlinedIcon/>
                                        <a>Tải danh sách phát</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="zm-btn button" tabIndex="0">
                                        <AddCircleOutlineOutlinedIcon/>
                                        <a>Thêm vào playlist</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {disable ? (
                <div className="containerr">
                    <div className="sideRight_body">

                    </div>
                    <div className="sideBody2">
                        <span className="next">Tiếp theo</span>
                        <span className="from">
                        <span>Từ playlist</span>
                        <span style={{color: "rgb(194, 115, 237)"}}></span>
                    </span>
                    </div>
                    <div className="listSong">
                        <Scrollbars style={{width: "100%", height: "80vh"}}>

                        </Scrollbars>
                    </div>
                </div>
            ):(
                <>
                    <h1 style={{color:"white"}}>abc</h1>
                </>
            )}
        </div>
    )
}
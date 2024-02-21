import './sideBarRight.scss';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Scrollbars from "react-custom-scrollbars-2";
import {useEffect, useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
export const SideBarRight = ({setOffPlay}) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [disable, setDisable] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const popupRef = useRef(null);

    const handleMoreIconClick = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const  handleDeletePopUp = () => {
        setOffPlay(prevOffPlay => !prevOffPlay);
        setDisable(false);
        setIsPopupOpen(false);
    }

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="sideRight_header">
                <div className="list1">
                    <button className={`action ${isActive ? "is_active" : ""}`} onClick={handleButtonClick}>
                        <h6 className="has-text-white queue-list-title">Danh sách phát</h6>
                    </button>
                    <button className={`action ${isActive ? "" : "is_active"}`} onClick={handleButtonClick}>
                        <h6 className="has-text-white">Nghe gần đây</h6></button>
                </div>
                <div className="list2" ref={popupRef}>
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
                        <div className="menu menu-settings right" >
                            <ul className="menu-list">
                            <li>
                                    <button className="zm-btn button" tabIndex="0"
                                            onClick={handleDeletePopUp}>
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
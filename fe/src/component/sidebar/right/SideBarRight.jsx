import './sideBarRight.scss';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Scrollbars from "react-custom-scrollbars-2";
export const SideBarRight = () => {

    return (
        <div>
            <div className="sideRight_header">
                <div className="list1">
                    <button
                        className={`action`}
                    >
                        Danh sách phát
                    </button>
                    <button
                        className={`action`}
                    >
                        Nghe gần đây
                    </button>
                </div>
                <div className="list2">
                  <span>
                    <AccessAlarmIcon size={18}/>
                  </span>
                            <span>
                    <MoreHorizIcon size={18}/>
                  </span>
                </div>
            </div>
            <div className="container">
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
        </div>
    )
}
import './sections.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined.js";

export const Sections = () => {


    return (
        <div className="sections">
            <div className="sections_title">
                <h2 className="text_title">Nhạc Remix Cực Bốc</h2>
                <div className="hover">
                    <span>Tất Cả <ArrowForwardIosOutlinedIcon/></span>
                </div>
            </div>
            <div className="section_content">
                <div className="section">
                    <div className="section_img">
                        <img
                            src={"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/7/f/0/f7f0b8dbc196e738ac1f5df5a3cb68cc.jpg"}
                            alt=""/>
                        <div className="icon_img">
                            <FavoriteBorderOutlinedIcon size={25} style={{color: "#E5E5E5"}}/>
                            <PlayCircleFilledWhiteOutlinedIcon size={45} style={{color: "#E5E5E5"}}/>
                            <MoreHorizOutlinedIcon size={25} style={{color: "#E5E5E5"}}/>
                        </div>
                    </div>
                    <div className="section_depscription">
                        <span>
                            Sôi động hết cỡ với series Dance Vi...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
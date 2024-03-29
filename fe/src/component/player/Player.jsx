import './player.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import {Slider} from "@mui/material";

// eslint-disable-next-line react/prop-types
export const Player = ({setIsShow}) => {



    return (
        <div className="play_control">
            <div className="detail_song">
                <div className="ava_thumb">
                    <img  alt=""/>
                </div>
                <div className="song_infor">
                    <p></p>

                    <span></span>
                </div>

                <div className="like_action">
                    <span><FavoriteBorderOutlinedIcon size={21}/></span>
                    <span><MoreHorizOutlinedIcon size={21}/></span>
                </div>
            </div>

            <div className="main_control">

            </div>

            <div className="volume">
                <div className="volume_zone">
                    <VolumeUpOutlinedIcon size={27}/>
                    <div>
                        <Slider defaultValue={50} className="volume_action"
                                tooltip={{formatter: null}}
                        />
                    </div>
                </div>

                <div className="btn_playlist">
                    <div className="playlist_action" onClick={() => setIsShow(prev => !prev)}>
                        <QueueMusicOutlinedIcon size={23}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
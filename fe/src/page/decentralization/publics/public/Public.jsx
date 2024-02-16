import './public.scss'
import {useState} from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from "../../../../component/navbar/Navbar.jsx";
import {SideBarLeft} from "../../../../component/sidebar/left/SideBarLeft.jsx";
import {SideBarRight} from "../../../../component/sidebar/right/SideBarRight.jsx";
import {Player} from "../../../../component/player/Player.jsx";
export const Public = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div className="wapper">
            <div className="content">
                <div className="side_left">
                    <SideBarLeft/>
                </div>

                {isShow ? <div className="contents">
                    <div className="header">
                        <Navbar/>
                    </div>
                    <Outlet/>
                </div> : <div className="contents_hiden">
                    <div className="header_hiden">
                        <Navbar/>
                    </div>
                    <Outlet/>
                </div>}
                {isShow ?
                    <div className="side_right">
                        <SideBarRight/>
                    </div> : <div className="sideRight_hidden">
                        <SideBarRight/>
                    </div>}
            </div>

            <div className="playmusic">
                <Player setIsShow={setIsShow}/>
            </div>
        </div>
    )
}
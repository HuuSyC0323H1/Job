import './public.scss'
import {useState} from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from "../../../../component/navbar/Navbar.jsx";
import {SideBarLeft} from "../../../../component/sidebar/left/SideBarLeft.jsx";
import {SideBarRight} from "../../../../component/sidebar/right/SideBarRight.jsx";
import {Player} from "../../../../component/player/Player.jsx";

export const Public = () => {
    const [isShow, setIsShow] = useState(false)
    const [offPlay, setOffPlay] = useState(true)

    const handleOffPlay = () => {
        setOffPlay(!offPlay);
    }

    return (
        <div className="wapper">
            <div className="content">
                {offPlay ? (
                    <div className="side_left">
                        <SideBarLeft/>
                    </div>
                ): (
                    <div className="side_left_hidden">
                        <SideBarLeft/>
                    </div>
                )}

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
                {isShow ? (
                    offPlay ? (
                        <div className="side_right">
                            <SideBarRight setOffPlay={handleOffPlay}/>
                        </div>
                    ) : (
                        <div className="side_right_hidden">
                            <SideBarRight setOffPlay={handleOffPlay}/>
                        </div>
                    )
                ) : (
                    <div className="sideRight_hidden">
                        <SideBarRight setOffPlay={handleOffPlay}/>
                    </div>
                )}
            </div>
            {offPlay ? (
                <div className="playmusic">
                    <Player setIsShow={setIsShow}/>
                </div>
            ) : (
                <div className="playmusic hidden">
                    <Player setIsShow={setIsShow}/>
                </div>
            )}
        </div>
    )
}
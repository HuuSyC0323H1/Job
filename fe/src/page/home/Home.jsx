import './home.scss'
import {Music} from "../../component/music/Music.jsx";
import {LeftBar} from "../../component/leftbar/LeftBar.jsx";
import {RightBar} from "../../component/rightbar/RightBar.jsx";
import {Navbar} from "../../component/navbar/Navbar.jsx";
export const Home = () => {

    return (
        <>
            <div className="layout">
                <LeftBar/>
                <Navbar/>
                <RightBar/>
                <Music/>
            </div>
        </>
    )
}
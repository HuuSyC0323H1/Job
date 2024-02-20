import './home.scss';
import {Sliders} from "../../../../component/sliders/Sliders.jsx";
import {NewSong} from "../../../../component/newsong/NewSong.jsx";
import {Sections} from "../../../../component/sections/Sections.jsx";
import ChartRank from "../../../../component/chartRank/ChartRank.jsx";
import {Rank} from "../../../../component/rank/Rank.jsx";
import {Link} from "react-router-dom";

export const Home = () => {

    const weekChart = [
        {
            link: 'zing-chart-tuan/Bai-hat-Viet-Nam/IWZ9Z08I',
            cover: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg',
        },
        {
            link: 'zing-chart-tuan/Bai-hat-US-UK/IWZ9Z0BW',
            cover: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg'
        },
        {
            link: 'zing-chart-tuan/Bai-hat-KPop/IWZ9Z0BO',
            cover: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg'
        }
    ];

    return (
        <div className="home_page">
            <>
                <Sliders/>
                <NewSong/>
                <Sections data={""} number={5}/>
                <Rank/>
                <ChartRank/>
                <div className="week_chart">
                    {weekChart?.map((item) => (
                        <div className="week_img">
                            <Link to={item?.link?.split(".")[0]} key={item.link}>
                                <img src={item.cover} alt="image cover"/>
                            </Link>
                        </div>
                    ))}
                </div>

                <div style={{marginBottom: "90px"}}></div>
            </>
        </div>
    );
}
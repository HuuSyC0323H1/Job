import './home.scss';
import {Link} from "react-router-dom";

export const Home = () => {

    return (
        <div className="home_page">
            <div>
                {/*<Sliders/>*/}
                {/*<NewSong/>*/}
                {/*<Sections data={""} number={5}/>*/}
                {/*<Sections data={""} number={5}/>*/}
                {/*<Sections data={""} number={5}/>*/}
                {/*<Sections data={""} number={5}/>*/}
                {/*<Sections data={""} number={5}/>*/}
                {/*<Sections data={""} number={5}/>*/}
                {/*<Sections data={""} isShow={false} number={5}/>*/}
                {/*<ChartRank/>*/}
                <div className="week_chart">
                    <div className="week_img">
                        <Link to={""}>
                            <img src={""} alt="image cover"/>
                        </Link>
                    </div>
                </div>
                <div style={{marginBottom: "90px"}}></div>
            </div>
        </div>
    );
}
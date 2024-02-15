import './rightbar.scss';
import {useEffect, useState} from "react";

export const RightBar = () => {

    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotate(prevRotate => !prevRotate);
        }, 3000); // Adjust the interval duration as needed

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <>
            <div className="rightbar">
                <div style={{position: "relative", overflow: "hidden", width: "100%", height: "100%"}}>
                    <div className="zm-section" style={{
                        position: "absolute",
                        inset: "0",
                        overflow: "hidden scroll",
                        marginRight: "-6px",
                        marginBottom: "0"
                    }}>
                        <div className="containerd">
                            <div className="container">
                                <div className="OwYGChdu">
                                    <div className={`Hgfasss ${rotate ? `rotate` : ``}`}>
                                        <div className="galley first">
                                            <img
                                                src={"https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg"}
                                                width={700} height={300} style={{objectFit:"cover"}} alt=""/>
                                        </div>
                                        <div className="galley second">
                                            <img
                                                src={"https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg"}
                                                width={700} height={300} style={{objectFit:"cover"}} alt=""/>
                                        </div>
                                        <div className="galley previous">
                                            <img
                                                src={"https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg"}
                                                width={700} height={300} style={{objectFit:"cover"}} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="gallery">
                                    <div className="gallery-container">
                                        list album
                                    </div>
                                </div>
                            </div>
                            <div className="zm-section playlist-section channel-section pad-0">
                                <div className="container">
                                    <h2 className="title">Gan Day</h2>
                                    <div className="zm-carousel-wrapper">
                                        <div className="zm-carousel">
                                            <div className="zm-carousel__container">
                                                <div className="zm-carousel-item">
                                                    <div className="playlist-wrapper is-normal"
                                                         style={{lineHeight: "normal"}}>
                                                        <div className="zm-card">
                                                            <div>
                                                                <a className="" title="Giai Điệu Chữa Lành">
                                                                    <div className="zm-card-image">
                                                                        <img
                                                                            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg"
                                                                            alt=""/>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="zm-card-content">
                                                                <h4 className="title is-6">
                                                                    <a className="" title="Giai Điệu Chữa Lành">
                                                                       <span>
                                                                           <span>
                                                                               <span>Giai Điệu Chữa Lành</span>
                                                                           </span>
                                                                           <span style={{
                                                                               position: "fixed",
                                                                               visibility: "hidden",
                                                                               top: 0,
                                                                               left: 0
                                                                           }}></span>
                                                                       </span>
                                                                    </a>
                                                                </h4>
                                                                <h3 className="mt-10 subtitle"></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="zm-section playlist-section channel-section pad-0">
                                <div className="container">
                                    <h2 className="title">Gan Day</h2>
                                    <div className="zm-carousel-wrapper">
                                        <div className="zm-carousel">
                                            <div className="zm-carousel__container">
                                                <div className="zm-carousel-item">
                                                    <div className="playlist-wrapper is-normal"
                                                         style={{lineHeight: "normal"}}>
                                                        <div className="zm-card">
                                                            <div>
                                                                <a className="" title="Giai Điệu Chữa Lành">
                                                                    <div className="zm-card-image">
                                                                        <img
                                                                            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg"
                                                                            alt=""/>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="zm-card-content">
                                                                <h4 className="title is-6">
                                                                    <a className="" title="Giai Điệu Chữa Lành">
                                                                       <span>
                                                                           <span>
                                                                               <span>Giai Điệu Chữa Lành</span>
                                                                           </span>
                                                                           <span style={{
                                                                               position: "fixed",
                                                                               visibility: "hidden",
                                                                               top: 0,
                                                                               left: 0
                                                                           }}></span>
                                                                       </span>
                                                                    </a>
                                                                </h4>
                                                                <h3 className="mt-10 subtitle"></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="zm-section zm-new-release-section channel-section pad-0">
                                <h3 className="zm-section-title title is-2">
                                    Mới phát hành
                                    <a className="discovery-btn">
                                        Tất cả<i className="iconic-go-right"></i>
                                    </a>
                                </h3>
                                <div className="genre-select">
                                    <button className="zm-btn active button" tabIndex="0">Tất cả</button>
                                    <button className="zm-btn button" tabIndex="0">Việt Nam</button>
                                    <button className="zm-btn button" tabIndex="0">Quốc tế</button>
                                </div>
                                <div className="columns is-multiline">

                                </div>
                            </div>
                            <div className="zm-section zm-new-release-section channel-section pad-0">
                                <h3 className="zm-section-title title is-2">
                                    Mới phát hành
                                    <a className="discovery-btn">
                                        Tất cả<i className="iconic-go-right"></i>
                                    </a>
                                </h3>
                                <div className="genre-select">
                                    <button className="zm-btn active button" tabIndex="0">Tất cả</button>
                                    <button className="zm-btn button" tabIndex="0">Việt Nam</button>
                                    <button className="zm-btn button" tabIndex="0">Quốc tế</button>
                                </div>
                                <div className="columns is-multiline">

                                </div>
                            </div>
                            <div className="zm-section playlist-section channel-section pad-0"></div>
                            <div className="zm-section playlist-section channel-section pad-0"></div>
                            <div className="zm-section playlist-section channel-section pad-0"></div>
                            <div className="zm-section playlist-section channel-section pad-0"></div>
                        </div>
                        <div className="mar-b-30">

                        </div>
                    </div>
                    <div className="track-horizontal"></div>
                    <div className="track-vertical"></div>
                </div>
            </div>
        </>
    )
}
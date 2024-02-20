import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import './rank.scss';
import {useEffect, useState} from "react";
export const Rank = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const moveCarouselItem = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % 3;
            moveCarouselItem(nextIndex);
        }, 10000);

        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <div className="ranks">
            <div className="ranks_title">
                <h2 className="text_title">BXH Nhạc Mới</h2>
                <div className="hover">
                    <span>Tất Cả <ArrowForwardIosOutlinedIcon/></span>
                </div>
            </div>
            <div className="zm-carousel-wrapper">
                <div className="zm-carousel">
                    <div className="zm-carousel__container"
                         style={{
                             transform: `translate3d(${-currentIndex * 1628}px, 0, 0)`,
                             transition: 'transform 0.3s ease'
                         }}
                    >
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image playlist-action">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image playlist-action">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image playlist-action">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zm-carousel_item">
                            <div className="new-release-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="zm-card-image">
                                            <figure className="image is-120x120">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg"
                                                    alt=""/>
                                            </figure>
                                            <div className="opacity"></div>
                                            <div className="zm-actions-container">
                                                <div className="zm-box zm-actions playlist-actions">
                                                    <span className="is-hidden">
                                                        <button
                                                            className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                            tabIndex="0"><i
                                                            className="icon ic-like"></i></button></span>
                                                    <button className="zm-btn action-play  button" tabIndex="0">
                                                        <i className="icon action-play ic-svg-play-circle"></i>
                                                    </button>
                                                    <button
                                                        className="zm-btn zm-tooltip-btn is-hidden is-hover-circle button"
                                                        tabIndex="0">
                                                        <i className="icon ic-more"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <div>
                                            <div className="title-wrapper">
                                                <span className="item-title title">
                                                    <span>
                                                        <span>
                                                            <span>Sau Lời Từ Khước (Theme Song From MAI )</span>
                                                        </span>
                                                        <span style={{
                                                            position: "fixed",
                                                            visibility: "hidden",
                                                            top: 0,
                                                            left: 0
                                                        }}></span>
                                                    </span>
                                                </span>
                                            </div>
                                            <h3 className="is-one-line subtitle">
                                                <a className="is-ghost" href="/Phan-Manh-Quynh">Phan Mạnh Quỳnh</a>
                                            </h3>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <span className="order">#1</span>
                                            <span className="release-date">15.02.2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
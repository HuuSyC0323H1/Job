import './sliders.scss';
import {useEffect, useState} from "react";

export const Sliders = () => {

    const [selectedItem, setSelectedItem] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const cardData = [
        {
            title: "Card 1",
            image: "https://photo-zmp3.zmdcdn.me/banner/9/1/0/9/91097e29a479e0976e7f608ec0f3bf92.jpg",
            subtitle: "Subtitle 1"
        },
        {
            title: "Card 2",
            image: "https://photo-zmp3.zmdcdn.me/banner/c/2/b/7/c2b7c60ba712fbdd53519ca6c0e46179.jpg",
            subtitle: "Subtitle 2"
        },
        {
            title: "Card 3",
            image: "https://photo-zmp3.zmdcdn.me/banner/5/6/6/b/566b849f59470df7a41ce888f8447b50.jpg",
            subtitle: "Subtitle 3"
        },
    ];

    const totalItems = cardData.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextItem = (selectedItem + 1) % totalItems;
            setSelectedItem(nextItem);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [selectedItem, totalItems]);


    return (
        <>
            <div className="container">
                <div className="gallery">
                    <div className="gallery-container" style={{height: "259.078px"}}
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}>
                        <div className={`zm-gallery-prev ${isHovered ? 'visible' : ''}`}>
                            <button className="zm-btn zm-carousel-control-prev button" tabIndex="0">
                                <i className="icon ic-go-left"></i>
                            </button>
                        </div>
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className={`gallery-item ${
                                    index === selectedItem
                                        ? "gallery-item-selected"
                                        : index === selectedItem - 1
                                            ? "gallery-item-previous"
                                            : index === selectedItem + 1
                                                ? "gallery-item-next"
                                                : index === 0
                                                    ? "gallery-item-first"
                                                    : index === cardData.length - 1
                                                        ? "gallery-item-last"
                                                        : ""
                                }`}
                            >
                                <div className="zm-card">
                                    <a title="">
                                        <div className="zm-card-image">
                                            <figure className="image is-48x48"><img
                                                src={card.image}
                                                alt=""/></figure>
                                        </div>
                                        <div className="zm-card-content">
                                            <div className="title">{card.title}</div>
                                            <h3 className="subtitle">{card.subtitle}</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                        <div className={`zm-gallery-next ${isHovered ? 'visible' : ''}`}>
                            <button className="zm-btn zm-carousel-control-next button" tabIndex="0">
                                <i className="icon ic-go-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
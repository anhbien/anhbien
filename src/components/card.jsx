import React from "react";
import Thumbnail from "../images/Thumbnail.jpg";

function Card() {
    return (
        <div className="card bg-dark text-white">
            <img src={Thumbnail} className="card-img img-responsive" alt="Alt Text" />
            <div className="card-img-overlay">
                <a href="#">
                    <h5 className="card-title">PROJECT NAME</h5>
                </a>
                <p className="card-text text-truncate-2-line">This is a wider card with supporting text below as a
                    natural lead-in to additional content.</p>
            </div>
        </div>);
}

export default Card;
import React from "react";

const CommentDetail = (props) => {

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="Avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.timestamp}</span>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    );

};

export default CommentDetail;
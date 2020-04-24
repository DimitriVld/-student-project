import React from "react";

const SmileIcon = ({
    style = {},
    fill = "none",
    stroke = "#000",
    width = "100",
    height= "100",
    className = "",
    viewBox = "0 0 281 281"
}) => (
        <svg
            width={width}
            style={style}
            height={width}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            className={`${className || "smile"}-icon`}
        >
            <circle cx="140.018" cy="140.018" r="102.5" transform="rotate(30 140.018 140.018)" fill="#DBFF00"/>
            <path d="M192.162 170.701C175.594 199.398 138.704 209.119 109.768 192.412C80.8309 175.706 70.8045 138.898 87.373 110.201" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <ellipse cx="130.251" cy="104.934" rx="7.5" ry="29" transform="rotate(30 130.251 104.934)" fill="black"/>
            <ellipse cx="175.284" cy="130.934" rx="7.5" ry="29" transform="rotate(30 175.284 130.934)" fill="black"/>
        </svg>
    );

export default SmileIcon;
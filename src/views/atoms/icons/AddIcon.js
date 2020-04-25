import React from "react";

const AddIcon = ({
    style = {},
    fill = "none",
    stroke = "#000",
    width = "150",
    className = "",
    viewBox = "0 0 150 150"
}) => (
        <svg
            width={width}
            style={style}
            height={width}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            className={`${className || "burger"}-icon`}
        >
            <circle cx="74.9358" cy="74.6224" r="73.6224" stroke="white" strokeWidth="2"/>
            <line x1="46" y1="75.1865" x2="104" y2="75.1865" stroke="white" strokeWidth="3"/>
            <line x1="76.5" y1="47.6865" x2="76.5" y2="105.687" stroke="white" strokeWidth="3"/>
        </svg>
    );

export default AddIcon;
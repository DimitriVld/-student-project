import React from "react";

const Label = (props) => { 
    return(
        <label className={`label-atom`} htmlFor={props.for}> 
            {props.text}
        </label>
    )
}

export default Label;
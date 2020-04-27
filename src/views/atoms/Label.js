import React from "react";

const Label = (props) => { 
    return(
        <label className={`label-atom`}> 
            {props.text}
        </label>
    )
}

export default Label;
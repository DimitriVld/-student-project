import React from "react";

const Label = (props) => { 
    return(
        <label data-testid={props.testid} className={`label-atom`} htmlFor={props.for}> 
            {props.text}
        </label>
    )
}

export default Label;
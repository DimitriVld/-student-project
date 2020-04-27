import React from "react";

const Button = (props) => { 
    return(
        <button id={props.id} className={`button-atom ${props.disabled ? 'disabled' : ''}`} disabled={props.disabled} onClick={props.onClick}> 
            {props.text}
        </button>
    )
}

export default Button;
import React from "react";

const InputCheckbox = (props) => { 
    return (
        <input
            className={'input-checkbox-atom'}
            type={'checkbox'}
            id={props.id}
            name={props.name}
            value={props.value}
            onClick={props.onClick}
        />
    );
}

export default InputCheckbox;
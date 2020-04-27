import React from "react";

const InputCheckbox = (props) => { 
    return (
        <input
            className={'input-checkbox-atom'}
            type={'checkbox'}
            name={props.name}
        />
    );
}

export default InputCheckbox;
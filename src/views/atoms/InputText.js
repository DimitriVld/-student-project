import React from "react";

const InputText = (props) => { 
    return (
        <input
            className={'input-text-atom'}
            type={'text'}
            placeholder={props.placeholder ? props.placeholder : 'input'}
            name={props.name}
            readOnly={props.readOnly ? props.readOnly : false}
        />
    );
}

export default InputText;
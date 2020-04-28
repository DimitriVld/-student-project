import React from "react";

const InputText = (props) => { 
    return (
        <input
            className={`input-text-atom ${props.readOnly ? 'read-only-true' : 'read-only-false'}`}
            type={'text'}
            placeholder={props.placeholder ? props.placeholder : 'input'}
            name={props.name}
            readOnly={props.readOnly ? props.readOnly : false}
            data-testid={props.testid}
        />
    );
}

export default InputText;
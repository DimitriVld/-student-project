import React from "react";
import Label from "../atoms/Label";
import InputText from "../atoms/InputText";

const InputTextGroup = (props) => { 
    return(
        <fieldset className={`input-text-group-atom`}> 
            <Label text={props.text} />
            <InputText placeholder={props.placeholder} name={props.name} readOnly={props.readOnly} />
        </fieldset>
    )
}

export default InputTextGroup;
import React from "react";
import Label from "../atoms/Label";
import InputCheckbox from "../atoms/InputCheckbox";

const InputTextGroup = (props) => { 
    return(
        <fieldset className={`input-checkbox-group-molecule`}>     
            <InputCheckbox name={props.name} onClick={props.onClick} id={props.name} value={props.name}/>
            <Label text={props.text} for={props.name}/>
        </fieldset>
    )
}

export default InputTextGroup;
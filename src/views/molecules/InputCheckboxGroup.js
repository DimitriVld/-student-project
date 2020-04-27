import React from "react";
import Label from "../atoms/Label";
import InputCheckbox from "../atoms/InputCheckbox";

const InputTextGroup = (props) => { 
    return(
        <fieldset className={`input-checkbox-group-atom`}>     
            <InputCheckbox name={props.name} />
            <Label text={props.text} />
        </fieldset>
    )
}

export default InputTextGroup;
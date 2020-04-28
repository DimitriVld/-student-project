import React from "react";
import Burger from "./BurgerIcon";
import Smile from "./SmileIcon";
import Add from "./AddIcon";

const Icon = props => {
    switch (props.name) {
        case "Burger":
            return <Burger {...props} />;
        case "Smile":
            return <Smile {...props} />;
        case "Add":
            return <Add {...props} />;
        default:
            return;
    }
}

export default Icon;